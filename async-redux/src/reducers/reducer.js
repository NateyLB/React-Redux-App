import {
  FETCH_START, 
  FETCH_SUCCESS, 
  FETCH_FAILURE, 
} from '../actions/action.js'

export const intialState = {
  };

  export const reducer = (state=intialState, action) =>{
    switch (action.type){
      case FETCH_START:
        return{...state}
      case FETCH_SUCCESS:
        return{...state}
      case FETCH_FAILURE:
        return{...state}

      
    
        
        default:
            return state;
    }
  }