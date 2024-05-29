;(async () => {
	const btn1 = document.getElementById('btn-1')

	btn1.addEventListener('click', () => {
		const txt = document.getElementById('txt').value
		const type = document.getElementById('type').value

		localStorage.setItem('txt', txt)
		localStorage.setItem('type', type)
	})
})()

document.addEventListener('DOMContentLoaded', () => {
	// load form inputs from local storage
	;(function load_local() {
		if (localStorage.getItem('txt') !== null) {
			document.getElementById('txt').value = localStorage.getItem('txt')
			document.getElementById('type').value = localStorage.getItem('type')
		}
	})()
})
