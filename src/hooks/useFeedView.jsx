import { useEffect, useState } from "react";
import dummyFeeds from "../store/dummyFeeds";

export const useFeedView = (query, pageNumber) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [feeds, setFeeds] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setFeeds([]);
    }, [query]);

    useEffect(() => {
        setLoading(true);
        setError(false);

        const loadMoreFeeds = () => {
            const newFeeds = dummyFeeds
                .filter(feed => feed.feedDescription.toLowerCase().includes(query.toLowerCase()))
                .slice(0, pageNumber * 10); 

            setFeeds(prevFeeds => {
                return [...prevFeeds, ...newFeeds];
            });
            setHasMore(newFeeds.length > 0);
            setLoading(false);
        };

        const timer = setTimeout(loadMoreFeeds, 0);

        return () => clearTimeout(timer); 
    }, [query, pageNumber]);

        return { loading, error, feeds, hasMore };
};
        
    