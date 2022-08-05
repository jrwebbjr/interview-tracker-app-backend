import { useNavigate } from 'react-router-dom';
import * as userService from '../utilities/users-service';
import UserLogOut from './userLogOut/UserLogOut';
import { motion } from 'framer-motion';


export default function Nav(){
    const Navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        userService.logOut();
        Navigate('/');
    }

    const handleClick = () => {
        <UserLogOut />
        Navigate('/');
    } 

    const handleJobLink = () => {
        Navigate(`/index`);
    }

    const handleNavLink = () => {
        Navigate('/new');
    } 

    return (
        <nav 
        className="flex items-center justify-between flex-wrap bg-gradient-to-l from-indigo-600 via-blue-600 to-cyan-600 p-6 border-b-2 sticky top-0">
            <div className="flex items-center justify-center flex-shrink-0 text-white mr-6 ml-6">
                <span className="font-dosis font-bold text-6xl tracking-tight">Apply</span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                <a onClick={handleJobLink} class="block mt-4 font-dosis font-bold text-2xl lg:inline-block lg:mt-0 text-cyan-100 hover:text-indigo-600 hover:text-4xl mr-6 cursor-pointer">
                    Jobs
                </a>
                <a onClick={handleNavLink} class="block mt-6 font-dosis font-bold text-2xl lg:inline-block lg:mt-0 text-cyan-100 hover:text-indigo-600 hover:text-4xl mr-6 cursor-pointer">
                    Create Job
                </a>
                </div>
                <div>
                <button onClick={handleClick} class="inline-block text-sm px-4 mr-6 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-600 hover:bg-white mt-4 lg:mt-0">Sign Out</button>
                </div>
            </div>
        </nav>
    )
}
