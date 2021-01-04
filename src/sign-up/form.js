import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-row">
                        <div class="col form-group">
                            <input type="text" class="form-control" placeholder="Name"/>
                        </div>
                        <div class="col form-group">
                            <input type="text" class="form-control" placeholder="User Name"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <input type="date" class="form-control" placeholder="Date of birth"/>
                    </div> 
                    <div class="form-group">
                        <input type="number" class="form-control"placeholder="Phone"/>
                    </div>  
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password"/>
                    </div>  
                    <div className="form-check mb-3 text-left">
                        <input className="form-check-input" type="checkbox"/>
                        <label class="form-check-label">Accept <span style={{color: "blue"}}>Terms of Service, Privacy Policy</span></label>
                    </div>                                      
                    <div class="form-group">
                        <button style={{borderRadius: "20px", backgroundColor: "#e04a63"}} type="submit" class="btn btn-primary btn-block"> SIGN UP  </button>
                    </div>   
                    <small class="text-muted">Already a member?</small><span style={{color: '#e04a63'}}> Sign In</span>                                          
                </form>
            </div>
        )
    }
}
