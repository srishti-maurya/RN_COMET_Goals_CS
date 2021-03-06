import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Animated, { Easing } from 'react-native-reanimated';

const {
  set,
  cond,
  multiply,
  startClock,
  stopClock,
  clockRunning,
  timing,
  debug,
  spring,
  Value,
  Clock,  
} = Animated;

function runSpring(clock, value, dest) {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };

  const config = {
    toValue: new Value(0),
    damping: 7,
    mass: 1,
    stiffness: 121.6,
    overshootClamping: false,
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
  };

  return [
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.velocity, -2500),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    spring(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position,
  ];
}

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 5000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return [
    cond(clockRunning(clock), 0, [
      // If the clock isn't running we reset all the animation params and start the clock
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    // we run the step here that is going to update position
    timing(clock, state, config),
    // if the animation is over we stop the clock
    cond(state.finished,  stopClock(clock)),
    // we made the block return the updated position
    state.position,
  ];
}

export default class Example extends Component {
  constructor(props) {
    super(props);

    const transX = new Value(0);
    const clock = new Clock();
    this.transX = new Value(0);
    const clock2 = new Clock();
    this.transX2 = new Value(0);
    const twenty = new Value(20);
    const thirty = new Value(30);
    this._transX = cond(new Value(0), twenty, multiply(3, thirty));
    this.transXAnimated = set(
      this.transX,
      runTiming(clock, -120, 120)
    );


  this.transXAnimated2 = set(
      this.transX2,
      runSpring(clock2, this.transX, 0, 300),
    );
  }

  componentDidMount() {
    console.log('here')
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, { transform: [{ translateX: this.transXAnimated }] }]}
        />
       <Animated.View
          style={[styles.box, { transform: [{ translateX: this.transXAnimated2 }] }]}
        />
      </View>
    );  
  }
}

const BOX_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderColor: '#F5FCFF',
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: BOX_SIZE / 2,
  },
});