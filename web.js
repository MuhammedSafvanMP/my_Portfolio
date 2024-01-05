const text = document.getElementById("content");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Freelancer"
  }, 0);
  setTimeout(() => {
    text.textContent = "Full Stack Developer"
  }, 4000);
  setTimeout(() => {
    text.textContent = "MERN Stack Developer"
  }, 8000);
  setTimeout(() => {
    text.textContent = "UI/UX Designer"
  }, 12000);
}

textLoad();
setInterval(textLoad, 14000)



