//sendMail
function SendMail() {
  var params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    asunto : document.getElementById("asunto").value,
    message : document.getElementById("message").value
  }
  emailjs.send("sservice_p1vam6w", "template_w1r9ur7", params).then(function (res) {
    alert("Success! " + res.status);
  })
  .catch
  (function (err) {
    alert("Error! " + err.text);
  });
}