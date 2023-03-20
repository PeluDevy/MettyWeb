// Getting List of Styles as an Object
const style = (node, styles) =>
	Object.keys(styles).forEach((key) => (node.style[key] = styles[key]));

const navMenuOptions = document.querySelectorAll(".nav_menu-options");

navMenuOptions.forEach((option) => {
	option.addEventListener("click", (e) => {
		showMenuDetails(option);
	});
});

function showMenuDetails(event) {
	let navMenuOptionsDetails = event.lastElementChild;

	console.log(navMenuOptionsDetails);

	navMenuOptionsDetails.classList.toggle("hidden");
}

const navbar = document.querySelector(".nav_bar");

navbar.addEventListener("click", (e) => {
	let target = e.target.parentElement.parentElement.nextElementSibling;

	target.classList.toggle("flex");
});