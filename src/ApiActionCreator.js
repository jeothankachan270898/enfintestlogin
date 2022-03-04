import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';

const apiActionCreator = (url) => (dispatch) => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      fetch(url)
      .then((response)=>response.json())
      .then((response)=>
        dispatch(fetchSuccess(response.data))
       
      )
      .catch((error) => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default apiActionCreator;