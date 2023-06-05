import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Map = ({navigation, route}) => {
  const {item} = route?.params || {};
  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    longitudeDelta: 0.009,
    latitudeDelta: 0.009,
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={coords}>
        <Marker coordinate={coords} title={item?.name} />
      </MapView>

      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.back}
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>{`${item?.name},`}</Text>
          <Text style={styles.title2}>{`${item?.city}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(Map);
