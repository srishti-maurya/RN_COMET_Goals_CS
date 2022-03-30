import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Permission, PERMISSION_TYPE} from './src/AppPermission';
import MapView, {Polyline, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const locationPoint1 = {
  latitude: 28.4809,
  longitude: 77.0803,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const locationPoint2 = {
  latitude: 28.4813,
  longitude: 77.0931,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default class App extends Component {
  componentDidMount() {
    Permission.checkPermission(PERMISSION_TYPE.location);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={locationPoint1}>
          <MapViewDirections
            origin={locationPoint1}
            destination={locationPoint2}
            apikey={'myApi123$$'}
            strokeWidth={4}
            strokeColor="#111111"
          />
          <Polyline
            coordinates={[locationPoint1, locationPoint2]}
            strokeColor={'#000'}
            strokeWidth={3}
            lineDashPattern={[2]}
          />

          <Marker coordinate={locationPoint1} />
          <Marker pinColor="red" coordinate={locationPoint2} />
          <Marker
            pinColor="green"
            coordinate={{
              latitude: 28.6007,
              longitude: 77.0296,
            }}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
