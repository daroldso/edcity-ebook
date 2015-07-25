var timer;
function removeFlash () {
	if(this.isAllCorrect()) {
		clearTimeout(timer);
		timer = setTimeout(function() {
			document.getElementById('app').className = "";
		}, 2000);
	}
}

function showAnswer (questions) {
	// for (var i = 0; i < questions.length; i++) {
	// 	var answers =  questions[i].answers;
	// 	for (var j = 0; j < answers.length; j++) {
	// 		// remove all the selected state
	// 		answers[j].selected = false;
	// 		if(answers[j].correct) {
	// 			// set the correct answer in selected state
	// 			answers[j].selected = true;
	// 			// set question to correct state
	// 			questions[i].correct = true;
	// 			questions[i].wrong = false;
	// 		}
	// 	};
	// };

	// vue.allCorrect = this.isAllCorrect();
	vue.isAnswerRevealed = true;
	// removeFlash.call(this);
}
function reset (questions) {
	for (var i = 0; i < questions.length; i++) {
		var answers =  questions[i].answers;
		for (var j = 0; j < answers.length; j++) {
			answers[j].selected = false;
		};
		questions[i].correct = false;
		questions[i].wrong = false;
	};
	vue.totalNumOfCorrect = 0;
	vue.allCorrect = this.isAllCorrect();
}

(function() {

window.validateMethods = {
	/**
	 * Layout 1 - MC 純文字, 二選一
	 */
	'layout-1': {
		checkAnswer: function(question, answer, answerIndex, answers) {
			// if (question.isCorrect) return;

			// Reset all the answer to unchecked state
			for (var i = 0; i < answers.length; i++) {
				answers[i].selected = false;
			};
			answers[answerIndex].selected = true;
			question.correct = answer.correct;
			question.wrong = !answer.correct;

			// Uncomment if once choose wrong, cannot increase score again
			// if(answer.correct && !question.isCorrect) vue.totalNumOfCorrect++;
			// // Set the state of question to answered to prevent double answer
			// question.isCorrect = true;

			// even choose wrong, when you choose right the score will increase
			if(answer.correct && !question.isCorrect) {
				vue.totalNumOfCorrect++;
				question.isCorrect = true;
			}
			// Show "正確答案" button
			this.isAnswerChecked = true;

			// Check if all the questions are correct
			vue.allCorrect = this.isAllCorrect();
			// Remove alert with setTimeout
			removeFlash.call(this);
		},
		isAllCorrect: function() {
		    // for (var i = 0; i < this.questions.length; i++) {
		    //     if(this.questions[i].correct === false) { return false; }
		    // };
		    return (vue.totalNumOfCorrect === vue.totalNumOfQuestion);
		},
		showAnswer: showAnswer,
		reset: reset
	},
	/**
	 * Layout 2 - MC 純文字, 可選多於一項
	 */
	'layout-2': {
		chooseAnswer: function(question, answer) {
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
		},
		checkAnswer: function(questions) {
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
			this.$data.isAnswerChecked = true;
			vue.$data.isAnswerChecked = true;

			vue.allCorrect = this.isAllCorrect();
			removeFlash.call(this);
		},
		isAllCorrect: function() {
		    for (var i = 0; i < this.questions.length; i++) {
		        if(this.questions[i].correct === false) { return false; }
		    };
		    return true;
		},
		showAnswer: showAnswer,
		reset: reset
	},
	/**
	 * Layout 3 - MC 細圖, 選對錯
	 */
	'layout-3': {
		chooseAnswer: function(question, answer) {
			if(answer.correct) {
				question.correctAnswerCount = (answer.selected)
					? question.correctAnswerCount-1 // uncheck correct answer
					: question.correctAnswerCount+1; // check correct answer
			} else {
				question.wrongAnswerCount = (answer.selected)
					? question.wrongAnswerCount-1 // uncheck wrong answer
					: question.wrongAnswerCount+1; // check wrong answer

			}
			console.log(question);
			// console.log(question.correctAnswerCount);
			// console.log(question.wrongAnswerCount);
			answer.selected = !answer.selected;
		},
		checkAnswer: function(questions) {
			vue.totalNumOfCorrect = 0;
			for (var i = 0; i < questions.length; i++) {
				// console.log(questions[i]);
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
			this.$data.isAnswerChecked = true;
			vue.$data.isAnswerChecked = true;

			vue.allCorrect = this.isAllCorrect();
			removeFlash.call(this);
		},
		isAllCorrect: function() {
		    for (var i = 0; i < this.questions.length; i++) {
		        if(this.questions[i].correct === false) { return false; }
		    };
		    return true;
		},
		showAnswer: showAnswer,
		reset: reset
	},
}

})();