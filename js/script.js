const button = document.querySelector('button');
const body = document.querySelector('body');
const colors =['red','green','blue','orange', 'indigo','violet','black'];
function changeBackground() {
    const randomColor = Math.floor((Math.random()*colors.length));
    body.style.backgroundColor = colors[randomColor];
}
button.onclick = changeBackground;
 
 