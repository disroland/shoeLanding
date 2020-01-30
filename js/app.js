'use strict'

// let mnubtn = document.querySelector('.nav-button');
// let mnu = document.querySelector('.nav-menu');

// mnubtn.addEventListener('click', showMnu);


// function showMnu(){
// 	mnu.classList.toggle('active');
// }

new WOW({
live:true
}
).init();   

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

	// document.querySelector('.cont').addEventListener('mouseup', function(){
		$('.cont').on('click', '.left', function(){
			if (i>0) {i=i-1;
			sld();} else {i=im.length-1; sld();}
		});
		$('.cont').on('click', '.right', function(){
			if (i<im.length-1) {i=i+1;
			sld();} else {i=0; sld();}
		});
	// })

	//menu
	let mnubtn = document.querySelector('.nav-button');
let mnu = document.querySelector('.nav-menu');

mnubtn.addEventListener('click', showMnu);


function showMnu(){
	mnu.classList.toggle('active');
}
})

//modal
$('.card img').on('click', function(e)
{
  let $imgSrc = $(this).attr('src');
  let $modalImage = $('<img>');
  let modalTXT = document.createElement('div');
  let $modalText = $(this).closest('div')[0].nextElementSibling.innerHTML;
  console.log($modalText);
  modalTXT.innerHTML=$modalText;
  modalTXT.style.color = 'skyblue';
  modalTXT.style.fontSize = '20px';
  modalTXT.style.textTransform = 'uppercase';
  modalTXT.style.textShadow = 'black 1px 1px 2px';
  modalTXT.classList.add('modalTxt');
  modalTXT.classList.add('animated');
  modalTXT.classList.add('rotateInDownRight');
  $modalImage[0].classList.add('animated');
  $modalImage[0].classList.add('fadeInLeft');
  $modalImage.attr('src', $imgSrc).addClass('ba-modal__image');
  $('.ba-modal-content-wrapper').append($modalImage);
  $('.ba-modal-content-wrapper').append(modalTXT);
  openModal();
}
)

let openModal = function(){
  $('.ba-modal').addClass('ba-modal-open');
  $('body').addClass('ba-modal-is-open');
  $(document).on('keydown', function (e){
    if (e.keyCode == 27){
      closeModal();
    }
  })
}
let closeModal = function(){
  $('.ba-modal').removeClass('ba-modal-open');
  $('body').removeClass('ba-modal-is-open');
  $('.ba-modal-content-wrapper').empty();
}
$('.ba-modal-close').on('click', closeModal);
$('.ba-modal').on('click', function(e){
  let modalContent = $('.ba-modal-content');
  if (!modalContent.is(e.target) && modalContent.has(e.target).length==0){
    closeModal();
  }
})


//header img
// let headPicture = document.querySelector('.header-picture img');
// let headImg = document.querySelector('.wrap .center');
// let HeadAttr;

// $(window).on('mousemove', function(){
// 	HeadAttr = headImg.getAttribute('src');
// 	headPicture.setAttribute('src', HeadAttr);
// })

//header-animation

$('.header-picture img').on('click', function(){
	$(this).addClass('animate');
})

$('.header-picture img').on('mousemove', function(){
	$(this).removeClass('animate');
})


//form
$(document).ready(function(){
	let f1 = false;
	let f2 = false;
	let f3 = false;
	$('form').on('submit', function(e){
		e.preventDefault();
		firstArea();
		secondArea();
		textArea();
		if (f1 && f2 && f3){alert('Form was correct')};
	});

	function clearSpan(curField){
		console.log('curField' , curField);
		let $span = $(curField).next('span');
		console.log($span);
		for (let i=0; i<$span.length;i++) {$span.remove();}
	}

function firstArea(){
let txt1 = document.querySelector('.name input');
let txt2 = txt1.value.toLowerCase();
let y = $(txt1).parent()[0];
console.log (y);

if (txt2 == txt1.value && txt1.value != '') {console.log(txt1.value, txt2);
	clearSpan(y);
	f1 = true;
}
else { 
console.log('You entered wrong letters!!');
let sp1 = document.createElement('span');
sp1.innerText = 'You entered wrong letters!!';
sp1.style.color = 'red';
sp1.style.margin="0";
sp1.style.position="relative";
sp1.style.top="-20px";


clearSpan(y);
$(txt1).parent().after(sp1);
}
}
function secondArea(){
let mail1=document.querySelector('.email input');
let x = $(mail1).parent()[0];
console.log (x);
if (mail1.value.indexOf('@')>=0 && mail1.value != '') 
	{console.log('OK');
	clearSpan(x);
	f2 = true;
}
else { 
console.log('You entered wrong mail');
let sp2 = document.createElement('span');
sp2.innerText = 'You entered wrong mail!!';
sp2.style.color = 'red';
sp2.style.position="relative";
sp2.style.top="-20px";

clearSpan(x);
$(mail1).parent().after(sp2);
}
}

function textArea(){
	let txtArea=document.querySelector('.message textarea');
	let z = $(txtArea).parent()[0];
	if (txtArea.value.length > 20){
		console.log('its enough');
		clearSpan(z);
		f3 = true;
	} else 
	{ 
console.log('Its not enough');
let sp2 = document.createElement('span');
sp2.innerText = 'Its not enough';
sp2.style.color = 'red';
sp2.style.position="relative";
sp2.style.top="-20px";

clearSpan(z);
$(txtArea).parent().after(sp2);
}
}

 
})

// map module

let map;
let mapBlock = document.querySelector('.map');
let mCenter = {lat: 40.6917159, lng: -73.9158478,};

map = new google.maps.Map(mapBlock, {
	center:mCenter,
	zoom:12,
	disableDefaultUI:true
});

let marker = new google.maps.Marker({
	position:mCenter,
	map:map,
	icon:'img/nike.png'
});


//scroll

let lnk = $('.menu-item');
    $('.menu').on("click", 'a', function (event) {
        event.preventDefault();
        console.log(this);
        let id  = $(this).attr('href');
        console.log(id);
         let top = $(id).offset().top;
         console.log(top);
        $('html, body').animate({scrollTop: (top)}, 2000);
    });

    // nav menu

    window.addEventListener('scroll', function (){
    	let header = document.querySelector('.header-top nav');
    	let openMenu = document.querySelector('.nav-menu');
      console.log(header);
    	if (window.pageYOffset >= header.clientHeight) {
    		openMenu.classList.remove('active');
    		header.classList.add('header-fix')
    	} else {
    		header.classList.remove('header-fix')

    	}
    }
    )
