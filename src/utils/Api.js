import axios from 'axios';

// access_token=djn7tGv2PPOUfuPnJheHEGVhA-E_oWpNzTx6juAUitggsNd6dI89DmA7he1-KvlA';

export function searchArtist(artistName){
    const SearchArtistURL=`https://api.genius.com/search?q=${artistName}&access_token=djn7tGv2PPOUfuPnJheHEGVhA-E_oWpNzTx6juAUitggsNd6dI89DmA7he1-KvlA`
    return axios.get(SearchArtistURL)
                    .then(res => {
     return Promise.resolve(res.data.response);
  })
 .catch((error) => {
     console.log('error ' + error);
  });
}
  