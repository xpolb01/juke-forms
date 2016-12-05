import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist';
import Songs from '../components/Songs';

export default class PlaylistContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
			disable: true
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		let value = event.target.value;
		if (value.length <= 16) {
			this.setState({
				inputValue: value,
				disable: false
			})
		} 
		else if (value.length > 16) {
			this.setState({
				inputValue: value,
				disable: true
			})
		}
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log('this is InputValue: ', this.state.inputValue);
		this.setState({
			inputValue: '', 
			disable: true
		})
	}
	render() {
		return (
			<div>
				<NewPlaylist 
					onChange={this.handleChange} 
					value={this.state.inputValue} 
					onSubmit={this.handleSubmit}
					disable={this.state.disable}
				/>
			</div>
		)
	}
}