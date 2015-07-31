var timer;
function removeFlash () {
	if(questionView.isAllCorrect()) {
		clearTimeout(timer);
		timer = setTimeout(function() {
			$('#chapter').removeClass('all-correct');
			// document.getElementById('chapter').className = "";
		}, 2000);
	}
}

// function showAnswer (questions) {
// 	// for (var i = 0; i < questions.length; i++) {
// 	// 	var answers =  questions[i].answers;
// 	// 	for (var j = 0; j < answers.length; j++) {
// 	// 		// remove all the selected state
// 	// 		answers[j].selected = false;
// 	// 		if(answers[j].correct) {
// 	// 			// set the correct answer in selected state
// 	// 			answers[j].selected = true;
// 	// 			// set question to correct state
// 	// 			questions[i].correct = true;
// 	// 			questions[i].wrong = false;
// 	// 		}
// 	// 	};
// 	// };

// 	// vue.allCorrect = this.isAllCorrect();
// 	vue.isAnswerRevealed = true;
// }

function checkAnswer_Immediate (question, answer, answerIndex, answers) {

	// Reset all the answer to unchecked state
	for (var i = 0; i < answers.length; i++) {
		answers[i].selected = false;
	};
	answers[answerIndex].selected = true;
	question.correct = answer.correct;
	question.wrong = !answer.correct;

	// Uncomment if once choose wrong, cannot increase score again
	if(answer.correct && !question.isCorrect) vue.totalNumOfCorrect++;
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
	vue.allCorrect = this.isAllCorrect();
	// Remove alert with setTimeout
	removeFlash.call(this);

}

function checkAnswer_MultipleAnswers () {
	var questions = vue.questions;
	vue.totalNumOfCorrect = 0;
	for (var i = 0; i < questions.length; i++) {
		if(!questions[i].wrongAnswerCount && questions[i].correctAnswerCount === questions[i].numOfCorrectAnswers) {
			questions[i].correct = true;
			questions[i].wrong = false;
			vue.totalNumOfCorrect++;
		} else {
			questions[i].correct = false;
			questions[i].wrong = true;
		}
	};

	// Show "正確答案" button
	actionsView.setCheckAnswerState(true);

	vue.allCorrect = questionView.isAllCorrect();
	removeFlash.call(this);
}

function isAllCorrect_SingleAnswer () {
    return (vue.totalNumOfCorrect === vue.totalNumOfQuestion);
}

function isAllCorrect_MultipleAnswers () {
	for (var i = 0; i < this.questions.length; i++) {
	    if(this.questions[i].correct === false) { return false; }
	};
	return true;
}

function chooseAnswer_SingleAnswers (question, answer, answers) {
	actionsView.setCheckAnswerState(false);

	for (var i = 0; i < answers.length; i++) {
		answers[i].selected = false;
	};

	question.correctAnswerCount = ~~answer.correct;
	question.wrongAnswerCount = ~~!answer.correct;

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
	answer.selected = !answer.selected;
}


window.validateMethods = {
	/**
	 * Layout 1 - MC 純文字, 二選一
	 */
	'layout-1': {
		chooseAnswer: "",
		checkAnswer: checkAnswer_Immediate,
		isAllCorrect: isAllCorrect_SingleAnswer,
	},
	/**
	 * Layout 2 - MC 純文字, 可選多於一項
	 */
	'layout-2': {
		chooseAnswer: chooseAnswer_MultipleAnswers,
		checkAnswer: checkAnswer_MultipleAnswers,
		isAllCorrect: isAllCorrect_MultipleAnswers,
	},
	/**
	 * Layout 3 - MC 細圖, 選對錯
	 */
	'layout-3': {
		chooseAnswer: chooseAnswer_MultipleAnswers,
		checkAnswer: checkAnswer_MultipleAnswers,
		isAllCorrect: isAllCorrect_MultipleAnswers,
	},
	/**
	 * Layout 4 - MC 長型圖, 選對錯
	 */
	'layout-4': {
		chooseAnswer: chooseAnswer_SingleAnswers,
		checkAnswer: checkAnswer_MultipleAnswers,
		isAllCorrect: isAllCorrect_MultipleAnswers,
	},
	/**
	 * Layout 5 - MC 細圖, 三選一
	 */
	'layout-5': {
		chooseAnswer: chooseAnswer_SingleAnswers,
		checkAnswer: checkAnswer_MultipleAnswers,
		isAllCorrect: isAllCorrect_MultipleAnswers,
	},
}

