function getRandValue(min, max){ //generate random value
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}

function getRandColor(){//get andom ed-green-blue color
    var red = getRandValue(0, 255),
        green = getRandValue(0, 255),
        blue = getRandValue(0, 255),
        color = 'rgb(' + red + ',' + green +','+ blue +')';
    return color;
}

function generate() {
    var console = document.getElementById('console'),
        randomDiv = document.createElement('div'),
        style = randomDiv.style;
    style.width = getRandValue(20,100) + 'px';//setting the andom width and height of the div
    style.height = getRandValue(20,100) + 'px';

    style.backgroundColor = getRandColor();//setting the color
    style.color = getRandColor();
    randomDiv.innerHTML = '<strong>div</strong>';//A "strong" element with text "div" inside the "div"
    style.border = getRandValue(1,20) + 'px solid '+ getRandColor();//random border width
    style.borderRadius = getRandValue(0, 20) + 'px';//random border radius
    
    style.position = 'absolute';
    style.top = getRandValue(100,700)+'px'; //height of the sceen
    style.left = getRandValue(10,980)+'px'; //width of the screen 
    
    console.appendChild(randomDiv);//adding a child to the element with id='console'
}