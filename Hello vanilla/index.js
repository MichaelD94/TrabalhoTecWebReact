var input = document.querySelector('.input');
var h1 = document.querySelector('#hello');
const hello = "Hello "

h1.innerHTML = hello

input.addEventListener("change", function(){

  h1.innerHTML = hello + input.value;

})
