import { useParams } from 'react-router-dom';
import './index.css'
import { useEffect } from 'react';



const DisplayJobsitemDetails = ()=> {
    const {id} = useParams();

    useEffect(()=>{
        

    },[])

    return (
        <h1>{id}</h1>
    )

}



export default DisplayJobsitemDetails;