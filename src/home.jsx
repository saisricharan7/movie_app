import React from "react";
import {useEffect,useState} from "react";
import "./home.css"
import aliceposter from './movie_posters/alice-darling-400x600.jpg';
import avatar from './movie_posters/avatar-2-poster-1-400x600.jpg';
import empireofloight from "./movie_posters/empire-of-light-poster-400x600.jpg";
import fall from "./movie_posters/fall-poster-400x600.jpg";
import goodnight from "./movie_posters/goodnight-mommy-poster-400x600.jpg";
import plane from "./movie_posters/plane-poster-400x600.jpg";
import renfield from "./movie_posters/renfield-poster-1-400x600.jpg";
import shazam from "./movie_posters/shazam-fury-of-the-gods-400x600.jpg";
import smile from "./movie_posters/smile-movie-poster-400x600.jpg";
import till from "./movie_posters/till-movie-poster-400x600.jpg";
import wakanda from "./movie_posters/wakanda-forever-poster-1-400x600.jpg";
import you from "./movie_posters/you-people-poster-400x600.jpg"

function Homepage(){
    const [search,setSearch]=useState('');
    const [favourites,setFavourite]=useState([]);
    let allmovies=[ {
        title:'alice darling',
        rating:9,
        poster:aliceposter
    },
    {
        title:"avatar 2",
        rating:9.2,
        poster:avatar
    },
    {
        title:"empire of light",
        rating:8.5,
        poster:empireofloight
    },
    {
        title:"fall",
        rating:8,
        poster:fall
    },
    {
        title:"good night",
        rating:7.5,
        poster:goodnight
    },
    {
        title:"plane",
        rating:7,
        poster:plane
    },
    {
        title:"renfield",
        rating:5,
        poster:renfield
    },
    {
        title:"shazam",
        rating:6.8,
        poster:shazam
    },
    {
        title:"smile",
        rating:8.5,
        poster:smile
    },
    {
        title:"till",
        rating:7,
        poster:till
    },
    {
        title:"wakanda forever",
        rating:8.1,
        poster:wakanda
    },
    {
        title:"you",
        rating:5.6,
        poster:you
    }];
    const [movies,setMovies] =useState(allmovies);
    const handleSearch=(e)=>{
        if(e===""){
            setMovies(allmovies)
        }
        else{
       setMovies( movies.filter((movie)=>{
            return(
                movie.title.toLocaleLowerCase().includes(e)
            )
        }))
    }
    }
    const removeFavorite=(key)=>{
        setFavourite(favourites.filter((movie)=>{
            return(
                movie.title!=key
            )
        }))
        console.log(favourites)
    }

    const addFavorite=(key)=>{

        const liked=movies.filter((movie)=>{
            return(
                movie.title.toLocaleLowerCase().includes(key)
            )
        })
        console.log(liked[0])
        setFavourite([...favourites,liked[0]])
    }
    useEffect(()=>{
       
    },[])

    return(
        <>
        <div className="header">
            <input type="text" className="search" placeholder="search" onChange={(e)=>{setSearch(e.target.value);handleSearch(e.target.value)}}></input>

        </div>
        <div >
        <div className="title"><h1>Movies</h1></div>
        <div className="all-movies">
               { movies.sort((a,b)=>{
                return b.rating - a.rating
                }).map((movie,i,{key=movie.title})=>{
                    if(i>9){
                        return
                    }
                    else{
               return(
            <div className="movies" key={key}>
               {/* <p>{movie.title}</p> */}
               <img className="poster" src={movie.poster} alt="poster"></img> 
               <div className="overlay" onClick={()=>{addFavorite(key)}}> Add to favourites</div>
               </div>
               )}}
               )}
         </div>      
        </div>
        <div className="favourites">
            <h1>Favourites</h1>
            <div className="all-favourites">
            {favourites.map((movie,{key=movie.title})=>{
               return(
            <div className="movies" key={key}>
               {/* <p>{movie.title}</p> */}
               <img className="poster" src={movie.poster} alt="poster"></img> 
               <div className="overlay" onClick={()=>{removeFavorite(key)}}> remove from favourites</div>
               </div>
               )}
               )}
            </div>

        </div>
        </>
    )
}

export default Homepage