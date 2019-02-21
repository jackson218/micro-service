import React, { Component } from 'react';

class ApiCaller extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emails:[]
        }
    }

    componentWillMount() {
        fetch('https://python-api1991.herokuapp.com/return_emails', {
            method: 'GET',
            headers: {
                "accept": "application/json",
                'Content-Type': 'application/json'
            }
        })
        .then(response => { return response.json();})
        .then(responseData => {console.log(responseData); return responseData;})
        .then(data => {this.setState({emails: data});})

        .catch(err => {
            console.log('fetch error' + err)
        })
    }
  render() {
    return (
      <div>
          {this.state.emails.map((email, index) => (
            <p key={index}>Email: {email} </p>
          ))}
      </div>
    );
  }
}

export default ApiCaller;