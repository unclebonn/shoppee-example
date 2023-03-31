/* write functions that define the action for each event */
function validate() {
	
	var genm = document.getElementById("genm").checked;
	var genf = document.getElementById("genf").checked;
	var geno = document.getElementById("geno").checked;
	/** 
	var fav1 = document.getElementById("fav1").checked;
	var fav2 = document.getElementById("fav2").checked;
	var fav3 = document.getElementById("fav3").checked;
	*/
	

	var sid = document.getElementById("sid").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var uname = document.getElementById("uname").value;
	var mail = document.getElementById("mail").value;
	var phone = document.getElementById("phone").value;




	var errMsg = "";								/* stores the error message */
	var result = true;							/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;		/* regular expression for letters and spaces only */

	/* Rule 1, check if all required inputs have value */
	/* _(2)_ */
	if (sid == "") {
		errMsg += "User ID cannot be empty.\n";
	}
	if (pwd1 == "") {
		errMsg += "Password cannot be empty.\n";
	}
	if (pwd2 == "") {
		errMsg += "Retype password cannot be empty.\n";
	}
	if (uname == "") {
		errMsg += "User name cannot be empty.\n";
	}
	if (mail == "") {
		errMsg += "Mail cannot be empty.\n";
	}
	if (phone == "") {
		errMsg += "Phone number cannot be empty.\n";
	}
	if ((genm == false) && (genf == false) && (geno == false)) {
		errMsg += "A gender must be selected.\n";
	}

	/**   if (fav1 || fav2 || fav3) { }
		else {
			errMsg += "Please check your favorite coffee\n";
		}  
		
	*/



	/* Rule 2, check if the mail contains an @ symbol  */
	/* _(3)_ */
	if (mail.indexOf('@') == 0) {
		errMsg += "User ID cannot start with an @ symbol.\n";
	}
	if (mail.indexOf('@') < 0) {
		errMsg += "User ID must contain an @ symbol.\n";
	}

	/* Rule 3, check if password and retype password are the same and pw at least 8 charaters*/
	if (pwd1 != pwd2) {
		errMsg += "Passwords do not match.\n";
	}
	if (pwd1.length < 9) {
		errMsg += "Passwords must be at least 8 characters.\n";
	}
	/* Rule 4, check if user name contains only letters and spaces */
	if (!uname.match(pattern)) {
		errMsg += "User name contains symbols.\n";
	}

	/* Display error message any error(s) is/are detected */
	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;

}

/* link HTML elements to corresponding event function */
function init() {
	/* link the variables to the HTML elements */
	var regForm = document.querySelector("#regform");
	console.log(regForm);
	/* assigns functions to corresponding events */
	regForm.onsubmit = validate;

}

/* execute the initialisation function once the window*/
window.onload = init;