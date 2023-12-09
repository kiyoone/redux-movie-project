// import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
// import MovieApi from "../../common/Api/MovieApi";
// import { APIKey } from "../../common/Api/MovieApiKey";


// export const fetchAsyncMovies = createAsyncThunk(
//     'movies/fetchAsyncMovies', async () =>{
//         const movieText='Harry';
//         const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
//         return response.data;
//     }
// )
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/Api/MovieApi";
 import { APIKey } from "../../common/Api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    
    const response = await MovieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
      
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=series`
      );
      return response.data;
    }
  );
  export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&i=${id}&plot=full`
      );
      return response.data;
    }
  );



const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow : {},
    
  };
const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        
        removeSelectedMovieOrShow : (state) =>{
            state.selectMovieOrShow = {};
        }
    },
    extraReducers : (builder) =>{
        builder
        .addCase(fetchAsyncMovies.pending,() =>{
            console.log('Data is pending')
        })
        .addCase(fetchAsyncMovies.fulfilled, (state,action) =>{
            console.log('data fetched successfully');
            return {...state, movies : action.payload}
        })
        .addCase(fetchAsyncMovies.rejected,() =>{
            console.log('data rejected')
        })
        .addCase(fetchAsyncShows.pending,() =>{
            console.log('Data is pending')
        })
        .addCase(fetchAsyncShows.fulfilled, (state,action) =>{
            console.log('data fetched successfully');
            return {...state, shows : action.payload}
        })
        .addCase(fetchAsyncShows.rejected,() =>{
            console.log('data rejected')
        })
        .addCase(fetchAsyncMovieOrShowDetail.fulfilled,(state,action) =>{
            return{...state, selectMovieOrShow : action.payload}
        })

    }
    // extraReducers:{
    //     [fetchAsyncMovies.pending] : () => {
    //         console.log("Data Pending")
    //     },
        
    //     [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
    //         console.log("Fetched Successfully!");
    //         return { ...state, movies: payload };
    //       },
    //     [fetchAsyncMovies.rejected]: () => {
    //         console.log("Rejected!");
    //       },

            
        

    // },
});
export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
