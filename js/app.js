'use strict'

let mnubtn = document.querySelector('.nav-button');
let mnu = document.querySelector('.nav-menu');

mnubtn.addEventListener('click', showMnu);


function showMnu(){
	mnu.classList.toggle('active');
}