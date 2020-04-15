import React from 'react';
import { connect } from 'react-redux';

import { fetchDog } from '../actions/dogAction.js'


const RandomDog = props =>{

    const mediaCheck = ()=>{
        if (props.dog.url.slice(-3)!='mp4'){
            return props.dog.url.length ? 
            <img src={props.dog.url} alt='DOG PICTURE'/>:
            <p>Click button for random dog!</p>
        }
        return props.dog.url.length ? 
        <video controls>
        <source src={props.dog.url} type="video/mp4"></source>
        </video>:
        <p>Click button for random dog!</p>
    }
    return(
        <div className="dog-container">
            {mediaCheck()}
            {props.dog.error.length ? <p>{props.dog.error}</p> : <p></p>}
            <button onClick={()=>props.fetchDog()}>Random Dog</button>
        </div>
    )
}

//data from reducer
const mapStateToProps = state => {
    return {
      dog: state.dogReducer
    };
  };
  
  export default connect(
  mapStateToProps,
  {fetchDog}
  )(RandomDog)