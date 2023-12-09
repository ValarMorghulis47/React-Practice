import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/databaseconfig";
import { useSelector } from 'react-redux';
function AllPosts() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)
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
    }, [userData]);
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

export default AllPosts