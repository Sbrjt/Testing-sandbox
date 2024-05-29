;async () => {
	const response = await fetch('data.db')
	const buffer = await response.arrayBuffer()
	const db = new SQL.Database(new Uint8Array(buffer))
	db.prepare('select * from tb')
}

document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('btn')
	const box = document.getElementById('box')
	const msg = document.getElementById('msg')

	btn.addEventListener('click', () => {
		localStorage.setItem('txt', box.value)
	})

	if (localStorage.getItem('txt') !== null) {
		const x = localStorage.getItem('txt')
		msg.innerHTML = x
		box.value = x
	}
})
