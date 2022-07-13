import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import Nav from '../../components/Nav';

export default function Delete({ user, didDelete ,setDidDelete }){
    let { id } = useParams()

    const Navigate = useNavigate({ user });

    const handleClick = async () => {
        try{ 
            //TODO: Change your url routes to be correct like below...pass user.id in as props to work
            await axios.delete(`http://localhost:3001/api/jobs/${user._id}/delete/${id}`).then(() => {
                Navigate('/index')
            })
            setDidDelete(!didDelete)
        } catch(err){
            console.error(err)
        }
    }
    return (
        <main>
            <Nav />
            <div className="flex justify-center min-h-full p-6">
                <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ ease: 'easeIn', duration: 1 }}
                className="rounded-lg shadow-xlg bg-white border-2 w-96 p-6 m-10">
                    <h1>Are you sure you want to Permanently Delete this Job?</h1>
                    <div className='flex justify-center pt-8'>
                    <button className="nline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleClick}>
                    Delete
                    </button>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}