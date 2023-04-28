import React from 'react'
import google from './Assets/images/google.png';

import built from './Assets/images/built.png';
import { Button } from 'react-bootstrap';
import instant from './Assets/images/instant.png';

import Header from './Header.js'
import multi_currency from './Assets/images/multi_currency.png';
import Footer from './Assets/Footer.js';
import recurring from './Assets/images/recurring.png';
import bank_card from './Assets/images/bank_card.png';
const Wallet = () => {
    return (<>



        <div className='home-page wallet-section'>
            <Header />


            <section className='banner-sec'>
                <div className='row section1'>
                    <div className='col-lg-8 align-self-center pt-5 payment-gateway'>
                        <div className='card-data-banner'>
                            <h1>Multi-currency online crypto wallet for everyone
                            </h1>
                            <div className='d-flex pt-4'>
                                <div className='accept'>15 cryptocurrencies and 5 blockchains supported</div>
                                <div className='get-paid'>Built-in crypto exchange to 16 fiat currencies</div>
                            </div>

                            <div className='App-store'>
                                <span ><img src={google} className='google' /></span>
                                <span ><img src={google} className='google' /></span>
                            </div>
                            <div className='About-section'>
                                <div className='purchase'>Now $CPD is available for purchase directly in the app</div>
                                <div className='CDP-section'><Button variant="primary" className='About-btn'>About $CPD</Button></div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card-img'>

                        </div>
                    </div>
                </div>
            </section>





            <div className='custom-container acceptance-section4'>
                <div className='row commerce-section'>
                    <div className='col-lg-6 e-commerce free-state'>
                        <h3>Instant and free safe<br /> payments</h3>
                        <div className='multi-currency'>
                            Send and receive crypto payments with zero commission between CoinsPaid user accounts.
                        </div>
                        <Button className='Buttons-wallet-sign'> Sign Up</Button>
                    </div>
                    <div className='col-lg-6 business-type'>
                        <img src={instant} />
                    </div>

                </div>
                <div className='row'>
                    <div className='col-lg-6 business-type'>
                        <img src={multi_currency} />
                    </div>
                    <div className='col-lg-6 forex'>
                        <h3>Multi-currency wallet support</h3>
                        <div className='multi-currency'>There are 15 crypto and 16 fiat currencies supported in the CoinsPaid wallet. Opt-in and opt-out options will be available in 6 fiat currencies soon.</div>

                    </div>
                </div>


            </div>


            {/* Section5 */}


            <div className='custom-container acceptance-section4 activities'>
                <div className='row software'>
                    <div className='col-lg-6 e-commerce'>
                        <h3>Recurring payments<br /> in crypto</h3>
                        <div className='multi-currency'>
                            How much does a cryptocurrency wallet cost? Pay low fees for subscriptions or send other recurring payments with a crypto wallet. Seamless deposits are available with a single sign-in.
                        </div>
                        <Button className='Buttons-wallet-sign'>Sign Up</Button>
                    </div>
                    <div className='col-lg-6 business-type'>
                        <img src={recurring} />
                    </div>

                </div>

                <div className='row row-leisure'>
                    <div className='col-lg-6 business-type'>
                        <img src={built} />
                    </div>
                    <div className='col-lg-6 pt-5'>
                        <h3 className='leisure'>Built-in exchange</h3>
                        <div className='multi-currency'>Manage your crypto portfolio with access to some of the best cryptocurrency exchange rates. All supported currencies can be exchanged instantly and at the click of a button.
                        </div>
                        <Button className='Buttons-wallet-sign'>Sign Up</Button>
                    </div>
                </div>

                <div className='row software bank '>
                    <div className='col-lg-6 e-commerce card-support'>
                        <h3>Bank cards support*</h3>
                        <div className='multi-currency'>
                            The best secure cryptocurrency wallet with built-in exchange and an OTC desk. Buy and Sell Bitcoin and other cryptocurrencies with debit cards at one of the best rates on the market.<br />
                            *coming soon
                        </div>
                        <Button className='Buttons-wallet-sign'>Sign Up</Button>
                    </div>
                    <div className='col-lg-6 business-type'>
                        <img src={bank_card} />
                    </div>

                </div>
                <div className='contact-us-btn'><Button variant="primary" className='Contact-us'>Contact Sales</Button></div>
            </div>

            <Footer />
        </div>
    </>
    )
}

export default Wallet