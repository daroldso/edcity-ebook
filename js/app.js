if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };
if (!window.console.dir) window.console.dir = function () { };

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
	methods: {
		saveState: function () {
			var objectWithAdditionalInfo = {
				chapterNum: vue.chapterNum,
				exerciseNum: vue.exerciseNum,
				isAnswerChecked: vue.isAnswerChecked,
				isAnswerRevealed: vue.isAnswerRevealed,
				studentScore: vue.studentScore,
			};

			delete vue.exercise.questions;
			vue.exercise.questions = vue.questions;

			var saveObject = $.extend(vue.exercise, objectWithAdditionalInfo);
			var saveObjectJson = JSON.stringify(saveObject);

			// Check if the ebook object exist
			// if (parent !== undefined && parent.hotspotDataCommunicator !== undefined) {
            if (typeof (parent) != 'undefined' && typeof (parent.hotspotDataCommunicator) != 'undefined') {
				parent.hotspotDataCommunicator.storeHotspotData(saveObjectJson);
			} else {
				console.log("Should be saved in production");
				console.log(saveObjectJson);
			}
		},
		retrieveState: function () {
			// Check if the ebook object exist
			// if (parent !== undefined && parent.hotspotDataCommunicator !== undefined) {
            if (typeof (parent) != 'undefined' && typeof (parent.hotspotDataCommunicator) != 'undefined') {
				parent.hotspotDataCommunicator.retrieveHotspotData(function (data) {
					// data could be empty / {"userData":null,"config":{"tts":"","url":""}} / our exercise JSON
					// console.log("data json: ");
					// console.log(data);
					if(data) {
						var dataObj = JSON.parse(data);
						// console.log("data json parsed to object: ");console.log(dataObj);
						
						// Check if there is saved user data
						if(dataObj.chapterNum !== undefined) {
							console.log("userData is not null");
							console.log("trigger load function. Load the userData from record");
							load(dataObj);
							return;
						}
					}
					console.log("userData is null");
					console.log("trigger init function. Load the default exercise object.");
					init(exerciseToInit);
				});
			} else {
				load(JSON.parse(exerciseToLoad));
				// var router = Router();
				// router.on('/exercise/:chapter/:ex', init);
				// router.init('/exercise/1/1');
			}
		},
		alertWindowInfo: function() {
			var versionNum = "0.10.0";
			var version = "Version: " + versionNum + "\n";
			var message = "Change lines and linesSaved data type from array to object\n";
			alert(version + message + JSON.stringify(vue.questions));
		},
		resetStoredJson: function() {
			// var response = confirm("你確定要清除本題已儲存的紀錄嗎？");
			// if(response && (parent !== undefined && parent.hotspotDataCommunicator !== undefined)) {
			// if(parent !== undefined && parent.hotspotDataCommunicator !== undefined) {
			// 	var exerciseToInitJson = JSON.stringify(exerciseToInit);
			// 	console.log(exerciseToInitJson);
			// 	parent.hotspotDataCommunicator.storeHotspotData(exerciseToInitJson);
			// 	console.log("Saved original json");
			// 	setTimeout(function() {
			// 		window.location.reload();
			// 	}, 1000);
			// }
		}
	}
});

vue.retrieveState();

function load (userData) {
	exercise = userData;

	vue.chapterNum = exerciseToInit.chapterNum;
	vue.exerciseNum = exerciseToInit.exerciseNum;

	vue.layoutNumber = exerciseToInit.layout;
	vue.exercise = exercise;
	// assign all the questions in the exercise 1-3 to Vue
	vue.questions = exercise.questions;
	// assign exercise name to Vue
	vue.exerciseName = exerciseToInit.name;
	// assign exercise instruction to Vue
	vue.exerciseInstruction = exerciseToInit.instruction;

	vue.baseScore = getBaseScore();
	vue.studentScore = exercise.studentScore;

	vue.isAnswerChecked = exercise.isAnswerChecked;
	vue.isAnswerRevealed = exercise.isAnswerRevealed;

	// instantiate question view and mount to #exercise
	initQuestionView(function() {
		loadDragnDropState();
		loadLinesSaved();
	});
	// instantiate action view and mount to #actions
	initActionView();
}

function init(exerciseToInit, ex) {
	if(isNaN(parseInt(exerciseToInit))) {
		exercise = exerciseToInit;
		vue.chapterNum = exercise.chapterNum;
		vue.exerciseNum = exercise.exerciseNum;
	} else {
		// for getting the chapter name only
		vue.chapterNum = exerciseToInit;
		vue.exerciseNum = ex;
		chapter = Book['ch'+vue.chapterNum];
		// getting all the exercises in the chapter
		exercise = chapter.exercises['ex'+vue.exerciseNum];
	}
	
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

function loadLinesSaved () {
	var questions = vue.questions;
	_.times(questions.length, function(i) {
		if(questions[i].linesSaved !== undefined) {
			if(getObjectLength(questions[i].linesSaved) > 0) {
				for(var p in questions[i].linesSaved) {
					var lineObj = questions[i].linesSaved[p];
					drawLine(lineObj.x1, lineObj.y1, lineObj.x2, lineObj.y2, lineObj.index, questions[i].lines, questions[i].linesSaved);
				}
			} else {
				questions[i].lines = {};
				questions[i].linesSaved = {};
			}
		}
	});
}

function loadDragnDropState () {
	var questions = vue.questions;
	_.times(questions.length, function(i) {
		if(questions[i].dragPools !== undefined && questions[i].linesSaved === undefined) {
			var answers = questions[i].answers;
			_.times(answers.length, function(j) {
				var attachTo = answers[j].attachTo;
				if(attachTo !== undefined && attachTo > 0) {
					var answer = $('#answer-'+j).detach();
					$('.dropzone.type-'+attachTo).append(answer);
				}
			});
		}
	});
}

function initQuestionView (callback) {
	QuestionView = Vue.extend({
		template: "#layout-"+exercise.layout+"-template"
	});

	// instantiate question vue instance
	questionView = new QuestionView({
		replace: false,
		data: {
			currentQuestion: vue.currentQuestion,
			questions : exercise.questions,
			chapterNum: exerciseToInit.chapterNum,
			exerciseNum: exerciseToInit.exerciseNum,
			imagePath: 'img/'+ exerciseToInit.chapterNum + '-' + exerciseToInit.exerciseNum + '-'
		},

		methods: validateMethods[exercise.type],

		ready: function() {
			initCarousel();
			// initVideo();
			if(typeof exercise.dragndropType !== "undefined") {
				dragnDropInit[exercise.dragndropType]();
				dragnDropBehaviors[exercise.dragndropBehavior]();
				initSvgCanvas();
				if(callback) { callback(); }
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
				this.isAnswerChecked = false;
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
				// owl.trigger('to.owl.carousel', [0,200,true]);
				owl.goTo(0);
				if(typeof drake !== "undefined" && drake.containers[0] !== null) {
					moveAnswersBacktoDragzone();
					sortAnswers();
					
					if(vue.exercise.type !== "dragnDrop_MultipleDropzone_TrueOrFalseMultiple" && vue.exercise.type !== "dragnDrop_MultipleDropzone_TrueOrFalse" && vue.exercise.type !== "dragnDrop_MultipleDropzone_TrueOrFalseMultipleAnswer") {
						resetAnswersCorrectAndSelectedToFalse(questions[vue.currentQuestion].answers);
						resetAnswersAttachtoToZero(questions[vue.currentQuestion].answers);
					}

					// only invoke for 7-2 when there need to have a box to show correctcount of each droppool
					if(questions[vue.currentQuestion].dropPools !== undefined) {
						resetDroppoolCorrectCount(questions[vue.currentQuestion].dropPools);
					}
				}
				// This is a line matching game
				// if($('#draw-panel').length > 0) {
				// 	_.times(questions.length, function(i) {
						
				// 	});
				// }

				// This is a line matching game
				if(vue.exercise.dragndropBehavior !== undefined && /drawLines/.test(vue.exercise.dragndropBehavior)) {
					_.times(questions.length, function(i) {
						if(questions[i].lines !== undefined) {
							if(getObjectLength(questions[i].lines) > 0) {
								for(var p in questions[i].lines) {
									if(questions[i].lines[p][0][0].remove !== undefined) {
										questions[i].lines[p][0][0].remove();
									}
								}
							}
						}

						// Clear the linesSaved array
						questions[i].lines = {};
						questions[i].linesSaved = {};

					});
				}

				if(vue.exercise.type === "dragnDrop_MultipleDropzone_TrueOrFalseMultiple" || vue.exercise.type === "dragnDrop_MultipleDropzone_TrueOrFalse" || vue.exercise.type === "dragnDrop_MultipleDropzone_TrueOrFalseMultipleAnswer") {
					if(vue.questions[0].answers.dnd) {
						resetAnswersCorrectAndSelectedToFalse(questions[0].answers.dnd);
						resetAnswersAttachtoToZero(questions[0].answers.dnd);
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
						resetAnswersAttachtoToZero(questions[vue.currentQuestion].answers.dnd);
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

				vue.saveState();
				// vue.resetStoredJson();
				
			},
			isAllCorrect: function() {
				var questions = vue.questions;
				for (var i = 0; i < questions.length; i++) {
					if(questions[i].correct === false) { return false; }
				};
				if(vue.studentScore < vue.baseScore) { return false; }
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
		singleItem: true,
		navigation:true,
		navigationText: ['<i class="fa fa-backward"></i> 上一頁','下一頁 <i class="fa fa-forward"></i>'],
		pagination: false,
		mouseDrag: false,
		touchDrag: false,
		// onInitialized: function(e) {
		afterInit: function(e) {
			var totalNumOfQuestion = vue.questions.length;
			$exerciseContainer.addClass('first-question');
			if(totalNumOfQuestion === 1) {$exerciseContainer.addClass('last-question');}
			vue.totalNumOfQuestion = totalNumOfQuestion;

			// if (parent !== undefined && parent.setIndicatorVisiblity !== undefined) {
            if (typeof (parent) != 'undefined' && typeof (parent.hotspotDataCommunicator) != 'undefined' && typeof (parent.setIndicatorVisiblity) != 'undefined' ) {
				parent.setIndicatorVisiblity(false);
				if(parent.frames["viewerPopupIFrame"].length !== undefined) {
					_.times(parent.frames["viewerPopupIFrame"].length, function (i) {
						parent.frames["viewerPopupIFrame"][i].style.overflow = "visible";
					});
				} else {
					parent.frames["viewerPopupIFrame"].style.overflow = "visible";
				}
			}
		},
		afterMove: function(e) {
			var totalNumOfQuestion = vue.totalNumOfQuestion;
			var index = this.currentItem;
			$exerciseContainer.removeClass('first-question last-question');
			vue.currentQuestion = index;
			if( index === 0 ) {
				$exerciseContainer.addClass('first-question');
			} else if (index === totalNumOfQuestion - 1) {
				$exerciseContainer.addClass('last-question');
			}
			// Only for trigger the opacity 0.3 effect of owl buttons because using old version owl carosel with absolute positioning the buttons, the opacity effect will fail to appear 
			if( index === 0 || index === totalNumOfQuestion - 1) {
				$('.owl-controls').css('display', 'inline-block');
				setTimeout(function() {
					$('.owl-controls').css('display', 'block');
				}, 0);
				
			}
		}
	})
	.data('owlCarousel')
	;
	// owl
	// .on('translated.owl.carousel', function(e) {
	// 	var totalNumOfQuestion = e.item.count;
	// 	var index = e.item.index;
	// 	$exerciseContainer.removeClass('first-question last-question');
	// 	vue.currentQuestion = index;
	// 	if( index === 0 ) {
	// 		$exerciseContainer.addClass('first-question');
	// 		// Emit a at first page event
			
	// 	} else if (index === totalNumOfQuestion - 1) {
	// 		$exerciseContainer.addClass('last-question');
	// 		// Emit a at last page event
			
	// 	}
	// });
}

function initVideo () {
	var questions = vue.questions;
	_.times(questions.length, function(i) {
		_.times(questions[i].videos.length, function(j) {
			videojs("video-"+i+"-"+j, { "controls": true, "autoplay": false, "preload": "auto" });
		});
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
	_.times(answers.length, function(i) {
		answers[i].correct = false;
		answers[i].selected = false;
	});
}

function resetAnswersAttachtoToZero (answers) {
	_.times(answers.length, function(i) {
		answers[i].attachTo = 0;
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
	alert("start of drawLine function");
	alert("x1:" + x1 + "\n" + "y1:" + y1 + "\n" + "x2:" + x2 + "\n" + "y2:" + y2 + "\n" + "index:" + index + "\n" + "lines:" + JSON.stringify(lines) + "\n" + "linesSaved:" + JSON.stringify(linesSaved) + "\n");
	try {
		lines[index] = vis.append("line")
			.attr("x1", x1)
			.attr("y1", y1)
			.attr("x2", x2)
			.attr("y2", y2);
	}
	catch(e) {
	    alert('An error has occurred: '+e.message)
	}
	alert("end of lines[index]");
	alert("x1:" + x1 + "\n" + "y1:" + y1 + "\n" + "x2:" + x2 + "\n" + "y2:" + y2 + "\n" + "index:" + index + "\n" + "lines:" + JSON.stringify(lines) + "\n" + "linesSaved:" + JSON.stringify(linesSaved) + "\n");
	try {
		linesSaved[index] = {
			index: index,
			x1: x1,
			y1: y1,
			x2: x2,
			y2: y2
		};
	}
	catch(e) {
	    alert('An error has occurred: '+e.message)
	}
	alert("end of linesSaved[index]");
	alert("x1:" + x1 + "\n" + "y1:" + y1 + "\n" + "x2:" + x2 + "\n" + "y2:" + y2 + "\n" + "index:" + index + "\n" + "lines:" + JSON.stringify(lines) + "\n" + "linesSaved:" + JSON.stringify(linesSaved) + "\n");
	var jsonString = JSON.stringify(lines);
	var jsonString2 = JSON.stringify(linesSaved);
	alert("jsonString:\n" + jsonString);
	alert("jsonString2:\n" + jsonString2);
	alert("end of drawLine function");
}

function endLine() {
	vis.on("mousemove", null);
}

function getObjectLength(obj) {
	var count = 0;
	var p;

	for(p in obj) {
		if(obj.hasOwnProperty(p)) {
			count++;
		}
	}

	return count;
}