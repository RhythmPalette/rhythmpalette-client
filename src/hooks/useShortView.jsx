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
                .filter(short => short.description.toLowerCase().includes(query.toLowerCase()))
                .slice(0, pageNumber * 10); // 예를 들어 페이지당 10개의 피드

            setShorts(prevFeeds => {
                // 새로운 피드를 기존 피드에 추가합니다.
                return [...prevFeeds, ...newShorts];
            });
            setHasMore(newShorts.length > 0);
            setLoading(false);
        };

        // 데이터 로드 시간을 시뮬레이션하기 위한 지연
        const timer = setTimeout(loadMoreShorts, 1000);

        return () => clearTimeout(timer); // 클린업 함수에서 타이머를 취소합니다.
    }, [query, pageNumber]);

        return { loading, error, shorts, hasMore };
};
        