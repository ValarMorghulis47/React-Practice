import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/databaseconfig";
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)
    const postData = useSelector((state) => state.post.postData)
    const userStatus = useSelector((state) => state.auth.status)
    console.log(postData);
    useEffect(() => {
       appwriteService.getPosts()
            .then((posts) => {
                setPosts(posts)

            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            })
    }, [userStatus]);

    if (userStatus === false) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login To Read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    else {
        if (posts.length === 0) {
            return (
                <div className="w-full py-8 mt-4 text-center">
                    <Container>
                        <div className="flex flex-wrap">
                            <div className="p-2 w-full">
                                <h1 className="text-2xl font-bold hover:text-gray-500">
                                    Add a post to see one
                                </h1>
                            </div>
                        </div>
                    </Container>
                </div>
            )
        }
        else {
            return (
                <div className='w-full py-8'>
                    <Container>
                        <div className='flex flex-wrap'>
                            {posts.map((post) => (
                                <div key={post.$id} className='p-2 w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            )
        }
    }
}

export default Home
