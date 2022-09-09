import * as jobsApi from '../../src/utilities/jobs-api';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Nav from "./Nav";
import('../App.css');


export default function JobForm({ user, setUser }){
    const [jobForm, setJobForm] = useState({
        company: '',
        location: '',
        position: '',
        date: '',
        status: '',
        service: '',
        contacts: '',
        history: '',
        process: '',
        notes: '',
        technical: '',
    })

    const Navigate = useNavigate();

    const handleChange = (e) => {
        setJobForm({...jobForm, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        //prevents page from refreshing
        e.preventDefault();
        
        try{ 
            const res = await jobsApi.createJob(user._id)
        } catch(error){
            console.error('There has been a problem with your fetch operation:', error);
        }
    }


        //     await fetch("/api/jobs", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json"},
        //     body: JSON.stringify(res),
        // }); Navigate('/index');
        // }catch(error) {
        //     console.error(error)
            

    return(
        <div>
            <Nav />
            <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ ease: 'easeInElastic', duration: .5 }}
            className="flex justify-center min-h-full p-6">
                <form className="rounded-lg shadow-xlg bg-white border-2 w-96 p-6 m-10" autoComplete="off" onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <label className="form-label inline-block mb-2 text-gray-700">Company</label>
                        <input
                        type="text"
                        name="company" 
                        value={jobForm.company}
                        onChange={handleChange}
                        required
                        className="
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
                        "/>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <label className="form-label inline-block mb-2 text-gray-700">Location</label>
                        <input
                        type="text"
                        name="location" 
                        value={jobForm.location}
                        onChange={handleChange} 
                        required
                        className="
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
                        "/>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <label for="exampleText0" className="form-label inline-block mb-2 text-gray-700">Date</label>
                        <input
                        type="date"
                        name="date" 
                        value={jobForm.date}
                        onChange={handleChange}
                        required
                        className="
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
                        "/>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <label for="exampleText0" className="form-label inline-block mb-2 text-gray-700">Position</label>
                        <input
                        type="text"
                        name="position"
                        value={jobForm.position}
                        onChange={handleChange}
                        className="
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
                        "/>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <label for="exampleText0" className="form-label inline-block mb-2 text-gray-700">Application Status</label>
                        <input
                        type="text"
                        name="status"
                        value={jobForm.status}
                        onChange={handleChange} 
                        className="
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
                        "/>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <label for="Application Service" className="form-label inline-block mb-2 text-gray-700">Application Service</label>
                        <input
                        type="text"
                        name="service"
                        value={jobForm.service}
                        onChange={handleChange}
                        className="
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
                        "/>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <label for="Contacts" className="form-label inline-block mb-2 text-gray-700">Company Contacts</label>
                        <input
                        type="text"
                        name="contacts"
                        value={jobForm.contacts}
                        onChange={handleChange}
                        className="
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
                        "/>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <label for="History" className="form-label inline-block mb-2 text-gray-700">Meeting History</label>
                        <input
                        type="text"
                        name="history"
                        value={jobForm.history}
                        onChange={handleChange}
                        className="
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
                        "/>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <label for="Interview Process" className="form-label inline-block mb-2 text-gray-700">Interview Process</label>
                        <input
                        type="text"
                        name="process"
                        value={jobForm.process}
                        onChange={handleChange}
                        className="
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
                        "/>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <label for="interview notes" className="form-label inline-block mb-2 text-gray-700">Interview Notes</label>
                            <textarea 
                            type="text"
                            name="technical"
                            value={jobForm.technical}
                            onChange={handleChange}
                            className="
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
                            "
                            id="technical-notes-text-area"
                            rows="5">
                        </textarea>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                        <label for="Technical Notes" className="form-label inline-block mb-2 text-gray-700">Technical Notes</label>
                        <textarea 
                            type="text"
                            name="notes"
                            value={jobForm.notes}
                            onChange={handleChange}
                            className="
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
                            "
                            id="interview-notes-text-area"
                            rows="5">
                        </textarea>
                    </div>
                </div>
                <br/>
                <div className="flex justify-center">
                    <button className="nline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="submit"> Add Job
                    </button> 
                </div>
                </form>
            </motion.div>
        </div>
        
    )
}
