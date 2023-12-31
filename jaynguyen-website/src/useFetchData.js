import { useState, useEffect } from 'react';

//Fetch data from JSON API server and catch errors and output to user to acknowledge.

const useFetchData = (url) => {
    //Initialise states for blog
    const [data, setData] = useState(null);
    const [pendingState, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("Unable to fetch the data from the source...")
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((e => {
                    if (e.name === "AbortError") {
                        console.log("");
                    } else {
                        setError(e.message);
                        setIsPending(false);
                    }
                }))
        }, 350);

        return () => abortCont.abort();

    }, [url]);
    
    return { data, pendingState, error }
}

export default useFetchData;