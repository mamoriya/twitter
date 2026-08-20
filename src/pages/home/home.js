import React, { useEffect, useRef, useState } from 'react'
import { PostCard } from './components/PostCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config';

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const postRef = useRef(collection(db, "posts"));
    useEffect(() => {
        async function getPosts() {
            const data = await getDocs(postRef.current);
            setPosts(data.docs.map((doc) =>
            (
                { ...doc.data(), id: doc.id }
            )
            ));

        }
        getPosts();
    }, [])
    console.log(posts);

    return (
        <div>
            <div className='flex '>
                <button className='w-1/2 py-4 hover:bg-gray-900 text-gray-500 hover:text-white'>For you</button>
                <button className='w-1/2 py-4 hover:bg-gray-900 text-gray-500 hover:text-white'>Following</button>

            </div>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}
