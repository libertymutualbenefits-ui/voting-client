import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import mount from './UserContainer';

class Login extends React.Component{

  constructor(props){
    super(props)
    this.login = this.login.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook (response) {
    console.log(response);
    this.login();
    // Login.login();
    // this.login();
    //anything else you want to do(save to localStorage)...
  }

  componentClicked (event) {
    console.log('Facebook is happening. Who knew');
  }

  render () {
    return (
      <div>
        <FacebookLogin
          appId="767320626755211"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,user_friends"
          onClick={this.componentClicked}
          callback={this.responseFacebook} />
      </div>
    );
  }

  login(event){
    // console.log('calling login from Login.jsx');
    this.props.login();
  }

}

export default mount(Login);
