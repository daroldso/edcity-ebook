var vue,
QuestionView,
questionView,
ActionsView,
actionsView,
$exerciseContainer = $('#exercise-container'),
owl;

vue = new Vue({
    el:"#chapter",	
    data: {
    	chapterNum: "",
    	exerciseNum: "",
    	exerciseName: "",
    	exerciseInstruction: "",
		currentQuestion: 0,
		totalNumOfQuestion: 0,
		totalNumOfCorrect: 0,
		isAnswerChecked: false,
		isAnswerRevealed: false,
        allCorrect: false,
        layoutNumber: "",
    }
});

var router = Router();

router.on('/exercise/:chapter/:ex', function(chapter, ex) {
	// for getting the chapter name only
	vue.chapterNum = chapter;
	vue.exerciseNum = ex;
	var chapter = Book['ch'+vue.chapterNum];
	// getting all the exercises in the chapter
	var exercise = chapter.exercises['ex'+vue.exerciseNum];

	vue.layoutNumber = exercise.template;

	// assign all the questions in the exercise 1-3 to Vue
	vue.questions = exercise.questions;
	// assign exercise name to Vue
	vue.exerciseName = exercise.name;
	// assign exercise instruction to Vue
	vue.exerciseInstruction = exercise.instruction;

	// instantiate question view
	QuestionView = Vue.extend({
		template: "#layout-"+exercise.template+"-template"
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

		methods: validateMethods['layout-'+exercise.template],

		ready: function() {
			initCarousel();
		}
	})
	// Mount the vuew instance to #exercise
	questionView.$mount('#exercise');

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
			},
			reset: function() {
				var questions = vue.questions;
				for (var i = 0; i < questions.length; i++) {
					var answers =  questions[i].answers;
					for (var j = 0; j < answers.length; j++) {
						answers[j].selected = false;
					};
					questions[i].correct = false;
					questions[i].wrong = false;
					questions[i].isCorrect = false;
					questions[i].correctAnswerCount = 0;
					questions[i].wrongAnswerCount = 0;
				};
				vue.totalNumOfCorrect = 0;
				vue.isAnswerRevealed = false;
				vue.isAnswerChecked = false;

				// Back to first question
				owl.trigger('to.owl.carousel', [0,200,true]);
			},
			setCheckAnswerState: function(state) {
				this.$data.isAnswerChecked = state;
				vue.$data.isAnswerChecked = state;
			},
			checkAnswer: validateMethods['layout-'+exercise.template].checkAnswer,
		}
	});

	actionsView.$mount('#actions');



});

router.init('/exercise/1/1');



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