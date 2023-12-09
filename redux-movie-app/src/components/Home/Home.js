import React from 'react';
import { useEffect } from 'react';
// import movieApi from '../../common/Api/MovieApi';
// import {APIKey} from '../../common/Api/MovieApiKey';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
    

const Home= () =>{
    // const movieText='Harry';
    // const dispatch = useDispatch();
    // useEffect( () =>{
    //     const fetchMovies= async () =>{
    //         const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //         .catch((err) => {
    //             console.log('Error' ,err)
               
    //         });
    //         dispatch(addMovies(response.data))
    //     };
    //     fetchMovies();
    // },[]);
   const dispatch = useDispatch();
   const movieText = "Harry";
   const seriesText = "Friends";
   useEffect(() =>{
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText))
   },[dispatch])
    


    return(
        <>
        <div className='banner-img'></div>
        <MovieListing />
        </>
    )


};
export default Home;