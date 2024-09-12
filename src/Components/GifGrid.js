import {useState, useEffect} from 'react';
import './Gifstyles.css';
const GifItem = ({ title, url }) => (
    <div className="gif-item">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );

const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=urJrq9Q1dD2jo8OKXRgWVVDAbNqqgWk5&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips

    `;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.original.url
    }));
    return gifs;
  }
  
  export default getGifs;
      
  export const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([]);

    const fetchGifs = async () => {
        const gifs = await getGifs(category);
        console.log(gifs); 
        setGifs(gifs);
      };    

    useEffect(() => {
        fetchGifs();
        console.log(category);
      }, [category]);

      return (
        <>
          <h3>{category}</h3>
          <div className="gif-grid">
            {gifs.map(gif => (
              <GifItem key={gif.id} {...gif} />
            ))}
          </div>
        </>
      );
  }
