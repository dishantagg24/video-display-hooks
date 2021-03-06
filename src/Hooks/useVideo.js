import {useState,useEffect} from 'react';
import Youtube from '../Api/Youtube';

export const useVideo = (defaultTerm) => {
    const [videos,setVideos] = useState([]);
  
    useEffect(()=>{  
        search(defaultTerm);
    },[defaultTerm])

    const search = async (term) => {
    const response = await Youtube.get('/search',{
        params: {
        q: term
        }
    });

  setVideos(response.data.items);
};
    return [videos,search]
}