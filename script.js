;(async () => {
	const btn1 = document.getElementById('btn-1')

	let rank = 0,
		category,
		branch,
		state,
		gender,
		type,
		result,
		rowCount,
		row

	// fetch data and insert the first 10 records into table on clicking btn
	btn1.addEventListener('click', () => {
		rank = document.getElementById('rank').value
		// validating rank input with regex (only digits allowed)
		if (!/^\d+$/.test(rank)) {
			result = []
			return
		}

		category = document.getElementById('category').value

		// Getting selected values from 'branch' and join them (with commas and quotes) to prepare SQL query
		branch = Array.from(document.getElementById('branch').selectedOptions)
			.map((i) => `'${i.value}'`)
			.join(', ')

		state = document.getElementById('state').value

		gender = Array.from(document.getElementsByName('gender'))
			.filter((i) => i.checked)
			.map((i) => `'${i.value}'`)
			.join(', ')

		// get elements with name 'type', convert to array, filter to get only the checked ones,
		// map them to an array of their values wrapped in single quotes,
		// join the array into a comma-separated string to prepare SQL query
		type = Array.from(document.getElementsByName('type'))
			.filter((i) => i.checked)
			.map((i) => `'${i.value}'`)
			.join(', ')
	})

	// save values to local storage
	window.addEventListener('beforeunload', () => {
		if (rank) {
			localStorage.setItem('rank', rank)
			localStorage.setItem('category', category)
			// localStorage.setItem('branch', branch)
			localStorage.setItem('state', state)
			localStorage.setItem('gender', gender)
			localStorage.setItem('type', type)
		}
	})
})()

document.addEventListener('DOMContentLoaded', () => {
	// load form inputs from local storage
	;(function load_local() {
		if (localStorage.getItem('rank') !== null) {
			document.getElementById('rank').value = localStorage.getItem('rank')
			document.getElementById('category').value = localStorage.getItem('category')
			document.getElementById('state').value = localStorage.getItem('state')

			const g = localStorage.getItem('gender').slice(1, -1).split("', '")

			for (let i of Array.from(document.getElementsByName('gender'))) {
				i.checked = g.includes(i.id)
			}

			document.getElementById('neu-radio').checked = document.getElementById('Neutral').checked
			document.getElementById('fem-radio').checked = document.getElementById('Female').checked

			const type = localStorage.getItem('type').slice(1, -1).split("', '")
			for (let i of Array.from(document.getElementsByName('type'))) {
				i.checked = type.includes(i.id)
			}

			// const branches = localStorage.getItem('branch').slice(1, -1).split("', '")

			// const selectElement = document.getElementById('branch')

			// for (let option of selectElement.options) {
			// 	option.selected = branches.includes(option.value)
			// }
		}
	})()
})
