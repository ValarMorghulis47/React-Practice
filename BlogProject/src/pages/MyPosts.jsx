import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/databaseconfig";
import { useSelector } from 'react-redux';
function AllPosts() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)
    const postData = useSelector((state) => state.post.postData)
    // useEffect(() => {
    //     appwriteService.getPosts().then((posts) => {
    //         if (posts) {
    //             setPosts(posts.documents)
    //         }
    //     })
    // }, [])
    // useEffect(() => {
    //     if (!postData) {
    //         // userData is not available or does not have $id property
    //         return;
    //     }
    //     // appwriteService.getPosts(userData.$id)
    //     //     .then((posts) => {
    //     //         setPosts(posts)

    //     //     })
    //     //     .catch((error) => {
    //     //         console.error("Error fetching posts:", error);
    //     //     })
    // }, [isLoggedIn]);

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
        if (postData.length === 0) {
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
                            {postData.map((post) => (
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

export default AllPosts