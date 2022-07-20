import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as jobsApi from '../../utilities/jobs-api';
import Nav from '../../components/Nav';

export default function Update({ user, jobs }){

    const { id } = useParams();

    const [job, setJob] = useState({});

    const company = useRef()
    const location = useRef()
    const position = useRef()
    const date = useRef()
    const status = useRef()
    const applicationService = useRef()
    const contacts = useRef()
    const history = useRef()
    const interviewProcess = useRef()
    const interviewNotes = useRef()
    const technicalNotes = useRef()

    const Navigate = useNavigate();

    useEffect(() => {
        setJob(jobs.find((obj) => obj._id === id))
    }, [])

    console.log(job)
    console.log(user._id)

    const handleSubmit = async (e) => {
        console.log("before Try")
        //prevents default behavior which stops page from refreshing
        e.preventDefault();
        
        try{ 
            console.log("after Try")
            await jobsApi.updateJob(user._id, job._id, {
                company: company.current.value, location: location.current.value, position: position.current.value, date: date.current.value, status: status.current.value, applicationService: applicationService.current.value, contacts: contacts.current.value, history: history.current.value, interviewProcess: interviewProcess.current.value, interviewNotes: interviewNotes.current.value, technicalNotes: technicalNotes.current.value
            // await fetch(`http://localhost:3001/api/jobs/${user._id}/update/${id}`,{
            //     method: "PUT", 
            //     headers: {
            //         "Accept": "application/json",
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         company: company.current.value, location: location.current.value, position: position.current.value, date: date.current.value, status: status.current.value, applicationService: applicationService.current.value, contacts: contacts.current.value, history: history.current.value, interviewProcess: interviewProcess.current.value, interviewNotes: interviewNotes.current.value, technicalNotes: technicalNotes.current.value
            //     })
            })
            console.log("After API")
            Navigate(-1);
        }catch(error) {
            console.error(error)
    } 
}
    return (
        <div>
            <Nav />
            <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ ease: 'easeIn', duration: 1 }}
            className="flex justify-center min-h-full p-6">
                <form className="rounded-lg shadow-xlg bg-white border-2 w-96 p-6 m-10" onSubmit={handleSubmit}>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <label className="form-label inline-block mb-2 mt-2 text-gray-700">Company</label>
                            <input type="text" ref={company} name="company" defaultValue={job.company} className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    shadow-lg
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                                " />
                            <label className="form-label inline-block mb-2 mt-2 text-gray-700">Location</label>
                            <input type="text" ref={location} name="location" defaultValue={job.location} className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    shadow-lg
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                                " />
                            <label className="form-label inline-block mb-2 mt-2 text-gray-700">Position</label>      
                            <input type="text" ref={position} name="position" defaultValue={job.position} className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    shadow-lg
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                                " />
                            <label className="form-label inline-block mb-2 mt-2 text-gray-700">Date</label> 
                            <input type="text" ref={date} name="date" defaultValue={job.date} className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    shadow-lg
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                                " />
                            <label className="form-label inline-block mb-2 mt-2 text-gray-700">Status</label>   
                            <input type="text" ref={status} name="status" defaultValue={job.status} className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    shadow-lg
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                                " />  
                            <label className="form-label inline-block mb-2 mt-2 text-gray-700">Application Service Used</label>
                            <input type="text" ref={applicationService} name="applicationService" 
                            defaultValue={job.applicationService} className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            shadow-lg
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                        " /> 
                        <label className="form-label inline-block mb-2 mt-2 text-gray-700">Contacts</label>  
                        <input type="text" ref={contacts} name="contacts" defaultValue={job.contacts} className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    shadow-lg
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                                " />
                            <label className="form-label inline-block mb-2 mt-2 text-gray-700">History</label>      
                            <input type="text" ref={history} name="history" defaultValue={job.history} className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    shadow-lg
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                                " />
                            <label className="form-label inline-block mb-2 text-gray-700">Interview Process</label>  
                            <input type="text" ref={interviewProcess} name="interviewProcess" 
                            defaultValue={job.interviewProcess} className="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            shadow-lg
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                        " /> 
                        <label className="form-label inline-block mb-2 mt-2 text-gray-700">Interview Notes</label> 
                        <input type="text" ref={interviewNotes} name="interviewNotes" defaultValue={job.interviewNotes} className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    shadow-lg
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                                " />
                            <label className="form-label inline-block mb-2 mt-2 text-gray-700">Technical Notes</label>  
                            <input type="text" ref={technicalNotes} name="technicalNotes" defaultValue={job.technicalNotes} className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    shadow-lg
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
                                " />
                            <div className='flex justify-center pt-8'>
                                <button className="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="submit" value="Update">
                                Update
                            </button>
                            </div> 
                        </div>
                    </div>
                </form>  
            </motion.div>
        </div>
        
        
    )
}