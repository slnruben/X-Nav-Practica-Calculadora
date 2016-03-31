function changer(newValue) {
	var element = $("#display");
	element.val(newValue);
}

function addToDisplay(newValue) {
	var element = $("#display");
	element.val(element.val() + newValue);
}
function sqrtOp() {
	return Math.sqrt(op1);
}

$(document).ready(function() {
	$("#numbers div:not(:last-child)").children().click(function() {
		addToDisplay(this.textContent);
	});
	
	$(".basic").click(function() {
		addToDisplay(this.textContent);
	})

	$("#sqrt").click(function() {
		var display = $("#display");
		result = display.val();
		display.val(Math.sqrt(display.val()));
	})

	$("#ans").click(function() {
		addToDisplay(result);
	})

	$("#clear").click(function() {
		changer("");
	})

	$("#equal").click(function() {
		var display = $("#display");
		result = eval(display.val());
		display.val(result);
	})
});