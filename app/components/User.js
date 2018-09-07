import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  button: {    
    padding: 10,
    backgroundColor: '#283593',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3, flex:0.2,
   
  }
});

export default class User extends Component {
  constructor(props) {
    super(props);
    console.log('constructor=========>', props);
  }
  
  state={
    email:''
  }

  render() {
    const { count, increment, decrement, incrementAsync, serachUser, apiMsg, payload } = this.props;
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flexDirection:'row', marginLeft:40, marginRight:40}}>
        <TextInput placeholder={"username for search"}
        onChangeText={(value) => this.setState({ email: value })}
        style={{flex:.6,backgroundColor:'#80cbc4', color:'white', padding:5}}>
        </TextInput>
        <TouchableOpacity onPress={() => serachUser({username: this.state.email})} style={styles.button}>
          <Text style={{color:'white'}}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
