


function randomColor(){
    let colors = ['#000000', '#1a1a1a', '#333333', '#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#e6e6e6', '#999966', '#666633', '#333300', '#666699', '#333366', '#000066', '#669999', '#336666', '#003333', '#339966', '#006633', '#003300', '#99ccff', '#66ccff', '#3399ff', '#0066ff', '#0033cc', '#000099', '#ccccff', '#9999ff', '#6666cc', '#333399', '#000066', '#ff6666', '#ff3333', '#ff0000', '#cc0000', '#990000', '#ff9999', '#ff6666', '#ff3333', '#ff0000', '#cc0000', '#990000', '#ffcc99', '#ff9966', '#ff6633', '#ff3300', '#cc3300', '#993300', '#ffcc66', '#ffcc33', '#ffcc00', '#cc9900', '#996633', '#ff9900', '#ff8000', '#ff6600', '#ff3300', '#cc2900', '#992200', '#ffcc00', '#ff9933', '#ff6600', '#ff3300', '#cc2900', '#992200', '#ffcc00', '#ff9933', '#ff6600', '#ff3300', '#cc2900', '#992200', '#ffcc00', '#ff9933', '#ff6600', '#ff3300', '#cc2900', '#992200', '#ffcc00', '#ff9933', '#ff6600', '#ff3300', '#cc2900', '#992200', '#ffcc00', '#ff9933', '#ff6600', '#ff3300', '#cc2900', '#992200', '#ffcc00', '#ff9933', '#ff6600', '#ff3300', '#cc2900', '#992200'];


    let randomNumber=Math.floor(Math.random()*100);
    // console.log(colors[randomNumber]);
    return colors[randomNumber];

}

function randomBackgroundColor(){
    let colors = ["#e0e0e0", "#d3d3d3", "#c0c0c0", "#b0c4de", "#add8e6", "#b0e0e6", "#afeeee", "#b0e57c", "#dcdcdc", "#f0e68c", "#f0e68c", "#e6e6fa", "#e0ffff", "#f5deb3", "#f5f5dc", "#f0e68c", "#d3d3d3", "#f5f5f5", "#e6e6fa", "#e0e0e0", "#dcdcdc", "#f0e68c", "#f0e68c", "#f5f5dc", "#f0e68c", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#e6e6fa", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#e6e6fa", "#dcdcdc", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#e6e6fa", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#e6e6fa", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#e6e6fa", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#e6e6fa", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#e6e6fa", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#e6e6fa", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#e6e6fa", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc", "#f0e68c", "#dcdcdc"];


    let randomNumber=Math.floor(Math.random()*100);
    // console.log(colors[randomNumber]);
    return colors[randomNumber];
}


function addOne(){
    let currentNumber=Number(document.querySelector(".number").innerText);
    // console.log(typeof currentNumber);
    document.querySelector(".number").innerText=currentNumber+1;
    document.querySelector(".number").style.color=randomColor();
    document.querySelector(".number").style.backgroundColor=randomBackgroundColor();

    
    document.querySelector(".main").style.backgroundColor=randomColor();

}


function subOne(){
    let currentNumber=Number(document.querySelector(".number").innerText);
    
    document.querySelector(".number").innerText=currentNumber-1;

    document.querySelector(".number").style.color=randomColor();

    document.querySelector(".number").style.backgroundColor=randomBackgroundColor();


    document.querySelector(".main").style.backgroundColor=randomColor();

}

function resetValue(){
    document.querySelector(".number").innerText=0;

    document.querySelector(".number").style.color=randomColor();

    document.querySelector(".number").style.backgroundColor=randomBackgroundColor();

    document.querySelector(".main").style.backgroundColor=randomColor();


}


document.querySelector(".number").style.backgroundColor=randomColor();

let btnPlus=document.querySelector(".plus");
let btnMinus=document.querySelector(".minus");
let btnReset=document.querySelector(".re");



// console.log(btnMinus,btnPlus,btnReset,currentNumber);


btnPlus.addEventListener("click",addOne);
btnMinus.addEventListener("click",subOne);
btnReset.addEventListener("click",resetValue);

