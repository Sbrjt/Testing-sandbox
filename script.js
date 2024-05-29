;async () => {
	const response = await fetch('data.db')
	const buffer = await response.arrayBuffer()
	const db = new SQL.Database(new Uint8Array(buffer))
	db.prepare('select * from tb')
}

document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('btn')
	const box = document.getElementById('box')

	btn.addEventListener('click', () => {
		localStorage.setItem('txt', box.value)
		console.log('Logged:', localStorage.getItem('txt'))
	})

	if (localStorage.getItem('txt') !== null) {
		const x = localStorage.getItem('txt')
		console.log('Loaded:', x)
		box.value = x
	}
})
