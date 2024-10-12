import { useEffect } from 'react';
import useFetch from './hooks/useFetch'
import './App.css'

function App() {

  const { data, isLoading, hasError } = useFetch('https://api.giphy.com/v1/gifs/search?api_key=dLI1g5cko2712usaISanN3SjAI7KudjYUUBTu2&q=Hello&limit=25&offset=0&rating=g&lang=en');

  useEffect(() => {
    if (isLoading) {
      console.log('Loading...');
    }

    if (hasError) {
      console.error('Error:', hasError);
    }

    if (data) {
      console.log('Data:', JSON.stringify(data));
    }
  }, [data, isLoading, hasError]);

  return null;
};

export default App