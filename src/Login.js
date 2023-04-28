import React from 'react'
import Header from './Header'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Assets/Footer'
const Login = () => {
    return (
        <div className='login-page'>
            <Header />
            <div className='custom-container sign-up-section'>
                <div className='row welcome-heading'>
                    <div className='ecosystem'>Welcome to<br></br>
                        the CoinsPaid ecosystem
                        <h1>What type of account would you like to log in to?</h1>
                    </div>
                

                </div>
                <div className='login-buttons'>
                    <div > <Link to="/sign-in"><Button variant="primary" className='personal'>  Personal</Button></Link>
                    <div className='personal-account'>
                        Login to your personal account to manage<br></br> the CoinsPaid personal wallet.
                    </div>
                    </div>
                    <div className='media-personal'> <Link to="/business"><Button className='business'>Business</Button></Link>
                    <div className='your'>Login to your Cryptoprocessing.com merchant<br></br> account to manage your business operations.

</div>
                    </div>
                </div>
               
            </div>
            <Footer />
        </div>
    )
}

export default Login