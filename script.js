function sendMail(){
	let parms = {
		name : document.getElementById("name").value,
		email : document.getElementById("email").value,
		subject : document.getElementById("subject").value,
		message : document.getElementById("message").value,
	}
	
	emailjs.send("service_4kukkea","template_18mjhu7",parms).(alert("Email Sent!!"))
}