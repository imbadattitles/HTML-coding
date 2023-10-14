function Animation(entry){
	entry.forEach((change) => {
		if (change.isIntersecting) {
			change.target.classList.add('show-animation');
		}
	});
}

let options = {
  threshold: [0.4],
};

let observer = new IntersectionObserver(Animation, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}


$(window).on("load", function() {
  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});
