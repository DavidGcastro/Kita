import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import rootCamera from './screens/Camera';
import rootText from './screens/Text';

const RootNavigator = createStackNavigator(
  {
    rootCamera: { screen: rootCamera },
    rootText: { screen: rootText }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default class App extends React.Component {
  static navigationOptions = {
    header: { visible: false }
  };
  render() {
    return <RootNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
