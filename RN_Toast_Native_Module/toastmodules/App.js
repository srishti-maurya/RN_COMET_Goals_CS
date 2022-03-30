import React, {Component} from 'react';
import {View, Text, Button, NativeModules} from 'react-native';

var ToastExample = NativeModules.ToastExample;
class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: '#22577E'}}>
          Toast Native Module Demo
        </Text>
        <Button
          onPress={() => {
            ToastExample.show('Hello! I am a toast', ToastExample.SHORT);
          }}
          title="Click Me"
        />
      </View>
    );
  }
}

export default App;
