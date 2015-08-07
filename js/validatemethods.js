var timer;
function removeFlash () {
	if(actionsView.isAllCorrect()) {
		clearTimeout(timer);
		timer = setTimeout(function() {
			$('#chapter').removeClass('all-correct');
		}, 2000);
	}
}

window.validateMethods = {
	/**
	 * MC 二選一, 即時回饋
	 */
	'chooseSingleCheckImmediate': {
		chooseAnswer: "",
		checkAnswer: checkAnswer_Immediate,
	},
	/**
	 * MC 可選多於一項, 
	 */
	'chooseMultipleAnswer': {
		chooseAnswer: chooseAnswer_MultipleAnswers,
		checkAnswer: checkAnswer_MultipleAnswers,
	},
	/**
	 * MC 多選一
	 */
	'chooseSingleAnswer': {
		chooseAnswer: chooseAnswer_SingleAnswer,
		checkAnswer: checkAnswer_MultipleAnswers,
	},
	/**
	 * MC 多選一 + 多選多
	 */
	'chooseSingleAndMultipleAnswers': {
		chooseSingleAnswer: chooseAnswer_SingleAnswer,
		chooseMultipleAnswers: chooseAnswer_MultipleAnswers,
		checkAnswer: checkAnswer_MultipleAnswers,
	},

}

function chooseAnswer_SingleAnswer (question, answer, answers, filterProp) {
	actionsView.setCheckAnswerState(false);

	// answers = (filterProp)
	// 	? answers.filter(function(item) { return item.type === filterProp;	})
	// 	: answers;

	_.times(answers.length, function (i) {
		answers[i].selected = false;
	});

	// This part cannot be used together with multiple answers, since it is hard setting, not increment/decrement
	question.correctAnswerCount = ~~answer.correct;
	question.wrongAnswerCount = ~~!answer.correct;

	console.log("correctAnswerCount: "+question.correctAnswerCount);
	console.log("wrongAnswerCount: "+question.wrongAnswerCount);

	answer.selected = !answer.selected;
}

function chooseAnswer_MultipleAnswers (question, answer) {
	actionsView.setCheckAnswerState(false);

	if(answer.correct) {
		question.correctAnswerCount = (answer.selected)
			? question.correctAnswerCount-1 // uncheck correct answer
			: question.correctAnswerCount+1; // check correct answer
	} else {
		question.wrongAnswerCount = (answer.selected)
			? question.wrongAnswerCount-1 // uncheck wrong answer
			: question.wrongAnswerCount+1; // check wrong answer
	}
	console.log("correctAnswerCount: "+question.correctAnswerCount);
	console.log("wrongAnswerCount: "+question.wrongAnswerCount);

	answer.selected = !answer.selected;
}

function checkAnswer_Immediate (question, answer, answerIndex, answers) {

	// Reset all the answer to unchecked state
	_.times(answers.length, function (i) {
		answers[i].selected = false;
	});
	answers[answerIndex].selected = true;
	question.correct = answer.correct;
	question.wrong = !answer.correct;

	// Uncomment if once choose wrong, cannot increase score again
	if(answer.correct && !question.isCorrect) {
		vue.totalNumOfCorrect++;
		vue.studentScore ++;
	}
	// Set the state of question to answered to prevent double answer
	question.isCorrect = true;

	// even choose wrong, when you choose right the score will increase
	// if(answer.correct && !question.isCorrect) {
	// 	vue.totalNumOfCorrect++;
	// 	question.isCorrect = true;
	// }

	// Show "正確答案" button
	actionsView.setCheckAnswerState(true);

	// Check if all the questions are correct
	vue.allCorrect = actionsView.isAllCorrect();
	// Remove alert with setTimeout
	removeFlash.call(this);

}

function checkAnswer_MultipleAnswers () {
	var questions = vue.questions;
	vue.totalNumOfCorrect = 0;
	vue.studentScore = 0;
	_.times(questions.length, function (i) {
		if(!questions[i].wrongAnswerCount && questions[i].correctAnswerCount === questions[i].numOfCorrectAnswers) {
			questions[i].correct = true;
			questions[i].wrong = false;
			vue.totalNumOfCorrect++;
		} else {
			questions[i].correct = false;
			questions[i].wrong = true;
		}
		vue.studentScore += questions[i].correctAnswerCount;
	});



	// Show "正確答案" button
	actionsView.setCheckAnswerState(true);

	vue.allCorrect = actionsView.isAllCorrect();
	removeFlash.call(this);
}