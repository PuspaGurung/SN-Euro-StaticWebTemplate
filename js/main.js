import "./../scss/main.scss";

/*------------------------------------------------------------------
	BANNER: Image slider
-------------------------------------------------------------------*/
function slideControl1() {
	var slider = document.querySelector("#slider");
	slider.style.marginLeft = "-100%";

	function slideControl2() {
		var slider = document.querySelector("#slider");
		slider.style.marginLeft = "-200%";

		function slideControl0() {
			let slider = document.querySelector("#slider");
			slider.style.marginLeft = "0";

			setTimeout(slideControl1, 5000);
		}
		setTimeout(slideControl0, 5000);
	}
	setTimeout(slideControl2, 5000);
}
setTimeout(slideControl1, 5000);


/*------------------------------------------------------------------
	ABOUT US: Control toggle box
-------------------------------------------------------------------*/
function toggleAboutTxtBox() {
	let abtTextBox = document.querySelectorAll('.abt-box');
	for (let i = 0; i < abtTextBox.length; i++) {
		abtTextBox[i].addEventListener('click', () => {
			let expandAbtBox = document.querySelectorAll('.active-abt-box');
			if (expandAbtBox.length > 0) {
				expandAbtBox[0].className = expandAbtBox[0].className.replace(
					"active-abt-box",
					""
				);
			}
			abtTextBox[i].classList.add('active-abt-box');

		})
	}
}
toggleAboutTxtBox();


/*------------------------------------------------------------------
	ANIMATION ON SCROLL 
-------------------------------------------------------------------*/
// Browser support for to requestAnimationFrame method
let requestAnimationFrame = window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.emRequestAnimationFrame ||
	// for IE support
	function (callback) {
		window.setTimeout(callback, 1000 / 60)
	};
let showOnScroll = document.querySelectorAll('.visible-on-scroll');

function loopOnScroll() {
	// showOnScroll.forEach(e => {
	//   (isElementViewPort(e)) ? e.classList.add('visible'): e.classList.remove('visible');
	// })

	for (let i = 0; i < showOnScroll.length; i++) {
		(isElementViewPort(showOnScroll[i])) ? showOnScroll[i].classList.add('visible'): showOnScroll[i].classList.remove('visible');
	}
	requestAnimationFrame(loopOnScroll);
}
loopOnScroll();

function isElementViewPort(e) {
	//Get the size (height, and width (x)) of an element and its position relative to the viewport :Y
	let rec = e.getBoundingClientRect();
	return (
		(rec.top <= 0 && rec.bottom >= 0) ||
		(rec.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
			rec.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
		(rec.top >= 0 && rec.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	);
};


/*------------------------------------------------------------------
	PARALLALX EFFECTS
-------------------------------------------------------------------*/
let navBar = document.getElementById('nav-bar');
let header = document.getElementById('header');
let webServices = document.getElementById("web-service");

var screenWidth = window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth;

window.addEventListener("scroll", () => {
	let yOffset = window.pageYOffset;
	let xOffset = window.pageXOffset;

	//section:: header
	yOffset <= 300 ?
		(navBar.className = navBar.className.replace("scroll-fixed", "")) :
		yOffset >= 300 ?
		navBar.classList.add("scroll-fixed") :
		"";

	yOffset <= 300 ?
		(header.className = header.className.replace("header-display-non", "")) :
		yOffset >= 300 ?
		header.classList.add("header-display-non") :
		"";

	// section :: web-services
	//webServices.style.backgroundPositionY = `${yOffset * 0.2}px`;

});


/*------------------------------------------------------------------
	SMOOTH NAVIGATION
-------------------------------------------------------------------*/
let navLinks = document.querySelectorAll(".nav a");
for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", e => {
		// active navigation link
		let getActiveNavLink = document.querySelectorAll(".active-nav");
		getActiveNavLink.length > 0 ?
			(getActiveNavLink[0].className = getActiveNavLink[0].className.replace(
				"active-nav",
				""
			)) :
			"";
		navLinks[i].classList.add("active-nav");
		//Call smoothScroll function
		smoothScroll(e);
	});
}
let goToNextPage = document.querySelectorAll(".go-to");
for (let i = 0; i < goToNextPage.length; i++) {
	goToNextPage[i].addEventListener("click", e => {
		smoothScroll(e);
	});
}

function smoothScroll(e) {
	e.preventDefault();
	let currentId =
		e.currentTarget.getAttribute("href") == "#" ?
		"header" :
		e.currentTarget.getAttribute("href");

	//return distance of current element relative to the top of the offsetParent node
	let targetPosition = document.querySelector(currentId).offsetTop;

	// return the number of the pixels the document is currently scrolled along the vertical ais with a value of 0.0.
	let startPosition = window.pageYOffset;
	let distance = targetPosition - startPosition;
	let durationTime = 1000;
	let start = null;
	requestAnimationFrame(step);
	//console.log(requestAnimationFrame(step))

	function step(timestamp) {
		if (!start) start = timestamp;
		let progress = timestamp - start;
		//window.scrollTo(0, distance * (progress / durationTime) + startPosition);
		window.scrollTo(
			0,
			easeInOutCubic(progress, startPosition, distance, durationTime)
		);
		if (progress < durationTime) window.requestAnimationFrame(step);
	}
}

// easing function
/** cubic easing in/out - acceleration until halfway, then deceleration
Source::http: //gizma.com/easing/  ***/
function easeInOutCubic(t, b, c, d) {
	t /= d / 2;
	if (t < 1) return (c / 2) * t * t * t + b;
	t -= 2;
	return (c / 2) * (t * t * t + 2) + b;
};

/*------------------------------------------------------------------
	RESPONSIVE HEADER NAVIGATION
-------------------------------------------------------------------*/
let getNavigation = document.querySelector('.nav');
let getResponsiveNavTriggerBtn = document.getElementById('responsive-nav-trigger-btn');
getResponsiveNavTriggerBtn.addEventListener('click', () => {
	getResponsiveNavTriggerBtn.classList.toggle('active-trigger-btn');
	getNavigation.classList.toggle('show-nav');

	setTimeout(() => {
		let getNavLink = document.querySelectorAll('.show-nav a');
		for (let i = 0; i < getNavLink.length; i++) {
			getNavLink[i].addEventListener('click', () => {
				getNavigation.className = getNavigation.className.replace('show-nav', "");
				getResponsiveNavTriggerBtn.className = getResponsiveNavTriggerBtn.className.replace('active-trigger-btn', "");
			})
		}
	}, 1000);
});