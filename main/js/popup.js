window.addEventListener("load", function () {
	mediumZoom(document.querySelectorAll("#contents .photo_item img"), {
		margin: 24,
		background: "#fff",
		scrollOffset: 0,
	});

	mediumZoom(document.querySelectorAll("#contents .zoom-image"), {
		margin: 24,
		background: "#fff",
		scrollOffset: 0,
	});
});
