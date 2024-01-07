//sendMail
function SendMail() {
  var params = {
    from_name : document.getElementById("fullName").Value,
    email_id : document.getElementById("email_id").Value,
    message : document.getElementById("message").Value
  }
  emailjs.send("sservice_p1vam6w", "template_w1r9ur7", params).then(function (res) {
    alert("Success! " + res.status);
  })
}