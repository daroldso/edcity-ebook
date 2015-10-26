var dragulaContainers = [];

window.dragnDropInit = {
	'oneDropzone': dragnDrop_OneDropzone,
	'multipleDropzone': dragnDrop_MultipleDropzone,
}

window.dragnDropBehaviors = {
	'normal': dragnDropBehavior_normal,
	'revertAndWarningOnWrong': dragnDropBehavior_revertAndWarningOnWrong,
	'drawLines': dragnDropBehavior_drawLines,
	'drawLines_vertical': dragnDropBehavior_drawLines_vertical
}

function dragnDrop_OneDropzone () {
	dragnDrop_MultipleDropzone();
}

function dragnDrop_MultipleDropzone () {
	var question = questionView.questions[vue.currentQuestion];
	if(question.dragPools == undefined) return;
	_.times(question.dragPools.length, function(i) {
		dragulaContainers.push(document.getElementById('dragzone-'+i));
	});
	_.times(question.dropPools.length, function(i) {
		dragulaContainers.push(document.getElementById('dropzone-'+i));
	});

}

function dragnDropBehavior_normal () {
	var question = questionView.questions[vue.currentQuestion];
	drake = dragula(dragulaContainers, {
		// copy: true,
		// revertOnSpill: true,
		// accepts: function(el, target, source, sibling) {
			// if(source.id === 'dropzone') {
			// 	drake.remove(source);
			// 	return false;
			// }
			// return true;
		// }
	});
	drake
	.on('drop', function(el, container, source) {
		if(($(container).hasClass('dragzone') && $(source).hasClass('dragzone'))) {
			return false;
		}

		questionView.chooseAnswer(question, el.__vue__.answer, container, source);

	})
	;
}

function dragnDropBehavior_revertAndWarningOnWrong () {
	var question = questionView.questions[vue.currentQuestion];
	drake = dragula(dragulaContainers);
	drake
	.on('drop', function(el, container, source) {
		if(($(container).hasClass('dragzone') && $(source).hasClass('dragzone'))) {
			return false;
		}
		if(container.__vue__.dropPool.type !== el.__vue__.answer.type) {
			el.__vue__.answer.selected = true;
			this.cancel(true);
			$(container).addClass('warning');
			setTimeout( function() { $(container).removeClass('warning') }, 1000);
			vue.saveState();
			
			return false;
		} else {
			$(container).addClass('correct');
			setTimeout( function() { $(container).removeClass('correct') }, 1000)
		}

		questionView.chooseAnswer(question, el.__vue__.answer, container, source);

	})
	.on('over', function (el, container) {
		$(container).addClass('over');
	})
	.on('out', function (el, container) {
		$(container).removeClass('over');
	})
	;
}

function dragnDropBehavior_drawLines () {
	$('body').addClass('layout-'+vue.layoutNumber);
	var question = questionView.questions[vue.currentQuestion];
	var answer;
	var svgOffset, elX, elY, svgX, svgY, dropX, dropY;
	drake = dragula(dragulaContainers, {
		copy: true,
		revertOnSpill: true,
	});
	drake
	.on('drag', function(el, source) {
		answer = el.__vue__.answer;

		if (question.lines[answer.index] !== undefined && question.lines[answer.index] !== null) {
			if(question.lines[answer.index].remove !== undefined) {
				question.lines[answer.index].remove();
			}
			delete question.lines[answer.index];
			delete question.linesSaved[answer.index];
		}

		svgOffset = $("#draw-panel").offset();
		// clientXXX = content + padding
		// offsetXXX = content + padding + border
		elX = (el.offsetWidth * answer.index) + el.offsetWidth / 2;
		elY = el.clientHeight;
		startLine(elX, elY);

		$('body').on('mousemove', function(e) {
			svgX = e.pageX - svgOffset.left;
			svgY = e.pageY - svgOffset.top;
			moveLine(svgX, svgY);
		});

		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
			var touch = e.touches[0];
			svgX = touch.pageX - svgOffset.left;
			svgY = touch.pageY - svgOffset.top;
			moveLine(svgX, svgY);
		}, false);

		if($(source).hasClass('dropzone')) {
			return false;
		}

		// if el is correct, set it back to correct = false and decrease correct count
		if(answer.correct) {
			answer.correct = false;
			question.correctAnswerCount--;
		}

	})
	.on('drop', function(el, container, source) {
		$('body').off('mousemove');
		if(($(container).hasClass('dragzone') && $(source).hasClass('dragzone'))) {
			return false;
		}
		drake.remove();
		dropX = (container.offsetWidth * (container.__vue__.dropPool.type-1)) + container.offsetWidth / 2;
		dropY = $('.dragzones-outer')[0].offsetHeight;


		console.log(elX, elY);
		console.log(dropX, dropY);
		drawLine(elX, elY, dropX, dropY, answer.index, question.lines, question.linesSaved);

		questionView.chooseAnswer(question, answer, container, source);
		// return false;

	})
	.on('cancel', function(el, source) {
		line.remove();
		$('body').off('mousemove');

	})
	.on('over', function (el, container) {
		$(container).addClass('over');
	})
	.on('out', function (el, container) {
		$(container).removeClass('over');
	})
	;
}

function dragnDropBehavior_drawLines_vertical () {
	$('body').addClass('layout-'+vue.layoutNumber);
	var question = questionView.questions[vue.currentQuestion];
	var answer;
	var svgOffset, elX, elY, svgX, svgY, dropX, dropY;

	drake = dragula(dragulaContainers, {
		copy: true,
		revertOnSpill: true,
	});

	drake
	.on('drag', function(el, source) {
		answer = el.__vue__.answer;

		if (question.lines[answer.index] !== undefined && question.lines[answer.index] !== null) {
			if(question.lines[answer.index].remove !== undefined) {
				question.lines[answer.index].remove();
			}
			delete question.lines[answer.index];
			delete question.linesSaved[answer.index];
		}

		svgOffset = $("#draw-panel").offset();
		// clientXXX = content + padding
		// offsetXXX = content + padding + border
		elX = el.offsetWidth + 30;
		elY = (el.offsetHeight * answer.index) + el.offsetHeight / 2;
		startLine(elX, elY);

		$('body').on('mousemove', function(e) {
			svgX = e.pageX - svgOffset.left;
			svgY = e.pageY - svgOffset.top;
			moveLine(svgX, svgY);
		});

		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
			var touch = e.touches[0];
			svgX = touch.pageX - svgOffset.left;
			svgY = touch.pageY - svgOffset.top;
			moveLine(svgX, svgY);
		}, false);

		if($(source).hasClass('dropzone')) {
			return false;
		}

		// if el is correct, set it back to correct = false and decrease correct count
		if(answer.correct) {
			answer.correct = false;
			question.correctAnswerCount--;
		}

	})
	.on('drop', function(el, container, source) {
		alert("start of drop event");
		// alert("el: "+el.className);
		// alert("container: "+container.className);
		// alert("source: "+source.className);
		// alert("question: "+JSON.stringify(question));
		// alert("answer: "+JSON.stringify(answer));

		$('body').off('mousemove');
		if(($(container).hasClass('dragzone') && $(source).hasClass('dragzone'))) {
			return false;
		}
		drake.remove();

		dropX = $('.dragzones-outer')[0].offsetWidth;
		dropY = (container.offsetHeight * (container.__vue__.dropPool.type-1)) + container.offsetHeight / 2;

		// console.log(elX, elY);
		// console.log(dropX, dropY);
		drawLine(elX, elY, dropX, dropY, answer.index, question.lines, question.linesSaved);
		alert("line drawn");

		alert("before questionView.chooseAnswer");
		questionView.chooseAnswer(question, answer, container, source);
		alert("after questionView.chooseAnswer");
		alert("end of drop event");
		// return false;

	})
	.on('cancel', function(el, source) {
		line.remove();
		$('body').off('mousemove');
	})
	.on('over', function (el, container) {
		$(container).addClass('over');
	})
	.on('out', function (el, container) {
		$(container).removeClass('over');
	})
	;
}