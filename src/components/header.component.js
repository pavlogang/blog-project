import {Component} from '../core/component'

export class HeaderComponent extends Component {
	constructor(id) {
		super(id)
	}
	
	init() {
		if (localStorage.getItem('visited')) {
			this.hide( )
		}
		this.$el.querySelector('.js-header-start').addEventListener('click', buttonHendler.bind(this))
	}
	
}

function buttonHendler() {
	localStorage.setItem('visited', JSON.stringify(true))
	this.hide()
}