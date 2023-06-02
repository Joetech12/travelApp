import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={item => String(item)}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        const selected = selectedCategory === item;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
              index === 0 ? {marginLeft: 32} : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);

const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',

    paddingVertical: 2,
  },
  selectedItem: {
    // textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#000000',
  },
  itemContainer: {
    marginRight: 17,
    marginVertical: 14,
  },
  selectedItemContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 1,
  },
});
