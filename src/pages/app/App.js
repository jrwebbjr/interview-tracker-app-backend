import '../../../src/App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../authPage/AuthPage';
import DefaultLayout from '../layout/DefaultLayout';
import JobForm from "../../components/JobForm";
import Update from "../Update/Update";
import JobIndex from "../jobIndex/JobIndex";
import ShowJob from '../showJob/ShowJob';
import Delete from '../delete/Delete';
import * as jobsApi from '../../utilities/jobs-api';


function App() {
  const [user, setUser] = useState(getUser());
  const [jobs, setJobs] = useState([])
  const [didDelete, setDidDelete] = useState(false)

    const fetchJobs = async() => {
        const res = await jobsApi.getJobs(user._id)
        setJobs(res)
    }

    useEffect(() => {
        fetchJobs()
    }, [didDelete]) 

  return (
    <main className='overscroll-none font-sans w-screen min-h-screen bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500'>
      { user ?
        <>
          <Routes>
            <Route path='/new' element={<JobForm user={user} setUser={setUser} />} />
            <Route path='/update/:id' element={<Update user={user} setUser={setUser} jobs={jobs} />}  />
            <Route path='/index' element={<JobIndex user={user} setUser={setUser} jobs={jobs} setjobs={setJobs}  />}  />
            <Route path='/' element={<AuthPage user={user} setUser={setUser} />}  />

            { /* TODO: Route path to below is not working I need to figure out how to understand what :id is in this route, url path shows jobs/job._id/show... Need to figure out what the heck this is doing real path here <ShowJob user={user} setUser={setUser} /> put back after rendering h1. <ShowJob user={user} setUser={setUser} /> */}
            <Route path='/show/:id' element={<ShowJob user={user} setUser={setUser} />} />

            <Route path='/delete/:id' element={<Delete user={user} setUser={setUser} didDelete={didDelete}  setDidDelete={setDidDelete} />}  />
          </Routes> 
        </>
          :
          <AuthPage setUser={setUser} />
          }         
    </main>
  );
}

export default App;


 // const Navigate = useNavigate();

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const [jobs, setJobs] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [currentPage, setCurrentPage] = useState(1);
  // const [jobsPerPage] = useState(8);

  // const fetchJobs = async() => {
  //     setLoading(true);
  //     const res = await axios.get('/api/jobs/')
  //     setJobs(res.data)
  //     console.log(res.data)
  //     setLoading(false);
  // }

  // useEffect(() => {
  //     fetchJobs()
  // }, []) 
  // //Get Current Jobs - shows the '8' current jobs on the page at a time
  // const indexOfLastJob = currentPage * jobsPerPage;
  // const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  // const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
