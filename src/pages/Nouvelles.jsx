import React, {useEffect, useState} from "react";
import Heading from "../components/atoms/Heading/Heading";
import data from "../data/Nouvelles.json";
import PaginatedPostsGrid from "../components/organismes/PostsGrid/PaginatedPostsGrid";

const Nouvelles = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const dataPosts = setPosts(Object.values(data));
    }, [data]);


    useEffect(() => {
        document.title = "Nouvelles - CoPA Musique";
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Heading>Nouvelles</Heading>
            <p>Tenez vous informez des dernières nouvelles de CoPA Musique !</p>
            <PaginatedPostsGrid posts={posts}/>
        </main>
    );
};

export default Nouvelles;
