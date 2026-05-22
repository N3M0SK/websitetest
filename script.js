function sendMail(){
	const parms = {
		name : document.getElementById("#name").value,
		email : document.getElementById("#email").value,
		message : document.getElementById("#message").value,
	}
	
	emailjs.send("service_4kukkea","template_18mjhu7", parms)
		.then(() => alert("email sent !!").catch(() => alert("email not sent!!")));	
}
