class Dropdown {
	constructor(selector, options) {
		this.$el = document.querySelector(selector);
		this.items = options.items;
		// console.log(this.$el) debugger
		this.$el.querySelector('.dropdown_label').textContent = this.items[0].label;
		this.$el.addEventListener('click', event => {
			if (event.target.classList.contains('dropdown_label')) {
				if (this.$el.classList.contains('open')) {
					this.close()
				} else {
					this.open()
					}
			} else if (event.target.tagName.toLowerCase() === 'li') {
				this.select(event.target.dataset.id)
			}
		})
		const itemsHTML = this.items.map(elem => {
			return `<li data-id="${elem.id}">${elem.label}</li>`
		}).join('')
		this.$el.querySelector('.dropdown_items').insertAdjacentHTML('afterbegin', itemsHTML);
	}
	select(id) {
		const item = this.items.find(elem => elem.id === id)
		this.$el.querySelector('.dropdown_label').textContent = item.label;
		this.close();
	}
	open() {
		this.$el.classList.add('open');
	}
	close() {
		this.$el.classList.remove('open');
	}
}
const dropdown = new Dropdown('#dropdown', {
	items: [
		{label: 'Москва', id: 'msk'},
		{label: 'Питер', id: 'spb'},
		{label: 'Магас', id: 'mg'},
		{label: 'Прохладный', id: 'prhl'},
	]
});