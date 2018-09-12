import React, { Component } from 'react';
import {View} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/counter';
import ApiTester from '../components/apiTester';
import * as appActions from '../actions';
import LoginComponent from '../components/LoginComponent';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions} = this.props;
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop:200}}>
      <LoginComponent
         payload={state.apiLogin}
         {...actions}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions.actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
