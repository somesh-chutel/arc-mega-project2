import Header from '../Header';
import JobsFilterSection from '../JobsFilterSection';
import DisplayAllJobs from '../DisplayAllJobs';
import './index.css'


const Jobs = ()=>{


    return (

        <div className='Jobs-main-cont'>
            <Header/>

            <div className='filter-all-jobs-cont'>

                    <JobsFilterSection/>

                    <DisplayAllJobs/>

            </div>

        </div>


    )
}




export default Jobs;