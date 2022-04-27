import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function Dashboard() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let history = useHistory();
    let handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND}users/update`,{
        username: username,
        password: password
        },
        {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        }}).then(res=>{
            console.log(res);
            if(res.data.success){
                window.alert("Your profile has been updated!, please login again!");
                localStorage.removeItem("Authorization");
                localStorage.removeItem("username");
                history.push('/login');
                return null;
            }
        }).catch(err=>{
            console.log(err);
        })
    }        
    if(localStorage.getItem("Authorization")!==null){
            return (
            <div>
                <h1>Welcome {localStorage.getItem("username")}!</h1>
                <div id="wrapper">
                <div className="form_div">
                    <p className="form_label">Update Profile</p>
                    <form>
                        <p><input type="text" placeholder="Enter new Username" value={username} onChange={e=>setUsername(e.target.value)} /></p>
                        <p><input type="password" placeholder="Enter new Password" value={password} onChange={e=>setPassword(e.target.value)} /></p>
                        <p><input type="submit" value="Update" onClick={(e)=>handleSubmit(e)} /></p>
                    </form>
                </div>
            </div>
            </div>
            );    
        }
        
        else{
            history.push('/login');
            return null;
        }
        
}
