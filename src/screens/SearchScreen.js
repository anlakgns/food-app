import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, errorMessage, searchApi] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title="Bit pricier"
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
