import React from 'react'
import { Button } from 'react-bootstrap';
import TableCrypto from './TableCrypto.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from './Header.js'
import A_logo from './Assets/images/A_logo.png'
import Footer from './Assets/Footer.js';
import { webName } from './config/Config.js';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Forex from './Assets/images/Forex.png';
import ecommerce from './Assets/images/ecommerce.png';
import tickets from './Assets/images/tickets.png';
import SaaS from './Assets/images/SaaS.png'
const Home = () => {
    return (<>



        <div className='home-page'>
            <Header />


            <section className='banner-sec'>
                <div className='row section1'>
                    <div className='col-lg-8 align-self-center pt-5 payment-gateway'>
                        <div className='card-data-banner'>
                            <h1>{webName}<br></br>
                                your #1 crypto payment <br></br>gateway by CoinsPaid</h1>
                            <div className='d-flex pt-4'>
                                <div className='accept'>Accept payments in 20+ cryptocurrencies from end users around the world,</div>
                                <div className='get-paid'>Get paid in USD, EUR, GBP and other fiat currencies directly to your bank account</div>
                            </div>
                            <div className='section1-btn'>
                                <div><Button variant="primary" className='consultation'>Get Free Consultation</Button></div>
                                <div><Button className='goto'>Go to CryptoProcessing.com</Button></div>
                            </div>
                            <div className='section1-bottom-logo'>
                                <div className='award'><h4>SBCAWARDS</h4></div>
                                <div className='A-logo'><img src={A_logo} className='goto' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card-img'>
                            {/* <img src='https://static.tildacdn.com/tild6535-3039-4735-b831-323736373938/-2_0001_12100cd53.png' alt='image' /> */}
                        </div>
                    </div>
                </div>
            </section>



            <div className='should-integrate'>
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

            <div className='section3'>
                <div className='custom-container section3'>
                    <div className='row w-100 table-row'>
                        <div className='col-lg-12 table-scroll'>
                            <div className='table-section'><TableCrypto /></div>

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
                        <img src={Forex} />
                    </div>
                    <div className='col-lg-6 forex'>
                        <h3>Forex and Binary</h3>
                        <div className='multi-currency'>Our processor is an ideal coin payment solution for the Forex industry.
                            <br></br>
                            Multi-currency support, a built-in exchange of 20+ cryptocurrencies and 40+ national currencies, multi-account management, and an extensive reporting system are only some features
                        </div>
                        <Button>Know More<span className='arrow'><ArrowForwardIcon /></span></Button>
                    </div>
                </div>
                <div className='row commerce-section'>
                    <div className='col-lg-6 e-commerce'>
                        <h3>e-Commerce</h3>
                        <div className='multi-currency'>
                            Our crypto payment processing is a robust solution for online stores to accept Bitcoin and 20+ other digital assets. We provide a simple and secure invoicing gateway in cryptocurrency with no exchange rate risk for both parties: merchants and buyers.
                        </div>
                        <Button>Know More<span className='arrow'><ArrowForwardIcon /></span></Button>
                    </div>
                    <div className='col-lg-6 business-type'>
                        <img src={ecommerce}/>
                    </div>

                </div>
                <div className='d-flex leave-your request'>
                    <div className='free-marketing'><h3>Leave your request today and get a free marketing advice from our team</h3></div>
                    <div className='contact-sales'><Button variant="primary" className='Contact-btn'>Contact Sales</Button></div>
                </div>
            </div>


            {/* Section5 */}


            <div className='custom-container acceptance-section4 activities'>

                <div className='row row-leisure'>
                    <div className='col-lg-6 business-type'>
                        <img src={tickets} />
                    </div>
                    <div className='col-lg-6'>
                        <h3 className='leisure'>Leisure activities</h3>
                        <div className='multi-currency'>Our crypto payment gateway is a borderless method with 99.99% uptime and no exchange rate risks: a user pays in cryptocurrency, and a merchant instantly receives an equal amount in the fiat currency of their choice. The provider also supports recurring payments.
                        </div>
                        <Button>Know More<span className='arrow'><ArrowForwardIcon /></span></Button>
                    </div>
                </div>
                <div className='row software'>
                    <div className='col-lg-6 e-commerce'>
                        <h3>Software vendors</h3>
                        <div className='multi-currency'>
                            Our service provides a range of cryptocurrency payment methods to your customers that fit every business model: invoices, payment links, recurring payments and channels. Integrate the best payment gateway in your platform and increase your conversion rate.
                        </div>
                        <Button>Know More<span className='arrow'><ArrowForwardIcon /></span></Button>
                    </div>
                    <div className='col-lg-6 business-type'>
                        <img src={SaaS} />
                    </div>

                </div>
                <div className='d-flex leave-your'>
                    <div className='free-marketing'><h3>Get to know how we've already helped to save over $500M for our customers.</h3></div>
                    <div className='contact-sales'><Button variant="primary" className='Contact-btn'>Talk with us</Button></div>
                </div>
                <div className='d-flex leave-your'>
                    <div className='open-for-growth'>    <h1>Open for growth?
                        <br>
                        </br><span>Work with leaders.</span>
                    </h1></div>
                    <div className='let-go'><Button variant="primary" className='Go-btn'>LET'S GO</Button></div>
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
            <Footer />
            {/* <div className='message-icon'><ModeCommentIcon/></div> */}
        </div>
    </>
    )
}

export default Home;