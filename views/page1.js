import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text onPress={() => Actions.pageTwo({text: 'Hello Do7a!'})}>This is PageOne!</Text>
      </View>
    )
  }
}