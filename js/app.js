'use strict'

// let mnubtn = document.querySelector('.nav-button');
// let mnu = document.querySelector('.nav-menu');

// mnubtn.addEventListener('click', showMnu);


// function showMnu(){
// 	mnu.classList.toggle('active');
// }


//slider
$(document).ready(function(){
	let im =document.querySelectorAll('.wrap div');
	let buttons=document.querySelector('.slide-buttons');
	let p=document.querySelector('#previous');
		let i=1;
		sld();
		function sld(){
			for (let j=0; j<im.length;j++){
				$(im[j]).removeClass()};
			let k;
		$(im[i]).addClass('center');
		console.log(im.length);
		console.log(i);
				k=i-1;
		if (i>0){$(im[k]).addClass('left')} else {$(im[im.length-1]).addClass('left')};
				console.log(i);
				k=i+1;
		if (i<im.length-1){$(im[k]).addClass('right')} else {$(im[0]).addClass('right')}
		console.log(i);
		}
	
		function prev(){$('#previous').on('click', function(){
			if (i>0) {i=i-1;
			sld();} else {i=im.length-1; sld();}
		})}
		function nxt(){	$('#next').on('click', function(){
			if (i<im.length-1) {i=i+1;
			sld();} else {i=0; sld();}
		})}

		nxt();
		prev();

	document.querySelector('div').addEventListener('mouseup', function(){
		$('.left').on('click', function(){
			if (i>0) {i=i-1;
			sld();} else {i=im.length-1; sld();}
		});
		$('.right').on('click', function(){
			if (i<im.length-1) {i=i+1;
			sld();} else {i=0; sld();}
		});
	})

	//menu
	let mnubtn = document.querySelector('.nav-button');
let mnu = document.querySelector('.nav-menu');

mnubtn.addEventListener('click', showMnu);


function showMnu(){
	mnu.classList.toggle('active');
}
})