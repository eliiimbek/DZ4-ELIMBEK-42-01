// task2
// const box = document.getElementById('box');
// const coordinatesDisplay = document.getElementById('coordinates');
//
//
// box.addEventListener('mousemove', (event) => {
//     const rect = box.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//
//     coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;
// });
//
// box.addEventListener('mouseleave', () => {
//     coordinatesDisplay.textContent = 'X: 0, Y: 0';
// });

// task3
let $red = document.querySelector(".redLight")
let $yellow = document.querySelector(".yellowLight")
let $green =document.querySelector(".greenLight")
let textPlace = document.querySelector(".textMark")
const turnOff=(arg1)=>{
    arg1.style.background = "gray"
    textPlace.innerHTML = ""
}
const onmousemove=(arg1)=>{
    if(arg1===$red){
        arg1.style.background = "red"
        textPlace.innerHTML = "stop".toUpperCase()
    }else if(arg1===$yellow){
        arg1.style.background = "yellow"
        textPlace.innerHTML = "wait".toUpperCase()
    }else if(arg1===$green){
        arg1.style.background = "green"
        textPlace.innerHTML= "go".toUpperCase()
    }
    arg1.addEventListener("mouseout" ,()=>{
        turnOff(arg1)
    })
}
$red.addEventListener("mouseover" , ()=>{
    onmousemove($red)
})
$yellow.addEventListener("mouseover" , ()=>{
    onmousemove($yellow)
})
$green.addEventListener("mouseover" , ()=>{
    onmousemove($green)
})
