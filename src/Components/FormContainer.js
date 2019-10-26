import React, {Component, Fragment} from 'react';
import './style.css';
import PhoneImg from './5.jpg';

export default class FormContainer extends Component{
	constructor(props){
		super(props);
		this.state = {
			contactDetails: {
				name: '',
				email: '',
				password: '',
				phone: '',
				address: '',
			},
			errors: {
				name: '',
				email: '',
				password: '',
				phone: '',
				address: '',
			}
		}
	}

	onChangeHandler = (e) => {
		if (e.target.value === " ") {
			console.log('...........')
		}
		let details = this.state.contactDetails;
		details[e.target.id] = e.target.value;
		this.setState({
			contactDetails: details
		})
	}

	submitHandler = (e) => {
		e.preventDefault();
		let { contactDetails } = this.state;
		console.log('contact details .....', contactDetails);
	}

	render(){
		const {name, email, password, phone, address} = this.state;
		return(
			<Fragment>
				<div className='form__container'>
					<div className='form-sub__container'>
						<form>
							<div className='floating-label'>
								<input type="text" name="name" onChange={this.onChangeHandler} value={name} id='name'/>
								<label>First name:</label>
							</div>

							<div className='floating-label'>
								<input type="email" name="email" onChange={this.onChangeHandler}  value={email} id='email'/>
								<label>Email:</label>
							</div>
							<div className='floating-label'>
								<input type="password" name="password" onChange={this.onChangeHandler}  value={password} id='password'/>
								<label>Password:</label>
							</div>
							<div className='floating-label'>
								<input type="number" name="phone" onChange={this.onChangeHandler}  value={phone} id='phone'/>
								<label>Phone:</label>
							</div>
							<div className='floating-label'>
								<input type="text" name="address" onChange={this.onChangeHandler}  value={address} id='address'/>
								<label>Address:</label>
							</div>
							<div className='form-submit-btn'>
								<button onClick={this.submitHandler}>Next &#10142;</button>
							</div>
						</form>
					</div>
				</div>
			</Fragment>
		)
	}
}
