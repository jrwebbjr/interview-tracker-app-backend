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
        <nav className="flex items-center justify-between flex-wrap bg-gradient-to-l from-indigo-600 via-blue-600 to-cyan-600 p-6 border-b-2 sticky top-0">
            <motion.div 
            animate={{
                scale: [1, 2, 1],
                rotate: [0, 360, 0, ],
              }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center flex-shrink-0 text-white mr-6 ml-6">
                <span className="font-dosis font-bold text-6xl tracking-tight">Apply</span>
            </motion.div>
            {/* 
            //Hide mobile menu, leaving jobs and create job button in mobile view they just wrap now
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-cyan-200 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div> */}
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
