var URL = "https://api.clearllc.com/api/v2/math/";
var apiKey = "?api_key=bed859b37ac6f1dd59387829a18db84c22ac99c09ee0f5fb99cb708364858818";
var operation=0; //add = 1, sub = 2, mult = 3, div = 4 
var empty = Number.MIN_SAFE_INTEGER;
var num1=empty;
var num2=empty;
var numDisplaying="";
let resultDisplaying = new Boolean(false);

function displayValue(num){

	if(resultDisplaying){ // if true
		numDisplaying = "";
		resultDisplaying = !resultDisplaying; // set to false
	}

	numDisplaying = numDisplaying + num;
	$("#resultBox").val(numDisplaying);

}

function operationButton(x){
	operation = x;
	num1 = numDisplaying;
	numDisplaying = "";
	$("#resultBox").val(numDisplaying);
}

function allclear(){
	operation=0;
	num1=empty;
	num2=empty;
	numDisplaying="";
	$("#resultBox").val(numDisplaying);
}

function equals() {
	num2 = numDisplaying;
	if(num2==empty){
		alert("Please enter a valid equation");
		num1=empty;
		num2=empty;
		return;
	}
	if (operation==0){
		alert("Please enter a valid equation");
		num1=empty;
		num2=empty;
		return;
	}
	if (operation==1){
		add();
	}
	if (operation==2){
		subtract();
	}
	if (operation==3){
		multiply();
	}
	if (operation==4){
		if(num2==0){
			alert("Cannot divide by 0");
			num2=empty;
			num1=empty;
		} else {
			divide();
		}
	}
	resultDisplaying = true;
	numDisplaying="";
	operation=0;
}

function multiply() {

	a=$.ajax({
		url: URL + 'Multiply' + apiKey + '&n1=' + num1 + '&n2=' + num2,
		method: "GET"
	}).done(function(data) {
		//clear out old data
		$("#resultBox").html("");
		$("#resultBox").val(data.result);
	}).fail(function(error) {
		console.log("multiplication error",error.statusText);

	});
}

function divide() {

        a=$.ajax({
                url: URL + 'Divide' + apiKey + '&n1=' + num1 + '&n2=' + num2,
                method: "GET"
        }).done(function(data) {
                //clear out old data
                $("#resultBox").html("");
                $("#resultBox").val(data.result);
        }).fail(function(error) {
                console.log("division error",error.statusText);
        });
}

function add() {

        a=$.ajax({
                url: URL + 'Add' + apiKey + '&n1=' + num1 + '&n2=' + num2,
                method: "GET"
        }).done(function(data) {
                //clear out old data
                $("#resultBox").html("");
                $("#resultBox").val(data.result);
        }).fail(function(error) {
                console.log("addition error",error.statusText);

        });
}

function subtract() {

        a=$.ajax({
                url: URL + 'Subtract' + apiKey + '&n1=' + num1 + '&n2=' + num2,
                method: "GET"
        }).done(function(data) {
                //clear out old data
                $("#resultBox").html("");
                $("#resultBox").val(data.result);
        }).fail(function(error) {
                console.log("subtraction error",error.statusText);

        });
}

