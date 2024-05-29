;(async () => {
	const response = await fetch('data.db')
	const buffer = await response.arrayBuffer()
	const db = new SQL.Database(new Uint8Array(buffer))
	db.prepare('select * from tb')

	btn.addEventListener('click', () => {
		t = Array.from(document.getElementsByName('type'))
			.filter((i) => i.checked)
			.map((i) => `'${i.value}'`)
			.join(', ')

		localStorage.setItem('rank', rank.value)
		localStorage.setItem('category', category.value)
		localStorage.setItem('state', state.value)
		localStorage.setItem('type', t)
	})
})()

document.addEventListener('DOMContentLoaded', () => {
	// load form inputs from local storage
	;(function load_local() {
		if (localStorage.getItem('rank') !== null) {
			document.getElementById('rank').value = localStorage.getItem('rank')
			document.getElementById('category').value = localStorage.getItem('category')
			document.getElementById('state').value = localStorage.getItem('state')
			const type = localStorage.getItem('type').slice(1, -1).split("', '")
			for (let i of Array.from(document.getElementsByName('type'))) {
				if (type.includes(i.id)) {
					i.checked = true
				} else {
					i.checked = false
				}
			}
		}
	})()
})
