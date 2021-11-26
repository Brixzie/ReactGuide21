import React, { useState, useEffect, math } from 'react'

//API
import API from '../API'

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//components

//Hook

//Image
import NoImage from '../images/no_image.jpg'

const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false);

    //searchTerm default set to ""
    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            //keep track of when we're loading so we can use things like loader icons
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            //Print response of the api
            //console.log(movies);
            //console.log(math.Count(...movies));

            //returns an object
            //Understand this one
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };
    //Initial render
    //(dependency array (what's it dependend on to trigger))
    useEffect(() => {
        fetchMovies(1)
    }, [])

    //console.log(state);

    return <div>Home Page</div>
}

export default Home;
