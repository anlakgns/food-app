import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ShopDetailScreen = ({ navigation, route }) => {
  const paramId = route.params.id;
  const [result, setResult] = useState(null);

  const getResult = async () => {
    const response = await yelp.get(`/${paramId}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(paramId);
  }, []);

  if (!result) {
    return null;
  }

  console.log(result);
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ShopDetailScreen;
