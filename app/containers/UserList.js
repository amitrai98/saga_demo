
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
    margin: 3,
    flex:0.2,
  }
});

export default class UserList extends Component {
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
      <View style={{ flexDirection:'column', }}>
      
      <Text>hello</Text>
      </View>
    );
  }
}
