// commented out the below because Hamza mentioned making it simpler during our call. feel free to delete.

import React from 'react'

function UserSignUp()   {

    return (
        <div className = 'AccountPage'>

            <div className = 'User'>
                <h1 className = 'title'>Sign Up Below</h1>
                    <h2 className = 'TextBox'>Name: <input className = "Name"></input> </h2>
                    
                    <h2 className = 'TextBox'>Password: <input className = "Password"></input> </h2>
                        <button className = "CreateAccountButton2">Create Account</button>
            </div>


        </div>
            
    )
}

export default UserSignUp;
