
// generate random colors
let randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(i = 0; i < 6; i++){
        index = Math.floor(Math.random() * 16);
        color += hex[index];
    }
    document.querySelector('body').style.backgroundColor = color
}
let start;

// start changing color
document.querySelector('#start').addEventListener('click', function(){
    start = setInterval(randomColor, 1000);
});

// stop changing color
document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(start);
});