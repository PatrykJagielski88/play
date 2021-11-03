/******w***********
    
    Project 3 Javascript
    Name: Patryk Jagielski
    Date: April 22, 2021
    Description: This is the JavaScript portion of Project 3.

******************/

document.addEventListener("DOMContentLoaded", load);

function load()
{
	hideErrors()

	document.getElementById("contact").addEventListener("submit", validate);

	document.getElementById("contact").addEventListener("reset", resetForm);
}

function hideErrors()
{
	let error = document.getElementsByClassName("error");

	for ( let i = 0; i < error.length; i++ )
	{
		error[i].style.display = "none";
	}
}

function resetForm(e)
{
	if ( confirm('Clear the form?') )
	{
		hideErrors();

		return true;
	}

	e.preventDefault();

	return false;	
}

function validate(e){
		
	hideErrors();
	
	if(formHasErrors())
	{
		e.preventDefault();
		
		return false;
	}

	return true;
}

function formHasErrors()
{
	let errorFlag = false;

	let nameInput = document.getElementById("fullName").value;

	if (nameInput == null || nameInput == "") 
	{
		document.getElementById("fullName_error").style.display = "block";

		if (!errorFlag) 
		{
		document.getElementById("fullName").focus();
		document.getElementById("fullName").select();
		}

		errorFlag = true;
	}

	let input = document.getElementById("phoneNumber").value;

	if (input.length != 10) 
	{	
		document.getElementById("phoneNumber_error").style.display = "block";	

		if (!errorFlag) 
		{
		document.getElementById("phoneNumber").focus();
		document.getElementById("phoneNumber").select();
		}

		errorFlag = true;
	}

	let emailRegEx = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	let emailInput = document.getElementById("email").value;

	if (!emailRegEx.test(emailInput)) 
	{			
	 	document.getElementById("email_error").style.display = "block";

		if(!errorFlag)
		{
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}

		errorFlag = true;
	}

	return errorFlag;
}

