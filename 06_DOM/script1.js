'use strict'
function innerDivs(){
	var inner=document.getElementsByTagName('div');
	var divCount=0;
		for (var i=0;i<inner.length;i++){
			if (inner[i].parentNode instanceof HTMLDivElement){ //checking if this element has a parent-div 
				console.log(inner[i]);
				divCount++;
				
			}
		}console.log('The quantity of div nodes that are directly inside other div elements is equal to '+ divCount)
}


function querySel(){
	var inner=document.querySelectorAll('div div');
	for (var i=0;i<inner.length;i++){
		console.log(inner[i]);
	}
	console.log('The quantity of inner divs is ' + inner.length);
}



	var val=document.querySelector('input');
	val.addEventListener('input',function(){
		console.log(val.value)//spent a lot of time to make it beautiful, but failed,will try later
	});
	
	function colorValue(){
	document.body.style.background = document.getElementById('colors').value;
	}

innerDivs();
querySel();
