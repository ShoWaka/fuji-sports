window.onload = function () {
	const updateButtonEl = document.getElementById("update_button");
	const tableAreaEl = document.getElementById("table_area");
	fetch("./main.php")
		.then((response) => {
			return response.text();
		})
		.then((text) => {
			tableAreaEl.innerHTML = text;
		});

	updateButtonEl.onclick = function () {
		fetch("./main.php")
			.then((response) => {
				return response.text();
			})
			.then((text) => {
				tableAreaEl.innerHTML = text;
			});
	};
};
