document.addEventListener('DOMContentLoaded', () => {
	const txt = document.getElementById('txt')
	const type = document.getElementById('type')
	const btn = document.getElementById('btn')

	// load form inputs from local storage if available
	if (localStorage.getItem('txt') !== null) {
		txt.value = localStorage.getItem('txt')
		type.value = localStorage.getItem('type')
	}

	// save to local storage

	btn.addEventListener('click', () => {
		localStorage.setItem('txt', txt.value)
		localStorage.setItem('type', type.value)
	})
})
