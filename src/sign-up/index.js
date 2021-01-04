import React, { Component } from 'react'
import './signup.css'
import Form from './form'
export default class SignUp extends Component {
  render() {
    return (
    <div className="form_part container-fluid h-100">
        <div className="row h-100">
            <div className="col-md-5 d-md-flex d-none p-0">
                <div style={{overflow: 'hidden'}}>
                    <img style={{minWidth: '100%', minHeight: '100%', transform: 'translateX(-20%)'}} src="/images/pic.jpeg"/>
                </div>
            </div>
            <div className="col-12 col-md-7 d-flex flex-column h-100 p-0">
                <h3 className="my-3 px-2 justify-content-end d-flex"><h3 style={{color: '#e04a63'}}>W</h3>ATCHNEXT</h3>
                <div style={{width: "50%"}}className="align-self-center form_contents p-4">
                    <div className="text-center">
                    {/* <div className="row justify-content-center "> </div> */}
                        <h3 className="msg-info mb-4">Sign Up</h3>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
