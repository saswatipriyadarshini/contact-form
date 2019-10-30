import React, {Component, Fragment} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css';
import ZeroStage from '../../images/0.png';
import FirstStage from '../../images/1.png';
import SecondStage from '../../images/2.png';
import ThirdStage from '../../images/3.png';
import FourthStage from '../../images/4.png';
import LastStage from '../../images/5.png';


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
			},
			percentage: 0,
			modal: false
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
		}, () => {
			this.animationFun();
		})
	}

	animationFun = () => {
		let keys = Object.keys(this.state.contactDetails);

		let percentage = 0;
		for(let i = 0; i < keys.length; i++){
			let value = this.state.contactDetails[keys[i]];

			if(value){
				percentage += 20;
			}
		}
		this.setState({
			percentage: percentage
		})
	}

	getButtonState = () => {
		let activeButton = true;
		let { contactDetails } = this.state;
		if (contactDetails.name.length === 0 || contactDetails.email.length === 0 || contactDetails.password.length === 0
			|| contactDetails.address.length === 0 || contactDetails.phone.length === 0) {
			activeButton = false;
		}
		return activeButton;
	}

	showDetailsModal = (e) => {
		e.preventDefault();
		console.log('contact details', this.state.contactDetails);
		this.setState(prevState => ({
			modal: !prevState.modal,
		}));
	}

	render(){
		const {contactDetails, percentage, modal} = this.state;
		var animation_image;
		if(percentage === 0){
			animation_image = ZeroStage;
		} else if(percentage === 20){
			animation_image  = FirstStage;
		} else if(percentage === 40){
			animation_image = SecondStage;
		} else if(percentage === 60){
			animation_image = ThirdStage;
		} else if(percentage === 80){
			animation_image = FourthStage
		} else animation_image = LastStage
		return(
			<Fragment>
				<div className='form__container'>
					<div className='animation__container' style={{backgroundImage: "url(" + animation_image + ")"}}>
					</div>
					<div className='form-sub__container'>
						<h2 className='form-header'>Contact Form</h2>
						<form>
							<div className='floating-label'>
								<input type="text" name="name" onChange={this.onChangeHandler} value={contactDetails.name} id='name'/>
								<label>First name:</label>
							</div>

							<div className='floating-label'>
								<input type="email" name="email" onChange={this.onChangeHandler}  value={contactDetails.email} id='email'/>
								<label>Email:</label>
							</div>
							<div className='floating-label'>
								<input type="password" name="password" onChange={this.onChangeHandler}  value={contactDetails.password} id='password'/>
								<label>Password:</label>
							</div>
							<div className='floating-label'>
								<input type="number" name="phone" onChange={this.onChangeHandler}  value={contactDetails.phone} id='phone'/>
								<label>Phone:</label>
							</div>
							<div className='floating-label'>
								<input type="text" name="address" onChange={this.onChangeHandler}  value={contactDetails.address} id='address'/>
								<label>Address:</label>
							</div>
							<div className='form-submit-btn'>
								{
									this.getButtonState() ?
										<button className='active-btn' onClick={this.showDetailsModal}>Submit</button>
										: <button disabled={true}>Next &#10142;</button>
								}
							</div>
						</form>
					</div>
				</div>

			{/*	MODAL FOR SHOWING DETAILS*/}
				<Modal isOpen={modal} toggle={this.showDetailsModal} className=''>
					<ModalHeader toggle={this.showDetailsModal}>Contact Details</ModalHeader>
					<ModalBody>
						<p><b>Name:</b> {contactDetails.name} </p>
						<p><b>Email:</b> {contactDetails.email}</p>
						<p><b>Phone:</b> {contactDetails.phone}</p>
						<p><b>Address:</b> {contactDetails.address}</p>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.showDetailsModal}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</Fragment>
		)
	}
}
