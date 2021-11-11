import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, setTerm, onSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(value) => setTerm(value)}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    borderColor: 'black',
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
