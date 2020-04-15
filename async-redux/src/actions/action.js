import Axios from "axios";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const get = () => dispatch =>{
    dispatch({type:FETCH_START});
    Axios.get()
    .then(response =>{
        console.log(response)
        //dispatch({type:FETCH_SUCCESS, payload: response.data});
    })
    .catch(err =>{
        console.log(err)
        //dispatch({type:FETCH_FAILURE, payload: err})
    })
}