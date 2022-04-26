import React from 'react';
import { useHistory } from 'react-router-dom';
export default function Dashboard() {
    let history = useHistory();
            if(localStorage.getItem("Authorization")!==null){
            return (
            <div>
                Welcome {localStorage.getItem("username")}!
            </div>
            );    
        }
        
        else{
            history.push('/login');
            return null;
        }
        
}
