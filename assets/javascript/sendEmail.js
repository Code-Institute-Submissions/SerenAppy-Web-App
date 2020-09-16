/* Setup Emailjs for the contact form  */
function sendMail(contactForm) {
    emailjs.send("gmail", "serenappymail", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "serenappy_user_message": contactForm.emailmessage.value
    })
    .then(function(response) {
            console.log("SUCCESS", response);
            alert("Message Sent!");
        }, function(error) {
            console.log("FAILED", error);
            alert("Message Failed!");
        }
    );
    return false;  // To block from loading a new page
}