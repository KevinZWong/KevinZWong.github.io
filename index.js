function validate(){
	var name = $("#name").val();
	var message = $("#message").val();
	var missing = [];
	if(name == "") {
		missing.push("name");
	}
		if(message == "") {
		missing.push("name");
	}
	if(missing.lenth>0){
		$("#formerrors").html("You are missing:" + message);
		$("#formerrors").css("color", "red") + (message);
		else{
					$("#formerrors").html("Your message has been submited:" + message);
		$("#formerrors").css("color", "green") + (message);
		}
	}
}
