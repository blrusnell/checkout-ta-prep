import React, { Component } from 'react';
import axios from 'axios';
import Form1 from './Form1.js';
import Form2 from './Form2.js';
import Form3 from './Form3.js';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            ccNumber: '',
            ccExpiration: '',
            cvv: '',
            ccZip: '',

            //conditional rendering
            isForm1: true,
            isForm2: false,
            isForm3: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleForm2 = this.handleForm2.bind(this);
        this.handleForm3 = this.handleForm3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleForm2() {
        this.setState({
            isForm1: false,
            isForm2: true
        });
    }

    handleForm3() {
        this.setState({
            isForm2: false,
            isForm3: true
        });
    }

    handleSubmit() {
        axios.post('/checkout', this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }


    render() {

            if (this.state.isForm1 === true) {
                return <Form1 change={this.handleChange} next={this.handleForm2}/>
            }
            if (this.state.isForm2 === true) {
                return <Form2 change={this.handleChange} next={this.handleForm3}/>

            }
            if (this.state.isForm3 === true) {
                return <Form3 change={this.handleChange} submit={this.handleSubmit}/>

            }
        
    }

}