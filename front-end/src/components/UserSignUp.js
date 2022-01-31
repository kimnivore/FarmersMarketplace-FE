import React from 'react'

function UserSignUp()   {

    return (
        <div className = 'AccountPage'>

            <div className = 'Owner'>
                <h1 className = 'titles'>Owner Sign Up</h1>
                    <h2 className = 'TextBox'>Name: </h2>
                    <h2 className = 'TextBox'>E-Mail: </h2>
                    <h2 className = 'TextBox'>Password: </h2>
                    <h2 className = 'TextBox'>Location: </h2>
                        <button className = "CreateAccount">Create Account</button>
            </div>

            <div className = 'User'>
                <h1 className = 'titles'>User Sign Up</h1>
                    <h2 className = 'TextBox'>Name: </h2>
                    <h2 className = 'TextBox'>E-Mail: </h2>
                    <h2 className = 'TextBox'>Password: </h2>
                    <h2 className = 'TextBox'>Location: </h2>
                        <button className = "CreateAccount">Create Account</button>
            </div>

        </div>
            
    )
}

export default UserSignUp;
