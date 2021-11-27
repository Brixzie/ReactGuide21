import React, { useState, useEffect, math } from 'react'
//API
import API from '../../API'



//sets the initial state
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
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
            
            //Sets the state with this whole object
            //returns an object, which is why we have the parenthesis 
            setState(prev => ({
                //spreads the new movies const
                ...movies,
                //results property. Checks if it´s greater than 1, in that case appends old results to new.
                //If we dont get more we can wipe out the old movie and add the new movie (unsure about this logic)
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))

            /* 
                var o = {
                r: 'some value',
                t: 'some other value'
                };
                
                is functionally equivalent to

                var o = new Object();
                o.r = 'some value';
                o.t = 'some other value';
            */

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

    //returns an object
    return { state, loading, error};
}

