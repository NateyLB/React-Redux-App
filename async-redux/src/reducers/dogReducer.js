import {
  FETCH_DOG_START, 
  FETCH_DOG_SUCCESS, 
  FETCH_DOG_FAILURE, 
} from '../actions/dogAction.js'

export const intialState = {
  url:'',
  isFetching: false,
  error: ""
  };

  //handles dog actions, creates a dog pcitures when call is succesful
  export const dogReducer = (state=intialState, action) =>{
    switch (action.type){
      case FETCH_DOG_START:
        console.log('FETCH_DOG_START')
        return{...state, isFetching: true}
      case FETCH_DOG_SUCCESS:
        console.log('FETCH_DOG_SUCCESS')
        return{...state, isFetching:false, url:action.payload.url, error:""}
      case FETCH_DOG_FAILURE:
        console.log('FETCH_DOG_ERROR')
        return{...state, isFetching:false, error: action.payload}

      
    
        
        default:
            return state;
    }
  }