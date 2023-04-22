import React from 'react'
import './Scss/Home.scss';
import { Button } from 'react-bootstrap';
import TableCrypto from './TableCrypto.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function HomePage(){
return(
    <>
     <div style={{ width: '100%' }}>
            {/* ........Section1........ */}
            <div className='container-fluid cryptoprocessing-section'>
                <div className='row'>
                    <div className='col-lg-8 coins-paid'>
                        <h1>CryptoProcessing.com
                            your #1 crypto payment gateway by CoinsPaid</h1>

                        <div className='accept-payments'>
                            <div className='accept'>Accept payments in 20+ cryptocurrencies from end users around the world</div>
                            <div className='get-paid'>Get paid in USD, EUR, GBP and other fiat currencies directly to your bank account</div>
                        </div>
                        <div className='section1-btn'>
                            <div><Button variant="primary" className='consultation'>Get Free Consultation</Button></div>
                            <div><Button className='goto'>Go to CryptoProcessing.com</Button></div>
                        </div>
                        <div className='section1-bottom-logo'>
                            <div class='award'><h4>SBCAWARDS</h4></div>
                            <div class='A-logo'><img src='https://thumb.tildacdn.com/tild6338-3934-4062-b436-373865313030/-/resize/90x/-/format/webp/1.png' className='goto'></img></div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        {/* <div className='first-img-position'><img className='first-image' src='https://thumb.tildacdn.com/tild3031-6164-4866-b364-306635396466/-/format/webp/-2_0002_121005e3.png'></img></div>

                    <div className='second-img-position'><img className='second-image' src='https://thumb.tildacdn.com/tild6535-3039-4735-b831-323736373938/-/format/webp/-2_0001_12100cd53.png'></img></div>
                    <div className='third-img-position'> <img className='third-image' src='https://thumb.tildacdn.com/tild3131-3362-4236-a463-373038336635/-/format/webp/-2_0000_1210053.png'></img></div> */}
                    </div>
                </div>

                {/* .........Section2...... */}
                <div className='container-fluid should-integrate pt-5'>
                    <div className='row pt-4'>
                        <div className='col-lg-12 integrate'>
                            <h1>Why you should integrate
                                <br>
                                </br><span>our crypto payment gateway</span>
                            </h1>


                        </div>

                    </div>
                    <div className='row pt-4 margin-save'>
                        <div className='col-lg-4 save-up'>
                            <h3>Save up to 80% on fees
                                <br>
                                </br><span>vs traditional PSPs</span>
                            </h3>


                        </div>

                        <div className='col-lg-4 save-up'>
                            <h3>Boost conversion rate
                                <br>
                                </br><span>up to 35%</span>
                            </h3>


                        </div>
                        <div className='col-lg-4 save-up'>
                            <h3>Achieve 100% global
                                <br>
                                </br><span>coverge</span>
                            </h3>


                        </div>
                    </div>
                </div>

                {/* .........Section3...... */}
                <div class='section3'>
                    <div class='row'>
                        <div class='col-lg-12'>
                            <div class='table-section'><TableCrypto /></div>

                        </div>
                    </div>
                </div>
                {/* .........Section4...... */}
                <div className='acceptance-section4 pt-5'>
                    <div className='row pt-4'>
                        <div className='col-lg-12 acceptance'>
                            <h1>100% acceptance rate
                                <br>
                                </br><span>for any business type</span>
                            </h1>


                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-lg-6 business-type'>
                            <img src='https://static.tildacdn.com/tild3763-3161-4330-b435-393764636365/Forex.png' />
                        </div>
                        <div className='col-lg-6'>
                            <h3>Forex and Binary</h3>
                            <div className='multi-currency'>Our processor is an ideal coin payment solution for the Forex industry.
                                <br></br>
                                Multi-currency support, a built-in exchange of 20+ cryptocurrencies and 40+ national currencies, multi-account management, and an extensive reporting system are only some features
                            </div>
                            <Button>Know More<span class='arrow'><ArrowForwardIcon /></span></Button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 e-commerce'>
                            <h3>e-Commerce</h3>
                            <div className='multi-currency'>
                                Our crypto payment processing is a robust solution for online stores to accept Bitcoin and 20+ other digital assets. We provide a simple and secure invoicing gateway in cryptocurrency with no exchange rate risk for both parties: merchants and buyers.
                            </div>
                            <Button>Know More<span class='arrow'><ArrowForwardIcon /></span></Button>
                        </div>
                        <div className='col-lg-6 business-type'>
                            <img src='https://static.tildacdn.com/tild3561-6338-4363-b133-323532623161/ecommerce.png' />
                        </div>

                    </div>
                    <div className='d-flex'>
                        <h3>Leave your request today and get a free marketing advice from our team</h3>
                        <Button>Know More<span class='arrow'><ArrowForwardIcon /></span></Button>
                    </div>
                </div>
            </div>
        </div></>
)
}
export default HomePage;