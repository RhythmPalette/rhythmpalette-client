import { useEffect, useState } from "react";
import dummyShorts from "../store/dummyShorts";

export const useShortView = (query, pageNumber) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [shorts, setShorts] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setShorts([]);
    }, [query]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        
        const loadMoreShorts = () => {
            const newShorts = dummyShorts
                .filter(short => short.hashtags.toLowerCase().includes(query.toLowerCase()))
                .slice(0, pageNumber * 10); 

            setShorts(prevFeeds => {

                return [...prevFeeds, ...newShorts];
            });
            setHasMore(newShorts.length > 0);
            setLoading(false);
        };


        const timer = setTimeout(loadMoreShorts, 0);

        return () => clearTimeout(timer); 
        
    }, [query, pageNumber]);

        return { loading, error, shorts, hasMore };
};
        