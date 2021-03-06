import React, { Component } from 'react';
import {View} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions';
import User from '../components/User';
import UserList from './UserList';

class SearchUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions} = this.props;
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop:60, flexDirection:'column'}}>
        {/* <Counter
          count={state.counter.count}
          {...actions}
        /> */}
        {/* <ApiTester
          apiMsg={state.apiTester.apiMsg}
          {...actions}
        /> */}

        <User
         payload={state.apiUser.payload}
         {...actions}
        />
        <View state={{marginTop:100}}>
          <UserList
            apiMsg={state.apiTester.apiMsg}
            {...actions}
          />
        </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
