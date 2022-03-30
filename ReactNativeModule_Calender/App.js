import React from 'react';
import {NativeModules, Button, View} from 'react-native';

const {CalendarModule} = NativeModules;

const ModuleButton = () => {
  const onPress = () => {
    CalendarModule.createCalendarEvent('Srishti Maurya', 'Gurgaon');
    console.log('native module');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title="Invoke Native Module" color="#22577E" onPress={onPress} />
    </View>
  );
};

export default ModuleButton;
