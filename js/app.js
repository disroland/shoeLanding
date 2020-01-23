'use strict'

// let mnubtn = document.querySelector('.nav-button');
// let mnu = document.querySelector('.nav-menu');

// mnubtn.addEventListener('click', showMnu);


// function showMnu(){
// 	mnu.classList.toggle('active');
// }

new WOW().init();   

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

	document.querySelector('.cont').addEventListener('mouseup', function(){
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

//modal
$('.card img').on('click', function(e)
{
  let $imgSrc = $(this).attr('src');
  let $modalImage = $('<img>');
  $modalImage.attr('src', $imgSrc).addClass('ba-modal__image');
  $('.ba-modal-content-wrapper').append($modalImage);
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

