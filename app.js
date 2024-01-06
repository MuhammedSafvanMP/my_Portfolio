function sendmail(e) {
  e.preventDefault();
  var error = document.getElementById("error");

  if (
    document.getElementById("name").value.length > 0 &&
    document.getElementById("email").value.length > 0 &&
    document.getElementById("email").value.includes("@") &&
    document.getElementById("message").value.length > 0
  ) {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    const serviceId = "service_ak7ww1r";
    const templateId = "template_fqc5j0r";
    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("send success");
        // Hide the error message when conditions are met
        error.style.display = "none";
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    // Show the error message when any field is not filled
    console.log("Error displaying");
    error.style.display = "block";
    error.textContent = "Please fill in all fields.";
  }
}
