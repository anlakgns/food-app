import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('pasta');
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });

      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  return [results, errorMessage, searchApi]
};

export default useResults