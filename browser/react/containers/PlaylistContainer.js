import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist';
import Songs from '../components/Songs';
import axios from 'axios';

export default class PlaylistContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
			disable: false,
			tries: 0
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		let value = event.target.value;
		if (value.length <= 16) {
			if (value.length === 0) {
				this.setState({
					inputValue: '',
					disable: true,
					tries: this.state.tries + 1
				})
			} else {
				this.setState({
					inputValue: value,
					disable: false,
					tries: this.state.tries + 1
				})
			}
		}
		else if (value.length > 16) {
			this.setState({
				inputValue: value,
				disable: true,
				tries: this.state.tries + 1
			})
		}
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.addNewPlaylist(this.state.inputValue);
		this.setState({
			inputValue: '',
			disable: true
		})
	}

	componentDidMount() {
		this.setState({disable: true});
	}
	render() {
		return (
			<div>
				<NewPlaylist
					onChange={this.handleChange}
					value={this.state.inputValue}
					onSubmit={this.handleSubmit}
					disable={this.state.disable}
					tries={this.state.tries}
				/>
			</div>
		)
	}
}
