document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('reveal1').addEventListener('click', function() {
		document.getElementById('message1').classList.remove('hidden');
		this.style.display = 'none';
	});
	document.getElementById('reveal2').addEventListener('click', function() {
		document.getElementById('message2').classList.remove('hidden');
		this.style.display = 'none';
	});
});
