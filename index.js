/*
function validate(){

alert("hi");
}

function validate-old()
{
	//  get the value of the user type-in to text-box:name 
	var name = $("#name").val();
	//  get the value of the user type-in to text-box:message 
	var message = $("#message").val();
	// declare an array for missing info
	var missing = [];

	// if name is empty, do inside the {}
	if(name == "") {
		missing.push("name");
	}
		
	// if message is empty, do inside the {}
	if(message == "") {
		missing.push("name");
	}

//alert("missing.lenth");

    // If the missing array is greater then 0; which mean it is not empty, then do inside {}
	if(missing.lenth>0){

		// to write text 
		$("#formerrors").html("You are missing:" + message);
		$("#formerrors").css("color", "red") + (message);
		else{
					
		
					$("#formerrors").html("Your message has been submited:" + message);
		$("#formerrors").css("color", "green") + (message);
		}
	}

//alert("hi");
}
*/

function validate() {
	var name = $("#name").val();
	var message = $("#message").val();
	var missing = [];
	if(name == "") {
		missing.push("name");
	}
	if(message == "") {
		missing.push(" message");
	}
	if(missing.length>0) {
		$("#formerrors").html("You are missing: " + missing);
		$("#formerrors").css("color", "red");
	} else {
		$("#formerrors").html("Thank you for submitting!");
		$("#formerrors").css("color", "green");
	}
}