import React from 'react'
import { Button } from 'react-bootstrap';
import TableCrypto from './TableCrypto.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from './Header.js'
import A_logo from './Assets/images/A_logo.png'
import BecomePartner from './BecomePartner.js';
import Footer from './Assets/Footer.js';
const Home = () => {
    return (<>

       

        <div className='home-page'>
      <Header/>
        {/* <BecomePartner/> */}
            
            <div class='custom-container'>
                <div className='row section1'>
                    <div className='col-lg-8 align-self-center pt-5 payment-gateway'>
                        <h1>CryptoProcessing.com<br></br>
                            your #1 crypto payment <br></br>gateway by CoinsPaid</h1>
                        <div class='d-flex pt-4'>
                            <div className='accept'>Accept payments in 20+ cryptocurrencies from end users around the world,</div>
                            <div className='get-paid'>Get paid in USD, EUR, GBP and other fiat currencies directly to your bank account</div>
                        </div>
                        <div className='section1-btn'>
                            <div><Button variant="primary" className='consultation'>Get Free Consultation</Button></div>
                            <div><Button className='goto'>Go to CryptoProcessing.com</Button></div>
                        </div>
                        <div className='section1-bottom-logo'>
                            <div class='award'><h4>SBCAWARDS</h4></div>
                            <div class='A-logo'><img src={A_logo} className='goto'/></div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <img src='https://static.tildacdn.com/tild6535-3039-4735-b831-323736373938/-2_0001_12100cd53.png' alt='image' />
                    </div>
                </div>
            </div>

            <div class='should-integrate'>
                <div className='custom-container pt-5 integrate-container'>
                    <div className='row pt-4 row-why'>
                        <div className='col-lg-12 integrate'>
                            <h1>Why you should integrate
                                <br>
                                </br><span>our crypto payment gateway</span>
                            </h1>


                        </div>

                    </div>
                    <div className='row pt-4 margin-save'>
                        <div className='col-lg-4 col-xl-4 save-up'>
                            <h3>Save up to 80% on fees
                                <br>
                                </br><span>vs traditional PSPs</span>
                            </h3>


                        </div>

                        <div className='col-lg-4 col-xl-4 save-up'>
                            <h3>Boost conversion rate
                                <br>
                                </br><span>up to 35%</span>
                            </h3>


                        </div>
                        <div className='col-lg-4 col-xl-4 save-up'>
                            <h3>Achieve 100% global
                                <br>
                                </br><span>coverge</span>
                            </h3>


                        </div>
                    </div>
                </div>
            </div>

            <div class='section3'>
                <div class='custom-container section3'>
                    <div class='row w-100 table-row'>
                        <div class='col-lg-12 table-scroll'>
                            <div class='table-section'><TableCrypto /></div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='custom-container acceptance-section4'>
                <div className='row pt-4 row-accept'>
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
                    <div className='col-lg-6 forex'>
                        <h3>Forex and Binary</h3>
                        <div className='multi-currency'>Our processor is an ideal coin payment solution for the Forex industry.
                            <br></br>
                            Multi-currency support, a built-in exchange of 20+ cryptocurrencies and 40+ national currencies, multi-account management, and an extensive reporting system are only some features
                        </div>
                        <Button>Know More<span class='arrow'><ArrowForwardIcon /></span></Button>
                    </div>
                </div>
                <div className='row commerce-section'>
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
                <div className='d-flex leave-your request'>
                    <div class='free-marketing'><h3>Leave your request today and get a free marketing advice from our team</h3></div>
                    <div class='contact-sales'><Button variant="primary" className='Contact-btn'>Contact Sales</Button></div>
                </div>
            </div> 


            {/* Section5 */}


             <div className='custom-container acceptance-section4 activities'>

                <div className='row row-leisure'>
                    <div className='col-lg-6 business-type'>
                        <img src='https://static.tildacdn.com/tild6162-3034-4833-a466-613361383639/tickets.png' />
                    </div>
                    <div className='col-lg-6'>
                        <h3 className='leisure'>Leisure activities</h3>
                        <div className='multi-currency'>Our crypto payment gateway is a borderless method with 99.99% uptime and no exchange rate risks: a user pays in cryptocurrency, and a merchant instantly receives an equal amount in the fiat currency of their choice. The provider also supports recurring payments.
                        </div>
                        <Button>Know More<span class='arrow'><ArrowForwardIcon /></span></Button>
                    </div>
                </div>
                <div className='row software'>
                    <div className='col-lg-6 e-commerce'>
                        <h3>Software vendors</h3>
                        <div className='multi-currency'>
                            Our service provides a range of cryptocurrency payment methods to your customers that fit every business model: invoices, payment links, recurring payments and channels. Integrate the best payment gateway in your platform and increase your conversion rate.
                        </div>
                        <Button>Know More<span class='arrow'><ArrowForwardIcon /></span></Button>
                    </div>
                    <div className='col-lg-6 business-type'>
                        <img src='https://static.tildacdn.com/tild6266-3133-4463-b464-323431316638/SaaS.png' />
                    </div>

                </div>
                <div className='d-flex leave-your'>
                    <div class='free-marketing'><h3>Get to know how we've already helped to save over $500M for our customers.</h3></div>
                    <div class='contact-sales'><Button variant="primary" className='Contact-btn'>Talk with us</Button></div>
                </div>
                <div className='d-flex leave-your'>
                    <div class='open-for-growth'>    <h1>Open for growth?
                        <br>
                        </br><span>Work with leaders.</span>
                    </h1></div>
                    <div class='let-go'><Button variant="primary" className='Go-btn'>LET'S GO</Button></div>
                </div>
            </div>
            <div className='custom-container'>
                <div className='row counts'>
                    <div className='col-lg-4 col-sm-4 col-4'><h1>#1</h1>
                        <div className='proven-leader'>CryptoProcessing by CoinsPaid is a proven leader in the market.</div></div>
                    <div className='col-lg-4 col-sm-4 col-4'><h1>9+</h1><div className='years-working'>Years working with cryptocurrency.</div></div>
                    <div className='col-lg-4 col-sm-4 col-4'><h1>800+</h1>
                        <div className='merchants'>Merchants entrust their transactions to us from more than 10M customers.</div></div>
                </div>
                <div className='row more-details pt-4'>
                    <div className='col-lg-12 bitcoin'>Find more details about Bitcoin Payment Gateway Processor and coins payment on our website</div>
                    <div className='col-lg-12'><Button className='Cryptoprocessing-btn'>Cryptoprocessing.com</Button></div>
                </div>
            </div> 
            <Footer/>
        </div>
    </>
    )
}

export default Home;