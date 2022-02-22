let slides = document.querySelectorAll('.slide');
console.log(slides)
slides.forEach(function (slide) {
	console.log(slide)
	slide.addEventListener('click', function () {
		slides.forEach(function (slide) {
			slide.classList.remove('active')
		});
		slide.classList.add('active')
	})
})





// const slides = document.querySelectorAll('.slide')

// for (const slide of slides) {
// 	slide.addEventListener('click', () => {

// 		clearActiveClasses()

// 		slide.classList.add('active')
// 	})
// }


// function clearActiveClasses() {
// 	slides.forEach((slide) => {
// 		slide.classList.remove('active')
// 	})
// }