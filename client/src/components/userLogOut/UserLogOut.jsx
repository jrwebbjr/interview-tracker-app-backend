import { logOut } from '../../utilities/users-service';
import { motion } from 'framer-motion';

export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <motion.div 
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ ease: 'easeIn', duration: .5 }}
  className="">
    <div>{user.name}</div>
    <div className="">{user.email}</div>
    <button className="" onClick={handleLogOut}>LOG OUT</button>
  </motion.div>
);
}