let text;

function downloadFile(data, filename) {
	const blob = new Blob([data], { type: "text/plain" });

	const url = URL.createObjectURL(blob);

	const anchor = document.createElement("a");

	anchor.href = url;
	anchor.download = filename;

	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);

	URL.revokeObjectURL(url);
}
