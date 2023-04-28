import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import Ukraine from './Assets/images/Ukraine.png';
import crypto_by_coinspaid from './Assets/images/crypto_by_coinspaid.webp';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
const BusinessLogin = () => {
    return (<>
     
        <div className='image-styles-crypto'><img src={crypto_by_coinspaid} className='logo-name'></img></div>
        <div></div>

        <div className='container'>
            <div className='heading-signin'>Sign In</div>
            <div className='form-label'>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <div className='button-above-space'>

                    <Button className='button-sign'>Sign In</Button>

                </div>
            

            </div></div>
         
    </>
    )
}

export default BusinessLogin