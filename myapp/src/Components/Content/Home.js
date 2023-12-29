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
    const [nextUserId, setNextUserId] = useState(null);

    const getNextUserId = (users) => {
        const maxId = users.reduce((max, user) => (user.id > max ? user.id : max), 0);
        return maxId + 1;
      };
    
    const[newUserData,SetnewUserData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
    })



    React.useEffect(() => {
        axios.get(url).then((res) => {
            setData(res.data);
            setNextUserId(getNextUserId(res.data));
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

const handleFormSubmit=()=>{
        SetnewUserData({...newUserData,id:nextUserId})
    console.log("id:",nextUserId);
    axios.post(url,newUserData).then((res)=>{
        setData([...Data,res.data]);
        console.log(res.data);
        setNextUserId(nextUserId+1);
      SetnewUserData({
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
        })
    })
}

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
<form className='form-user'>
                <label>
                    First Name
                    <input type='text' placeholder='First name' value={newUserData.firstname} onChange={(e)=>SetnewUserData({...newUserData,firstname:e.target.value})}/><br/>
                </label>
                <label>
                Last Name
                    <input type='text' placeholder='Last name' value={newUserData.lastname} onChange={(e)=>SetnewUserData({...newUserData ,lastname:e.target.value})}/><br/>
                </label>
                <label>
                    Email
                    <input type='text' placeholder='Email'value={newUserData.email} onChange={(e)=>SetnewUserData({...newUserData,email:e.target.value})}/><br/>
                </label>
                <label>
                    Number
                    <input type='text' placeholder='Number' value={newUserData.phone} onChange={(e)=>SetnewUserData({...newUserData,phone:e.target.value})}/><br/>
                </label><br/>
                <button type='submit' className='submit-1' onClick={(e)=>{
                    e.preventDefault();
                    handleFormSubmit();
                }}>submit</button>
                </form>
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