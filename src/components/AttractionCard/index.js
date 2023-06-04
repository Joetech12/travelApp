import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

const AttractionCard = ({imageSrc, title, subtitle, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      {/* <Image source={require('../')}/> */}
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AttractionCard);

const styles = StyleSheet.create({
  card: {
    // marginRight: 16,
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
    marginBottom: 12,
  },
  image: {
    width: (width - 96) / 2,
    height: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 12,
    marginLeft: 6,
    color: '#000000',
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.5)',
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  row: {
    marginBottom: 12,
    marginLeft: 6,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
