// import React from 'react';

// const Pagination = ({ jobsPerPage, totalJobs, paginate }) => {
//     const pageNumbers = [];

//     for(let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++){
//         pageNumbers.push(i);
//     }
//     return (
//         <div>
//             {pageNumbers.map(number => (
//                 <li key={number} className="">
//                     <a onClick={() => paginate(number)} href="!#">
//                         {number}
//                     </a>
//                 </li>
//             ))}
//         </div>
//     )
// }

// export default Pagination