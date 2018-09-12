import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import Loader from '../utility/Loader'
import {actions} from '../actions/index';

const styles = StyleSheet.create({
  button: {    
    padding: 10,
    backgroundColor: '#283593',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft:5,
    marginRight:5
     
   
  }
});

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor=========>', props);
  }
  
  state={
    email:'',
    password:'',
  }

  attemptLogin(){

    if(this.validate(this.state.email)){
      if(this.state.password.length >0){
        this.props.LoginRequest({username: this.state.email, password: this.state.password});
  
        setTimeout(() => {
            this.setState({loading:false});
        }, 2000);
      }else{
        alert('password can not be empty')
      }
      
    }else{
      alert('invalid email');
    }

     
  }

  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
    console.log("Email is Not Correct");
    this.setState({email:text})
    return false;
      }
    else {
      // this.setState({email:text})
      console.log("Email is Correct");
      return true;
    }
    }

  render() {
    const {payload, isFetching } = this.props;
    return (
      
      <View style={{flexDirection:"column", width:200, height:200}}>
            <Loader
        loading={payload.isFetching} />
     
            <TextInput placeholder={"username"}
                    onChangeText={(value) => this.setState({ email: value })}
                    TextInput={"email"}
                    style={{backgroundColor:'#80cbc4', color:'white', padding:5, height:30, margin: 5}}>
                </TextInput>
       

            <TextInput placeholder={"password"}
                    onChangeText={(value) => this.setState({ password: value })}
                    secureTextEntry={true}
                    style={{backgroundColor:'#80cbc4', color:'white', padding:5, height:30, margin:5}}>
                </TextInput>
                
        <TouchableOpacity onPress={() => this.attemptLogin()}//LoginRequest({username: this.state.email, password: this.state.password})} 
            >
            <Text style={{    
                paddingLeft: 20,
                paddingRight:20,
                paddingBottom:10,
                paddingTop:10,
                backgroundColor: '#283593',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                marginLeft:5,
                marginRight:5,
                alignSelf:'center',
                color:'white',
            
            }}>Login</Text>
            
            <Text style={{color:'white', backgroundColor:'blue', marginTop:40, padding:10}}>{payload.apiMsg}</Text>

        </TouchableOpacity>       
      </View>
    );
  }
}
