import React, { Component } from 'react';
import {View} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/counter';
import ApiTester from '../components/apiTester';
import * as appActions from '../actions';
import UserProfile from '../components/UserProfile';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <Counter
          count={state.counter.count}
          {...actions}
        /> */}
        {/* <ApiTester
          apiMsg={state.apiTester.apiMsg}
          {...actions}
        /> */}

        <UserProfile
         payload={state.apiProflie.payload}
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


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
