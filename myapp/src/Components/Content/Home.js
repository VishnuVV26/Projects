import React, { useState } from 'react'
import axios, { Axios } from "axios";
import './Demo.css'
import Pagination from '../Pagination';
import Filter from './InitialPage';

const Home = () => {



    const url = "https://jsonplaceholder.org/users";
    const [Data, setData] = useState([]);


    const [currentPage, setCurrentPage] = useState(1);
    const [postperpage, setPostperPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');



    React.useEffect(() => {
        axios.get(url).then((res) => {
            setData(res.data);
        })
    }, [])

    const lastPostindex = currentPage * postperpage;
    const firstPostindex = lastPostindex - postperpage;
    const currepost = Data.slice(firstPostindex, lastPostindex);

    const filteredPosts = currepost.filter((d) =>
        Object.values(d).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    if (!Data) return null;
    return (
        <div className='Data'>

            {/* {Data.map((d,i)=>(
            <li key={i}>
                {d.firstname}
            </li>
        ))} */}
            <div className='input'>
                <input type='text' placeholder='Search...' className='search-box' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>



            <div className='tabledata'>
                <table>
                    <thead>
                        <tr className='rows'>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody className='databody'>
                        {filteredPosts.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.firstname}</td>
                                <td>{d.lastname}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <Pagination totalposts={Data.length}
                    postPerpage={postperpage}
                    setCurrentpage={setCurrentPage} />

            </div>

        </div>
    )
}

export default Home