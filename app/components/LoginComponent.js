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
    loading:false,
  }

  attemptLogin(){
      this.setState({loading:true})
      this.props.LoginRequest({username: this.state.email, password: this.state.password});

      setTimeout(() => {
          this.setState({loading:false});

      }, 2000);
  }

  render() {
    const { count, increment, decrement, incrementAsync, LoginRequest, apiMsg, payload } = this.props;
    return (
      
      <View style={{flexDirection:"column", width:200, height:200}}>
      
      <Loader
          loading={this.state.loading} />
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
            
            <Text style={{color:'red', backgroundColor:'blue', marginTop:40, padding:10}}>{apiMsg}</Text>

        </TouchableOpacity>       
      </View>
    );
  }
}
