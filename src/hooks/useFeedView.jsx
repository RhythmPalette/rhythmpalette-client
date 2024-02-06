import { useEffect, useState } from "react";
import axios from "axios";
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
                .filter(feed => feed.description.toLowerCase().includes(query.toLowerCase()))
                .slice(0, pageNumber * 10); // 예를 들어 페이지당 10개의 피드

            setFeeds(prevFeeds => {
                // 새로운 피드를 기존 피드에 추가합니다.
                return [...prevFeeds, ...newFeeds];
            });
            setHasMore(newFeeds.length > 0);
            setLoading(false);
        };

        // 데이터 로드 시간을 시뮬레이션하기 위한 지연
        const timer = setTimeout(loadMoreFeeds, 1000);

        return () => clearTimeout(timer); // 클린업 함수에서 타이머를 취소합니다.
    }, [query, pageNumber]);

        return { loading, error, feeds, hasMore };
};
        
        /*const controller = new AbortController();

        axios.get(
            'https://openlibrary.org/search.json?q=${query}&page=${pageNumber}',
            {
                signal: controller.signal,
            }
        )
        .then(res => {
            setFeeds(prevFeeds => {
                return [
                    ...new Set([...prevFeeds, ...res.data.docs.map((b) => b.title)]),
                ];
            });
            setHasMore(res.data.length > 0);
            setLoading(false);
        })
        .catch(error => {
            if (error.name === 'AbortError') {
                return;
            }
            setError(true);
        });
        return () => controller.abort();
    }, [query, pageNumber]); 
    return { loading, error, feeds, hasMore }; */