import React, { useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import Ukraine from './Assets/images/Ukraine.png';
import coinspaid_beta from './Assets/images/coinspaid_beta.jpeg';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const SignIn = () => {
 
    return (<>
        <div className='cookies'>
            <div>We use cookies to enhance your experience and make the wallet safe. Check our Cookie Policy for more details.
            </div>
            <div className='accept-all'><DoneIcon />Accept all</div>

        </div>
        <div className='image-styles'><img src={coinspaid_beta} className='logo-name'></img></div>
        <div></div>

        <div className='container'>
            <div className='heading-signin'>Sign In</div>
            <div className='form-label'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email"  placeholder="name@example.com"  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password"   />
                </FloatingLabel>
                <div className='button-above-space'>

                    <Button className='button-sign' >Sign In</Button>

                </div>
                <div className='Account'>
                    <div>Don't have an account?</div>
                    <div>Forgot password?</div>
                </div>

            </div></div>
        <div className='footer-sign property'>
            <div>We use cookies to enhance your experience and make the wallet safe. Check our Cookie Policy for more details.
            </div>
            <div className='accept-all'><DoneIcon />Accept all</div>

        </div>
    </>
    )
}

export default SignIn