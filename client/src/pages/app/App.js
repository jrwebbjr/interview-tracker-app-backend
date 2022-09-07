import '../../../src/App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../authPage/AuthPage';
import JobForm from "../../components/JobForm";
import Update from "../update/Update";
import JobIndex from "../jobIndex/JobIndex";
import ShowJob from '../showJob/ShowJob';
import Delete from '../delete/Delete';
// import * as jobsApi from '../../utilities/jobs-api';


function App() {
  const [user, setUser] = useState(getUser());
  const [jobs, setJobs] = useState([])
  const [didDelete, setDidDelete] = useState(false)

    // const fetchJobs = async() => {
    //     const res = await jobsApi.getJobs(user._id)
    //     setJobs(res)
    // }

    // useEffect(() => {
    //     fetchJobs()
    // }, [didDelete]) 
  

  return (
    <main className='overscroll-none font-sans w-screen min-h-screen bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500'>
      { user ?
        <>
          <Routes>
            <Route path='/new' element={<JobForm user={user} setUser={setUser} />} />
            <Route path='/update/:id' element={<Update user={user} setUser={setUser} jobs={jobs} />}  />
            <Route path='/index' element={<JobIndex user={user} setUser={setUser} jobs={jobs} setjobs={setJobs}  />}  />
            <Route path='/' element={<AuthPage user={user} setUser={setUser} />}  />
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