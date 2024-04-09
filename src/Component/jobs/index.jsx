import Header from '../Header';
import JobsFilterSection from '../JobsFilterSection';
import DisplayAllJobs from '../DisplayAllJobs';
import './index.css'


const Jobs = ()=>{


    return (

        <div className='Jobs-main-cont'>
            <Header/>

            <div className='filter-all-jobs-cont'>
                    <div className='filter-sec'>
                    <JobsFilterSection/>
                    </div>
                    <div className='Jobs-sec'>
                    <DisplayAllJobs/>
                    </div>

            </div>

        </div>


    )
}




export default Jobs;