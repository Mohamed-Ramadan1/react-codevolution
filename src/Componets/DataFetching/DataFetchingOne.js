import React,{useReducer,useEffect,useState} from 'react';
import axios from 'axios';

function DataFetchingOne() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(result => setData(result.data))
            .catch(error => {
            console.log(error)
        })
    }, [])
    

    return (
        <div>
            {
                data.map(img=> <img src={img.url} alt='Check the data again'/>)
            }
        
        </div>
    )
}

export default DataFetchingOne
