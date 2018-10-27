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

	document.body.style.background = "linear-gradient(56deg,#37ff45,#858fff,#bc85ff,#ffca85,#ccff85,#85e3ff,#85ffa6,#d0ff85,#ffb885,#bc85ff,#f9a6b3,#22fff8,#ff53c3,#d3ffc3,#ff85b2,#ff8800)";
	 	
}

function changeBackgroundColor(color) {
	document.body.style.background = color;
}




