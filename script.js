function SendMail(event) {
    event.preventDefault();

    var params = {
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };
    
    emailjs.send("service_bw1hoqj", "template_8gykzsm", params).then(function (res) {
        alert("Success! ");
        document.getElementById('fullname').value = '';
        document.getElementById('email_id').value = '';
        document.getElementById('message').value = '';
    }).catch(function (error) {
        alert("Failed to send email. " + error);
    });
    
}