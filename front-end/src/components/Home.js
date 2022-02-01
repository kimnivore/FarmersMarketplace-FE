//African Marketplace Create Account Page
import React from 'react'

function Home()   {

    return (
        <div className = 'HomePage'>
            <h1 className = 'Title'>African Market Place</h1>
                <p className = 'Intro'>INTERESTED IN BUYING OR SELLING GOODS IN YOUR AREA?</p>
                    <h2 className = 'Instructions'>Click Below To Open An Account or Login</h2>
                    <div className = "buttons">
                        <button className = "CreateAccountButton">Create Account</button>
                        <button className = "LoginButton">Login</button>
                    </div>
        </div>
            
    )
}

export default Home;