import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from '../../components/Nav';
import * as jobsApi from '../../utilities/jobs-api';
import * as userService from '../../utilities/users-service';



const JobIndex = ({ user, setUser, jobs }) => {

    const [job, setJob] = useState(null);

    const navigate = useNavigate();

    // const handleClick = () => {
    //     setJob(job)
    //     navigate(`/show/${job._id}`)
    // }
    
    return (
        <>
        <Nav /> 
            <main className='w-screen min-h-max flex justify-center py-20 scroll-smooth overscroll-none'>
                <div className='grid-flow-row grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-15 lg:grid-cols-4 lg:gap-20'>
                    {
                        jobs && jobs.map((job) => {
                            return (
                                <div className="w-full h-full">
                                    <div>
                                        <div className='w-full h-full'>
                                            {/* <Link to={`/show/${job._id}`} onClick={() => {setJob(job)}} > */}
                                                <article key={job._id} className="">
                                                    <motion.div 
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ ease: 'easeIn', duration: 1 }}
                                                    className="w-[350px] h-[300px]">
                                                        <div className="min-w-[300px] min-h-[300px] flex flex-col justify-center items-center rounded-lg shadow-lg bg-white border-2 border-solid border-indigo-600 truncate">
                                                            <h1 className="text-gray-900 text-2xl font-bold leading-tight mb-5 truncate">{job.company}</h1>
                                                            <br/>
                                                            <p className="text-gray-700 text-xl mb-4">
                                                                {job.location}
                                                            <br/>
                                                                {job.date}
                                                            </p>
                                                            <Link to={`/show/${job._id}`} onClick={() => {setJob(job)}} className='flex pt-12'>
                                                                <button type="button" className="cursor-pointer inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                                                Open</button>
                                                            </Link>
                                                        </div>
                                                    </motion.div>
                                                </article>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                </div>
                            
                            ) 
                        })
                    } 
                </div>
            </main>
        </>
    )
}

export default JobIndex