import axios from "axios";

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchDog = () => dispatch =>{
   // console.log('FETCH_DOG')
    dispatch({type:FETCH_START});
    axios.get('https://random.dog/woof.json')
    .then(response =>{
        dispatch({type:FETCH_SUCCESS, payload: response.data});
    })
    .catch(err =>{
        dispatch({type:FETCH_FAILURE, payload: err})
    })
}