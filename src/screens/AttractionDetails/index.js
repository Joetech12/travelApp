import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../../components/Title';
import styles from './styles';
import InfoCard from '../../components/InfoCard';

const {height} = Dimensions.get('window');

const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  const openingHours = `OPEN
${item?.opening_time} - ${item?.closing_time}`;

  const onBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{borderRadius: 20}}
        style={styles.mainImage}
        source={{uri: mainImage}}>
        <View style={styles.header}>
          <Pressable hitSlop={8} onPress={onBack}>
            <Image
              style={styles.icon}
              source={require('../../assets/back.png')}
            />
          </Pressable>
          <Pressable hitSlop={8}>
            <Image
              style={styles.icon}
              source={require('../../assets/share.png')}
            />
          </Pressable>
        </View>

        <Pressable onPress={onGalleryNavigate} style={styles.footer}>
          {slicedImages?.map((image, index) => (
            <View key={image}>
              <Image
                key={image}
                source={{uri: image}}
                style={styles.miniImage}
              />
              {diffImages > 0 && index === slicedImages?.length - 1 ? (
                <View style={styles.moreImagesContainer}>
                  <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                </View>
              ) : null}
            </View>
          ))}
        </Pressable>
      </ImageBackground>
      <View style={styles.headerContainer}>
        <View>
          <Title style={styles.title} text={item?.name} />
          <Text style={styles.city}>{item?.city}</Text>
        </View>
        <Title style={styles.title} text={item?.entry_price} />
      </View>

      <InfoCard
        text={item?.address}
        icon={require('../../assets/location_circle.png')}
      />
      <InfoCard
        text={openingHours}
        icon={require('../../assets/schedule.png')}
      />
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
