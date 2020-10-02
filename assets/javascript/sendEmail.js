/* Setup Emailjs for the contact form  */
let form = document.getElementById("contact");

function sendMail(contactForm) {
	emailjs.send("gmail", "serenappymail", {
			"from_name": contactForm.firstname.value + " " + contactForm.lastname.value,
			"from_email": contactForm.email.value,
            "serenappy_user_message": contactForm.message.value
        })
		.then(function (response) {
            ("SUCCESS", response);
			Swal.fire({
				icon: 'success',
				title: 'Success...',
				text: 'Your email has been sent.',
			});
		}, function (error) {
			("FAILED", error);
			Swal.fire({
				icon: 'error',
				title: 'Error...',
				text: 'Your email has not been sent.',
			});
        }); 
    form.reset();
    $('#contactModal').modal('hide');
    return false; // To block from loading a new page
}