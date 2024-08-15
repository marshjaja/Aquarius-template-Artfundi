document.addEventListener("DOMContentLoaded", function () {
	var revealButton = document.getElementById("revealButton");
	if (revealButton) {
		revealButton.addEventListener("click", function () {
			var searchContent = document.getElementById("hiddenContent");
			if (
				searchContent.style.display === "none" ||
				searchContent.style.display === ""
			) {
				searchContent.style.display = "block";
			} else {
				searchContent.style.display = "none";
			}
		});
	}

	var revealButton1 = document.getElementById("revealButton1");
	if (revealButton1) {
		revealButton1.addEventListener("click", function () {
			var filterContent = document.getElementById("hiddenContent1");
			if (
				filterContent.style.display === "none" ||
				filterContent.style.display === ""
			) {
				filterContent.style.display = "block";
			} else {
				filterContent.style.display = "none";
			}
		});
	}
});
