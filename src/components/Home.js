/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useReducer } from 'react';
import { reducer, initialState } from '../reducer/reducer';
import Grid from './Grid';

const beerListReducer = () => {
  const api = 'https://api.punkapi.com/v2/beers';

  const [beerData, dispatch] = useReducer(reducer, initialState);
  const { loading, data } = beerData;

  useEffect(() => {
    const getBeer = async () => {
      dispatch({ type: "loading", payload: true });
      const response = await fetch(api);
      if (response.status < 300 && response.status >= 200) {
        const jsonResponse = await response.json();
        dispatch({ type: "success", payload: jsonResponse });
      } else {
        dispatch({ type: "error", payload: true });
      }
    };
    getBeer();
  }, []);

  return (
    <div className='container-bg'>
      {loading ? <div>'Loading...'</div> : <Grid data={data} dispatch={dispatch} />}
    </div>
  )
}

export default beerListReducer;
