import React, { useEffect, useState } from 'react';
import axios  from 'axios';


const DataFeatching = () => {
    const [post, setPost] = useState({});
    const [id, seId] = useState(1)
    const [idFromButtonClick, setButtonCLick] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => { 
                setPost(res.data)
            } )

            .catch(error=>console.log(error))
    },[id])

    return (
        <div>
            <input type='text' value={id} onChange={(e) => seId(e.target.value)} />
        
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{ post.title}</li>)
                }
            </ul> */}
    
        </div>
    )
}

export default DataFeatching;