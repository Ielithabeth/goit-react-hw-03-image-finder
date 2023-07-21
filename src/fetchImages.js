import axios from "axios";

export async function fetchImages(inputValue, page) {
    const searchParams = new URLSearchParams({
        key: '36121686-7b7c9062752ef9acbb500f225',
        q: inputValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 12,
        page,
      });

      const images = await axios.get(`https://pixabay.com/api/?${searchParams}`);
    
      return images.data;
}