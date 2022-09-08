import React from 'react';
import { useState } from 'react';
import {  Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from '../../components/Nav';
// import * as jobsApi from '../../utilities/jobs-api';



const JobIndex = ({  jobs, user, setJobs, didDelete }) => {
    const [setJob] = useState(null);

    // useEffect(() => { 
    //   fetchJobs();
    //   },[didDelete, user._id, setJobs]) 

    // const fetchJobs = async() => { 
    //     const res = await jobsApi.getJobs(user._id)
    //     setJobs(res)
    // }

    
    
    return (
        <>
            <motion.div
            initial={{ y:-200 }}
            animate={{ y:0 }}
            transition={{ ease: 'easeIn', duration: '2'}}
            >
                <Nav /> 
            </motion.div>
            <main className='w-screen min-h-max flex justify-center py-20 scroll-smooth overscroll-none'>
                <div className='grid-flow-row grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-15 lg:grid-cols-4 lg:gap-20'>
                    { jobs ?
                        jobs && jobs.map((job) => {
                            return (
                                <div className="w-full h-full">
                                    <div>
                                        <div className='w-full h-full'>
                                            <article key={job._id} className="">
                                                <motion.div 
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ ease: 'easeIn', duration: .5 }}
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
                                                            <button type="button" className="cursor-pointer inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Open</button>
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            ) 
                        })
                        : 
                        <>
                            <div className='w-screen h-screen flex justify-center items-center'>
                                <svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                                    <circle cx="15" cy="15" r="15">
                                        <animate attributeName="r" from="15" to="15"
                                                begin="0s" dur="0.8s"
                                                values="15;9;15" calcMode="linear"
                                                repeatCount="indefinite" />
                                        <animate attributeName="fill-opacity" from="1" to="1"
                                                begin="0s" dur="0.8s"
                                                values="1;.5;1" calcMode="linear"
                                                repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                                        <animate attributeName="r" from="9" to="9"
                                                begin="0s" dur="0.8s"
                                                values="9;15;9" calcMode="linear"
                                                repeatCount="indefinite" />
                                        <animate attributeName="fill-opacity" from="0.5" to="0.5"
                                                begin="0s" dur="0.8s"
                                                values=".5;1;.5" calcMode="linear"
                                                repeatCount="indefinite" />
                                    </circle>
                                    <circle cx="105" cy="15" r="15">
                                        <animate attributeName="r" from="15" to="15"
                                                begin="0s" dur="0.8s"
                                                values="15;9;15" calcMode="linear"
                                                repeatCount="indefinite" />
                                        <animate attributeName="fill-opacity" from="1" to="1"
                                                begin="0s" dur="0.8s"
                                                values="1;.5;1" calcMode="linear"
                                                repeatCount="indefinite" />
                                    </circle>
                                </svg>
                            </div>
                        </>
                    } 
                </div>
            </main>
        </>
    )
}

export default JobIndex