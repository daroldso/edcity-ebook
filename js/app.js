var vue,
chapter,
exercise,
QuestionView,
questionView,
ActionsView,
actionsView,
$exerciseContainer = $('#exercise-container'),
owl,
drake;

if (typeof(hotspotDataCommunicator) === "undefined"){
	var hotspotDataCommunicator = parent.hotspotDataCommunicator;
}

vue = new Vue({
    el:"#chapter",	
    data: {
    	chapterNum: "",
    	exercise: "",
    	exerciseNum: "",
    	exerciseName: "",
    	exerciseInstruction: "",
		currentQuestion: 0,
		totalNumOfQuestion: 0,
		isAnswerChecked: false,
		isAnswerRevealed: false,
		allCorrect: false,
		layoutNumber: "",
		baseScore: 0,
		studentScore: 0,
	},
	computed: {
		status: function() {
			return (this.isAnswerChecked) ? 'submitted' : 'working';
		},
		display_model_ans: function() {
			return this.isAnswerRevealed;
		},
		user_ans: function() {
			var o = {};
			o[this.currentQuestion] = questionView.questions[this.currentQuestion];
			return o;
		}
	},
	methods: {
		saveState: function () {
			var objectWithAdditionalInfo = {
				chapterNum: vue.chapterNum,
				exerciseNum: vue.exerciseNum,
				isAnswerChecked: vue.isAnswerChecked,
				isAnswerChecked: vue.isAnswerChecked,
				studentScore: vue.studentScore,
			};

			var saveObject = $.extend(vue.exercise, objectWithAdditionalInfo);

			// Check if the ebook object exist
			if (typeof (parent) != 'undefined' && typeof (parent.hotspotDataCommunicator) != 'undefined') {
				parent.hotspotDataCommunicator.storeHotspotData(JSON.stringify(saveObject));
			} else {
				var jsonString = JSON.stringify(saveObject);
				console.log(jsonString);
				console.log(JSON.parse(jsonString));
			}
		},
		retrieveState: function () {
			// Check if the ebook object exist
			if (typeof (parent) != 'undefined' && typeof (parent.hotspotDataCommunicator) != 'undefined') {
				parent.hotspotDataCommunicator.retrieveHotspotData(function (data) {
					load(data);
				});
			} 
			else {
				// init(data);
				init(exerciseToInit);
			}
		},
	}
});

vue.retrieveState(load);

var router = Router();

router.on('/exercise/:chapter/:ex', init);
router.on('/exercise/load/', load);

router.init('/exercise/1/1');

function load (data) {
	console.log(exerciseToLoad);
	exercise = JSON.parse(exerciseToLoad);

	vue.chapterNum = exercise.chapterNum;
	vue.exerciseNum = exercise.exerciseNum;

	vue.layoutNumber = exercise.layout;
	vue.exercise = exercise;
	// assign all the questions in the exercise 1-3 to Vue
	vue.questions = exercise.questions;
	// assign exercise name to Vue
	vue.exerciseName = exercise.name;
	// assign exercise instruction to Vue
	vue.exerciseInstruction = exercise.instruction;

	vue.baseScore = getBaseScore();
	vue.studentScore = exercise.studentScore;

	vue.isAnswerChecked = exercise.isAnswerChecked;
	vue.isAnswerRevealed = exercise.isAnswerRevealed;

	// instantiate question view and mount to #exercise
	initQuestionView();
	// instantiate action view and mount to #actions
	initActionView();
}

function init(exerciseToInit) {
	// for getting the chapter name only
	// vue.chapterNum = parseInt(chapter);
	// vue.exerciseNum = parseInt(ex);
	// chapter = Book['ch'+vue.chapterNum];
	// getting all the exercises in the chapter
	// exercise = chapter.exercises['ex'+vue.exerciseNum];
	exercise = exerciseToInit;
	
	vue.chapterNum = exercise.chapterNum;
	vue.exerciseNum = exercise.exerciseNum;
	vue.exercise = exercise;
	vue.layoutNumber = exercise.layout;
	vue.exercise = exercise;
	// assign all the questions in the exercise 1-3 to Vue
	vue.questions = exercise.questions;
	// assign exercise name to Vue
	vue.exerciseName = exercise.name;
	// assign exercise instruction to Vue
	vue.exerciseInstruction = exercise.instruction;

	vue.baseScore = getBaseScore();

	// instantiate question view and mount to #exercise
	initQuestionView();
	// instantiate action view and mount to #actions
	initActionView();

}

function initQuestionView () {
	QuestionView = Vue.extend({
		template: "#layout-"+exercise.layout+"-template"
	});

	// instantiate question vue instance
	questionView = new QuestionView({
		replace: false,
		data: {
			currentQuestion: vue.currentQuestion,
			questions : exercise.questions,
			chapterNum: vue.chapterNum,
			exerciseNum: vue.exerciseNum,
			imagePath: 'img/ch' + vue.chapterNum + '/ex' + vue.exerciseNum + '/' + vue.chapterNum + '-' + vue.exerciseNum + '-'
		},

		methods: validateMethods[exercise.type],

		ready: function() {
			initCarousel();
			if(typeof exercise.dragndropType !== "undefined") {
				dragnDropInit[exercise.dragndropType]();
				dragnDropBehaviors[exercise.dragndropBehavior]();
				initSvgCanvas();
			}
		}
	})
	// Mount the vue instance to #exercise
	questionView.$mount('#exercise');
}

function initActionView () {
	ActionsView = Vue.extend({
		template: "#actions-template"
	});

	actionsView = new ActionsView({
		data: {
			isAnswerChecked: vue.isAnswerChecked,
		},
		methods: {
			showAnswer: function() {
				vue.isAnswerRevealed = true;
				vue.saveState();
			},
			reset: function() {
				vue.studentScore = 0;
				vue.isAnswerRevealed = false;
				vue.isAnswerChecked = false;
				vue.allCorrect = false;

				var questions = vue.questions;
				for (var i = 0; i < questions.length; i++) {
					var answers =  questions[i].answers;
					if(questions[i].correctAnswerCount0 !== undefined) {
						questions[i].correctAnswerCount0 = 0;
						questions[i].correctAnswerCount1 = 0;
						for (var j = 0; j < answers.length; j++) {
							_.times(answers[j].length, function(k) {
								answers[j][k].selected = false;
							});
						};
					} else {
						for (var j = 0; j < answers.length; j++) {
							answers[j].selected = false;
						};
					}
					questions[i].correct = false;
					questions[i].wrong = false;
					questions[i].isAnswered = false;
					questions[i].correctAnswerCount = 0;
					questions[i].wrongAnswerCount = 0;
				};

				// Back to first question
				owl.trigger('to.owl.carousel', [0,200,true]);
				if(typeof drake !== "undefined" && drake.containers[0] !== null) {
					moveAnswersBacktoDragzone();
					sortAnswers();
					
					if(vue.exercise.type !== "dragnDrop_MultipleDropzone_TrueOrFalseMultiple" && vue.exercise.type !== "dragnDrop_MultipleDropzone_TrueOrFalse" && vue.exercise.type !== "dragnDrop_OneDropzone") {
						resetAnswersCorrectAndSelectedToFalse(questions[vue.currentQuestion].answers);
					}

					// only invoke for 7-2 when there need to have a box to show correctcount of each droppool
					if(questions[vue.currentQuestion].dropPools !== undefined) {
						resetDroppoolCorrectCount(questions[vue.currentQuestion].dropPools);
					}
				}
				// This is a line matching game
				if($('#draw-panel').length > 0) {
					_.times(questions.length, function(i) {
						if(questions[i].lines == undefined) return;
						_.times(questions[i].lines.length, function(j) {
							questions[i].lines[j].remove();
						});
					});
				}
				if(vue.exercise.type === "dragnDrop_MultipleDropzone_TrueOrFalseMultiple" || vue.exercise.type === "dragnDrop_MultipleDropzone_TrueOrFalse") {
					if(vue.questions[0].answers.dnd) {
						resetAnswersCorrectAndSelectedToFalse(questions[0].answers.dnd);
					}
					if(vue.questions[0].answers.tof) {
						var trueOrFalseAnswers = vue.questions[0].answers.tof;
						_.times(trueOrFalseAnswers.length, function(i) {
							trueOrFalseAnswers[i].correctAnswerCount = 0;
							trueOrFalseAnswers[i].wrongAnswerCount = 0;
							_.times(trueOrFalseAnswers[i].answers.length, function(j) {
								trueOrFalseAnswers[i].answers[j].selected = false;
							});
							
						});
					}
				} else {
					if(vue.questions[vue.currentQuestion].answers.dnd) {
						resetAnswersCorrectAndSelectedToFalse(questions[vue.currentQuestion].answers.dnd);
					}
					if(vue.questions[vue.currentQuestion].answers.tof) {
						var trueOrFalseAnswers = vue.questions[vue.currentQuestion].answers.tof;
						_.times(trueOrFalseAnswers.length, function(i) {
							trueOrFalseAnswers[i].correctAnswerCount = 0;
							trueOrFalseAnswers[i].wrongAnswerCount = 0;
							_.times(trueOrFalseAnswers[i].answers.length, function(j) {
								trueOrFalseAnswers[i].answers[j].selected = false;
							});
							
						});
					}
					
				}


			},
			isAllCorrect: function() {
				var questions = vue.questions;
				for (var i = 0; i < questions.length; i++) {
					if(questions[i].correct === false) { return false; }
				};
				return true;
			},
			setCheckAnswerState: function(state) {
				this.$data.isAnswerChecked = state;
				vue.$data.isAnswerChecked = state;
			},
			checkAnswer: validateMethods[exercise.type].checkAnswer,
		}
	});

	actionsView.$mount('#actions');
}

function initCarousel () {
	owl = $(".owl-carousel").owlCarousel({
		nav:true,
		navText: ['<i class="fa fa-backward"></i> 上一頁','下一頁 <i class="fa fa-forward"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		},
		dots: false,
		mouseDrag: false,
		touchDrag: false,
		onInitialized: function(e) {
			var totalNumOfQuestion = this._items.length;
			$exerciseContainer.addClass('first-question');
			if(totalNumOfQuestion === 1) {$exerciseContainer.addClass('last-question');}
			vue.totalNumOfQuestion = totalNumOfQuestion;
		}
	});
	owl
	.on('translated.owl.carousel', function(e) {
		var totalNumOfQuestion = e.item.count;
		var index = e.item.index;
		$exerciseContainer.removeClass('first-question last-question');
		vue.currentQuestion = index;
		if( index === 0 ) {
			$exerciseContainer.addClass('first-question');
			// Emit a at first page event
			
		} else if (index === totalNumOfQuestion - 1) {
			$exerciseContainer.addClass('last-question');
			// Emit a at last page event
			
		}
	});
}

function sortAnswers () {
	// 2 steps questions
	if(!vue.questions[vue.currentQuestion].answers.sort) {
		vue.questions[vue.currentQuestion].answers.dnd.sort(function(a, b) {
			return a.index - b.index;
		});
	} else {
		vue.questions[vue.currentQuestion].answers.sort(function(a, b) {
			return a.index - b.index;
		});
		
	}
}

function getBaseScore () {
	if(vue.exercise.baseScore) {
		return vue.exercise.baseScore;
	}

	var answers = _.map(vue.questions, 'answers');
	var baseScore = 0;
	_.map(answers, function (item) {
		_.times(item.length, function (i) {
			// console.log(item[i]);
			// if answer has type property which only drag and drop type questions have
			// if(typeof item[i].type !== 'undefined'
			if(vue.exercise.type === "chooseSingleCheckImmediate" || vue.exercise.type === "chooseSingleAnswer") {
				baseScore += ~~item[i].correct;
			} else {
				baseScore++;
			}
		})
	});

	return baseScore;
	
}

function resetDroppoolCorrectCount (dropPools) {
	_.times(dropPools.length, function(i) {
		dropPools[i].correctCount = 0;
	});
}

function moveAnswersBacktoDragzone () {
	var elInDropzone = $('.dropzone').find('.exercise__answer').detach();
	if($('.dragzone').length === 1) {
		// console.log('.dragzone == 1');
		$('.dragzone').append(elInDropzone);
	} else {
		console.log('.dragzone > 1');
		_.map(elInDropzone, function(item) {
			var type = item.__vue__.$data.answer.type;
			$('.dragzone.type-'+type).append(item);
		});
	}
}

function resetAnswersCorrectAndSelectedToFalse (answers) {
	console.log(answers);
	_.times(answers.length, function(i) {
		answers[i].correct = false;
		answers[i].selected = false;
	});
}

var line, vis;
function initSvgCanvas () {

	vis = d3.select("#draw-panel")
		// .attr("width", 570)
		// .attr("height", 100)
		// .on("mousedown", startLine)
		// .on("mouseup", endLine);

}

function startLine(x, y) {
	// console.log(x, y);
	line = vis.append("line")
		.attr("x1", x)
		.attr("y1", y)
		.attr("x2", x)
		.attr("y2", y);
	
}

function moveLine(x, y) {
	// console.log(x, y);
	line.attr("x2", x)
		.attr("y2", y);
}

function drawLine(x1, y1, x2, y2, index, lines, linesSaved) {
	lines[index] = vis.append("line")
		.attr("x1", x1)
		.attr("y1", y1)
		.attr("x2", x2)
		.attr("y2", y2);
	linesSaved[index] = {
		index: index,
		x1: x1,
		y1: y1,
		x2: x2,
		y2: y2
	};
	console.log(x1, y1, x2, y2, index, lines, linesSaved);
}

function endLine() {
	vis.on("mousemove", null);
}

