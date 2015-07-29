var vue,
QuestionView,
questionView,
$exerciseContainer = $('#exercise-container');

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
    },
});

var router = Router();

router.on('/exercise/:chapter/:ex', function(chapter, ex) {
	// for getting the chapter name only
	vue.chapterNum = chapter;
	vue.exerciseNum = ex;
	var chapter = Book['ch'+vue.chapterNum];
	// getting all the exercises in the chapter
	var exercise = chapter.exercises['ex'+vue.exerciseNum];

	// assign all the questions in the exercise 1-3 to Vue
	vue.questions = exercise.questions;
	// assign exercise name to Vue
	vue.exerciseName = exercise.name;
	// assign exercise instruction to Vue
	vue.exerciseInstruction = exercise.instruction;

	// instantiate question view
	QuestionView = Vue.extend({
		template: "#"+exercise.template+"-template"
	});

	// instantiate question vue instance
	questionView = new QuestionView({
		replace: false,
		data: {
			isAnswerChecked: vue.isAnswerChecked,
			currentQuestion: vue.currentQuestion,
	    	questions : exercise.questions,
	    	chapterNum: vue.chapterNum,
			exerciseNum: vue.exerciseNum,
			imagePath: 'img/ch' + vue.chapterNum + '/ex' + vue.exerciseNum + '/' + vue.chapterNum + '-' + vue.exerciseNum + '-'
		},

		methods: validateMethods[exercise.template],

		ready: function() {
			initCarousel();
		},
		attached: function() {

		}
	})
	// Mount the vuew instance to #exercise
	questionView.$mount('#exercise')

	// Vue.component('my-component', {
	// 	template: "#"+exercise.template+"-template"
	// });
});

router.init('/exercise/1/1');

function initCarousel () {
	var owl = $(".owl-carousel").owlCarousel({
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