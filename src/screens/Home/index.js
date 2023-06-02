import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../../components/Title';
import Categories from '../../components/categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';

const ALL = 'All';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );
      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        style={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.empty}>No items found.</Text>}
        ListHeaderComponent={
          <>
            <View style={{marginHorizontal: 32, marginVertical: 32}}>
              <Title text="Where do" style={{fontWeight: 'normal'}} />
              <Title text="you want to go" />

              <Title text="Explore attractions" style={styles.subtitle} />
            </View>
            <Categories
              onCategoryPress={setSelectedCategory}
              selectedCategory={selectedCategory}
              categories={[ALL, ...categories]}
            />
          </>
        }
        keyExtractor={item => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            key={item.id}
            style={
              index % 2 === 0
                ? {marginRight: 12, marginLeft: 32}
                : {marginRight: 32}
            }
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images?.length ? item.images[0] : null}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
  },
});
