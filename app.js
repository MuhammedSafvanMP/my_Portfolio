function sendmail() {
    if(document.getElementById('name').value.length>0&&document.getElementById('email').value.length>0&&document.getElementById('message').value.length>0){
  
    var params={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value
  
    }
    const serviceId="service_ak7ww1r"
  const templateId="template_fqc5j0r"
  emailjs.send(serviceId,templateId,params)
  .then(
    res => {
        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('message').value="";
        console.log(res);
        alert('send success');
    })
  .catch(err=>{console.log(err);})
  }else{
    alert("please fill the form")
  }
  }



