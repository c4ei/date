import React, { Component } from 'react'
import { 
        MDBContainer, MDBRow, MDBCol, 
        MDBInput, MDBBtn
      } from 'mdbreact';

class Login extends Component {
  render() {
    return (
      <MDBContainer  className="center-block pt-5 mt-5">
      <MDBRow>
      <MDBCol md="3">
        </MDBCol>
        <MDBCol md="6" >
          <form>
            <p className="h3 text-center mb-4">Sign in</p>
            <div className="text-center">
              <small> Please Enter you login details below</small>
            </div>
            <hr className="mb-5 ml-5 mr-5"></hr>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
            <MDBBtn outline color="secondary">
                Send
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="3">
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
  }
}

export default Login;