const loadT = document.querySelector('.loading');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blur , 30);// milisecond to change the range from 0 to 100 in milisecond

function blur () {
    load++;

    if(load > 99) {

        clearInterval(int);
    }
    loadT.innerText = `${load}%`;// to show the number to the user
    loadT.style.opacity = `${scale(load , 0 , 100 , 1 , 0)}`; // to show the img and hide the number in the same time
    bg.style.filter = `blur(${scale(load , 0 , 100 , 30 , 0)})`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }