import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/databaseconfig";
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)
    const isLoggedIn= useSelector((state) => state.auth.isloggedin)
    console.log(userData);
    console.log(posts)
    console.log(isLoggedIn)
    // useEffect(() => {
    //     appwriteService.getPosts().then((posts) => {
    //         if (posts) {
    //             setPosts(posts.documents)
    //         }
    //     })
    // }, [])
    useEffect(() => {
        if (!userData) {
            // userData is not available or does not have $id property
            return;
        }
        appwriteService.getPosts(userData.$id)
            .then((posts) => {
                    setPosts(posts)
                
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            })
    }, [userData, isLoggedIn]);

    // if (posts.length === 0) {
    //     return (
    //         <div className="w-full py-8 mt-4 text-center">
    //             <Container>
    //                 <div className="flex flex-wrap">
    //                     <div className="p-2 w-full">
    //                         <h1 className="text-2xl font-bold hover:text-gray-500">
    //                             Add a post to see one
    //                         </h1>
    //                     </div>
    //                 </div>
    //             </Container>
    //         </div>
    //     )
    // }

    if (isLoggedIn===false) {
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
        if (posts.length === 0){
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
        )}
       else{ return (
            <div className='w-full py-8'>
                <Container>
                    {/* <div className='flex flex-wrap'>
                    {posts.map((post) => {
                        if (post.userid===userData.$id) {
                            return (<div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>)
                        }
                        else{
                            console.log(post.userid)
                            return null
                        }
                    })}
                </div> */}
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )}
    }
}

export default Home
