import React from 'react'
import Header from './Header'
import { Button } from 'react-bootstrap'
import Footer from './Assets/Footer'
import guards from './Assets/images/guards.png'
import noroot from './Assets/images/noroot.png'
const ContactUs = () => {
    return (
        <div className='contact-section'>
            <Header />
            <div className='custom-container'>
            <div className='row start-row'>
                <div className='col-lg-12 future-heading'><div> Start your future today. Get<br></br>
                    a free consultation.</div> </div>
                <div className='col-lg-6'>
                    <div className='details'>Company details:<br></br>
                        CoinsPaid and Cryptoprocessing brands are operated by "Dream Finance OÜ" <br></br>registered and licensed in Estonia.<br></br>
                        Dream Finance OÜ (14783543)<br></br>
                        Address: Harju maakond, Tallinn, Kesklinna linnaosa, Kai tn 4, 10111, Estonia<br></br>
                        VAT: EE102212301;<br></br>
                        License No.: FVT000166.</div>

                </div>
                <div className='col-lg-6 contact-btn'> <div className='contact-us'><Button className='contact'>Contact Us</Button></div></div>
                <div className='independent'>
                    <div><h3>Independent security <br></br>audits</h3></div>
                    <div className='guards10'><img src={guards} className='guard'/></div>
                    <div><img src={noroot} className='noroot'/></div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs