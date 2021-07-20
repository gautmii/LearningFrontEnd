const colors=["Gray","Red","Blue","Cyan"];

const btn= document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener('click',function(){
  //get random number between 0 and 3
  const randomNumber=getrandomnumber();
console.log(randomNumber);

  document.body.style.backgroundColor=colors[randomNumber];
  color.textContent= colors[randomNumber];
});
function getrandomnumber(){
  return Math.floor(Math.random()*colors.length);
}
