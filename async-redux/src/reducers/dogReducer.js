import {
  FETCH_START, 
  FETCH_SUCCESS, 
  FETCH_FAILURE, 
} from '../actions/dogAction.js'

export const intialState = {
  url:'',
  isFetching: false,
  error: ""
  };

  export const dogReducer = (state=intialState, action) =>{
    switch (action.type){
      case FETCH_START:
        console.log('FETCH_START')
        return{...state, isFetching: true}
      case FETCH_SUCCESS:
        console.log('FETCH_SUCCESS')
        return{...state, isFetching:false, url:action.payload.url, error:""}
      case FETCH_FAILURE:
        console.log('FETCH_ERROR')
        return{...state, isFetching:false, error: action.payload}

      
    
        
        default:
            return state;
    }
  }