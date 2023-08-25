import React from 'react'
import Dashboard from '../../components/student/Dashboard'

const index = () => {
    return <Dashboard />
}

// export async function getStaticProps(context: any) {
//   const fetchUser = await fetch("http://localhost:5555/users/me");
//   const data = await fetchUser.json();
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
export default index
