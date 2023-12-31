import './gallery'
import './carousel'
import './eventPage'
import './agaric'
import './lore'
import './works'
import './artist'
const eventPage = document.querySelector('#event')
const artistPage = document.querySelector('#artist')
const splashPage = document.querySelector('#splash')
const testiPage = document.querySelector('#testi')
const galleryPage = document.querySelector('#gallery')
const navLinks = document.querySelectorAll('#menu a')
const navBar = document.querySelectorAll('a.glitch')

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

const hide = () => {
	splashPage.classList.add('hide')
	eventPage.classList.add('hide')
  lore.classList.add('hide')
  agaric.classList.add('hide')
  works.classList.add('hide')
	artistPage.classList.add('hide')
	testiPage.classList.add('hide')
	galleryPage.classList.add('hide')

	navBar.forEach(link => {
		link.classList.remove('active')
	})
}

navLinks.forEach((link)=>{
	link.addEventListener('click', () =>{
		document.querySelector('#close').click()
	})
})


const hashHandler = (hash) => {
   if (!hash) {
	return
   }
   hide()
   navBar.forEach(link => link.getAttribute('href') === hash ? link.classList.add('active'): false)
	if (hash === "#event"){
		eventPage.classList.remove('hide')
	} else if (hash === "#lore"){
		lore.classList.remove('hide')
	} else if (hash === "#agaric"){
		agaric.classList.remove('hide')
	} else if (hash === "#artist"){
		artistPage.classList.remove('hide')
	} else if (hash === "#works"){
		works.classList.remove('hide')
	} else if (hash === "#testi"){
		testiPage.classList.remove('hide')
	} else if (hash === "#gallery"){
		galleryPage.classList.remove('hide')
	} else {
    location.hash = ''
    location.reload()
  }
}

window.addEventListener('hashchange', (e) => hashHandler(e.target.location.hash))
hashHandler(window.location.hash)

var $menu = document.querySelector('.slice'),
    $item = document.querySelectorAll('.slice-item'),
    w = window.innerWidth, //window width
    h = window.innerHeight; //window height

window.addEventListener('mousemove', function(e) {
  var offsetX = 0.5 - e.pageX / w, //cursor position X
      offsetY = 0.5 - e.pageY / h, //cursor position Y
      dy = e.pageY - h / 2, //@h/2 = center of poster
      dx = e.pageX - w / 2, //@w/2 = center of poster
      theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
      angle = theta * 180 / Math.PI - 90, //convert rad in degrees
      offsetPoster = $menu.getAttribute('data-offset'),
      transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }

  //poster transform
  $menu.style.transform = transformPoster;

  //parallax for each layer
  $item.forEach((it) => {
    var $this = it,
        offsetLayer = $this.getAttribute('data-offset') || 0,
        transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

    $this.style.transform = transformLayer;
  });
});