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
	/**
	 * Drag n Drop One Dropzone
	 */
	'dragnDrop_OneDropzone': {
		chooseAnswer: chooseAnswer_MultipleAnswers,
		checkAnswer: checkAnswer_MultipleAnswers,
	},
	/**
	 * Drag n Drop Multiple Dropzone
	 */
	'dragnDrop_MultipleDropzone': {
		chooseAnswer: chooseAnswer_MultipleDropzone,
		checkAnswer: checkAnswer_MultipleDropzone,
	},
	/**
	 * Drag n Drop Multiple Dropzone - Hidden On Correct
	 */
	'dragnDrop_MultipleDropzone_HiddenOnCorrect': {
		chooseAnswer: chooseAnswer_MultipleDropzone_HiddenOnCorrect,
		checkAnswer: checkAnswer_MultipleDropzone,
	},
	/**
	 * Drag n Drop Multiple Dropzone + True or False
	 */
	'dragnDrop_MultipleDropzone_TrueOrFalse': {
		chooseAnswer: chooseAnswer_MultipleDropzone,
		chooseSingleAnswer: chooseAnswer_SingleAnswer,
		checkAnswer: checkAnswer_MultipleDropzone_TrueOrFalse,
	},
	/**
	 * True or False + (Drag n Drop Multiple Dropzone + True or False)
	 */
	'dragnDrop_MultipleDropzone_TrueOrFalseMultiple': {
		chooseAnswer: chooseAnswer_MultipleDropzone,
		chooseSingleAnswer: chooseAnswer_SingleAnswer,
		checkAnswer: checkAnswer_MultipleDropzone_TrueOrFalseMultiple,
	},
	'dragnDrop_MultipleDropzone_TrueOrFalseMultipleAnswer': {
		chooseAnswer: chooseAnswer_MultipleDropzone,
		chooseSingleAnswer: chooseAnswer_SingleAnswer,
		chooseMultipleAnswers: chooseAnswer_MultipleAnswers,
		checkAnswer: checkAnswer_MultipleDropzone_TrueOrFalseMultipleAnswer,
	
		// checkAnswer: checkAnswer_MultipleDropzone_TrueOrFalseMultiple,
	},
}

// Cannot be reuse
function checkAnswer_MultipleDropzone_TrueOrFalseMultiple () {
	vue.studentScore = 0;
	var dndQuestion = vue.questions[0];
	var tof1stQuestion = vue.questions[1];
	var tof2ndQuestion = vue.questions[2];
	dndQuestion.correctAnswerCount = 0;

	// DND Question
	var trueOrFalseAnswers = dndQuestion.answers.tof;
	var dragAndDropAnswers = dndQuestion.answers.dnd;
	_.times(trueOrFalseAnswers.length, function(i) {
		dndQuestion.correctAnswerCount += trueOrFalseAnswers[i].correctAnswerCount;
	});
	_.times(dragAndDropAnswers.length, function(i) {
		dndQuestion.correctAnswerCount += ~~dragAndDropAnswers[i].correct;
	});

	console.log(dndQuestion.correctAnswerCount);
	// check if correctAnswerCount = answers.length
	dndQuestion.correct = (dndQuestion.correctAnswerCount === dndQuestion.numOfCorrectAnswers);

	// ToF Question
	tof1stQuestion.correct = (tof1stQuestion.correctAnswerCount == tof1stQuestion.numOfCorrectAnswers);
	tof2ndQuestion.correct = (tof2ndQuestion.correctAnswerCount == tof2ndQuestion.numOfCorrectAnswers);

	vue.studentScore = dndQuestion.correctAnswerCount + tof1stQuestion.correctAnswerCount + tof2ndQuestion.correctAnswerCount;

	// Show "正確答案" button
	actionsView.setCheckAnswerState(true);

	vue.allCorrect = actionsView.isAllCorrect();
	removeFlash.call(this);
	console.log("correctAnswerCount: "+dndQuestion.correctAnswerCount);

	console.log(vue.questions);
}

function checkAnswer_MultipleDropzone_TrueOrFalse () {
	vue.studentScore = 0;
	var question = vue.questions[vue.currentQuestion];
	question.correctAnswerCount = 0;

	var trueOrFalseAnswers = question.answers.tof;
	var dragAndDropAnswers = question.answers.dnd;
	_.times(trueOrFalseAnswers.length, function(i) {
		question.correctAnswerCount += trueOrFalseAnswers[i].correctAnswerCount;
	});
	_.times(dragAndDropAnswers.length, function(i) {
		question.correctAnswerCount += ~~dragAndDropAnswers[i].correct;
	});
	checkAnswer_MultipleDropzone();
	console.log(question.correctAnswerCount);
}

function chooseAnswer_MultipleDropzone_HiddenOnCorrect (question, answer, container, source) {
	chooseAnswer_MultipleDropzone(question, answer, container, source, true);
	checkAnswer_MultipleDropzone();
}

function chooseAnswer_MultipleDropzone (question, answer, container, source, increaseDragpoolCorrectCount) {
	if(typeof container === 'undefined' || typeof source === 'undefined') {
		return false;
	}
	if($(container).hasClass('dragzone')) {
		if (answer.correct) {
			question.correctAnswerCount--
		}
		answer.correct = false;
		answer.selected = false;
	} else {
		// check whether answer.type equal to dropPool.type
		if(container.__vue__.dropPool.type === answer.type) {
			// if true, correctAnswerCount++
			question.correctAnswerCount++;
			// set answer.correct = to  true;
			answer.correct = true;
			if(increaseDragpoolCorrectCount) {
				container.__vue__.dropPool.correctCount++;
			}
		} else {
			if (answer.correct) {
				question.correctAnswerCount--
			} 
			// if false, set answer.correct to false
			answer.correct = false;
		}
		answer.selected = true;
	}
	console.log("answer.correct: "+answer.correct);

	console.log("correctAnswerCount: "+question.correctAnswerCount);
}

function checkAnswer_MultipleDropzone () {
	var question = vue.questions[vue.currentQuestion];
	vue.studentScore = 0;
	
	// check if correctAnswerCount = answers.length
	if(question.correctAnswerCount === vue.baseScore) {
		question.correct = true;
	} else {
		question.correct = false;
	}

	vue.studentScore = question.correctAnswerCount;

	// Show "正確答案" button
	actionsView.setCheckAnswerState(true);

	vue.allCorrect = actionsView.isAllCorrect();
	removeFlash.call(this);
	console.log("correctAnswerCount: "+question.correctAnswerCount);
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
	if(answer.correct && !question.isAnswered) {
		vue.studentScore ++;
	}
	// Set the state of question to answered to prevent double answer
	question.isAnswered = true;

	// even choose wrong, when you choose right the score will increase
	// if(answer.correct && !question.isAnswered) {
	// 	question.isAnswered = true;
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
	vue.studentScore = 0;
	_.times(questions.length, function (i) {
		if(!questions[i].wrongAnswerCount && questions[i].correctAnswerCount === questions[i].numOfCorrectAnswers) {
			questions[i].correct = true;
			questions[i].wrong = false;
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

function chooseAnswer_MultipleSingleAnswers (question, answer, answers, index) {
	actionsView.setCheckAnswerState(false);

	_.times(answers.length, function (i) {
		answers[i].selected = false;
	});

	// This part cannot be used together with multiple answers, since it is hard setting, not increment/decrement
	question['correctAnswerCount'+index] = ~~answer.correct;

	console.log("correctAnswerCount: "+question['correctAnswerCount'+index]);

	answer.selected = !answer.selected;
}

function checkAnswer_MultipleDropzone_TrueOrFalseMultipleAnswer () {
	var questions = vue.questions;
	vue.studentScore = 0;
	var dndQuestion = vue.questions[0];
	var tofQuestion = vue.questions[1];
	dndQuestion.correctAnswerCount = 0;

	// DND Question
	var trueOrFalseAnswers = dndQuestion.answers.tof;
	var dragAndDropAnswers = dndQuestion.answers.dnd;
	_.times(trueOrFalseAnswers.length, function(i) {
		dndQuestion.correctAnswerCount += trueOrFalseAnswers[i].correctAnswerCount;
	});
	_.times(dragAndDropAnswers.length, function(i) {
		dndQuestion.correctAnswerCount += ~~dragAndDropAnswers[i].correct;
	});

	// check if correctAnswerCount = answers.length
	dndQuestion.correct = (dndQuestion.correctAnswerCount === dndQuestion.numOfCorrectAnswers);

	if(!tofQuestion.wrongAnswerCount && tofQuestion.correctAnswerCount === tofQuestion.numOfCorrectAnswers) {
		tofQuestion.correct = true;
		tofQuestion.wrong = false;
	} else {
		tofQuestion.correct = false;
		tofQuestion.wrong = true;
	}

	vue.studentScore = dndQuestion.correctAnswerCount + tofQuestion.correctAnswerCount;

	// Show "正確答案" button
	actionsView.setCheckAnswerState(true);

	vue.allCorrect = actionsView.isAllCorrect();
	removeFlash.call(this);
}