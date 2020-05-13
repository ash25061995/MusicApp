import * as actionType from './actions/actionType';
import axios from 'axios'

export const fetchData = (artistName) => dispatch => {
    const SearchArtistURL = `https://api.genius.com/search?q=${artistName}&access_token=djn7tGv2PPOUfuPnJheHEGVhA-E_oWpNzTx6juAUitggsNd6dI89DmA7he1-KvlA`;
    return axios.get(SearchArtistURL)
        .then(res => {
            console.log(res)
            dispatch(fetchDataSuccess(res.data.response, res.data.response.hits.length))
        }
        ).catch(err => {
            dispatch(fetchDataFailed(err))
        })

}

export const fetchDataSuccess = (res, count) => {
    return {
        type: actionType.FECTH_DATA_SUCCESS,
        data: res,
        count: count
    }
}

export const fetchDataFailed = (err) => {
    return {
        type: actionType.FECTH_DATA_FAILED,
        error: err
    }
}

export const goBack = () => {
    return {
        type: actionType.GO_BACK
    }
}