import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import JobsCard from '../jobsCard';
import './index.css'



const DisplayAllJobs =()=>{
    const [allvalues,setValues] = useState({
        allJobsList:[]
    });

    useEffect(()=>{

        const fetchAllJobsDetails = async()=>{
            const token = Cookies.get("jwtToken")

            const url = "https://apis.ccbp.in/jobs";
            const options = {
                method:"Get",
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }


            const response = await fetch(url,options);
            const fetchData = await response.json();
            console.log(fetchData);
            if(response.ok===true){
                setValues({...allvalues,allJobsList:fetchData.jobs});
            }

        }


        fetchAllJobsDetails();


    },[])


    return (

        <div className='all-jobs-cont'>
                <div className='w-75'>
                    <input type="search" placeholder='Search' className='form-control '/>
                </div>
                <ul>

                    {allvalues.allJobsList.map(each=>
                        <JobsCard jobsDetails={each} key={each.id}/>
                    )}

                </ul>

        </div>
    )
}




export default DisplayAllJobs;