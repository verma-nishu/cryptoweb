import React from 'react'
import { Button } from 'react-bootstrap';

import Logo_1 from './Assets/images/Logo_1.svg';
import Logo_2 from './Assets/images/Logo_2.svg';
import Logo_3 from './Assets/images/Logo_3.svg';
import Header from './Header';
import Footer from './Assets/Footer';
const BecomePartner = () => {
    return (<>
        <div className='section-overflow'>
            <div className='become-section'>
                <Header />
                <div className='custom-container'>
                    <div className='row coinpaid-row'>
                        <div className='col-lg-12 become-coinspaid'><div> Become a CoinsPaid</div>
                            <div>Introducer with our</div> <div>Affiliate Program</div></div>
                        <div className='col-lg-6'>
                            <div className='network'>If you have a network of connections who might be interested in accepting Bitcoin and other cryptos as a payment method or you have a media platform to promote our service, you can apply for our Introducer programme by filling out our request form.</div>

                        </div>
                        <div className='col-lg-6 button-column'> <div className='become-partner'><Button className='become-btn'>Become a partner</Button></div></div>
                    </div>
                </div>

</div>
                <div className='custom-container brand-section'>
                    <div className='brand-guide'><h1>Brand Guide</h1>
                        <div className='promotion'>You can use the media kit for the promotion of the CoinsPaid brand.</div></div>
                    <div className='row cards-space'>

                        <div className='col-lg-4 col-sm-6 col-md-4  card-mobile'>
                            <div className="card" >
                                <img className="card-img-top" src={Logo_2} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Logos</h4>
                                    <p className="card-text">Please click the button below to familiarize with our recommendations and download logos.</p>
                                    <a href="#" className="btn btn-primary get">Get now</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 card-mobile'>
                            <div className="card" >
                                <img className="card-img-top" src={Logo_3} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Colors</h4>
                                    <p className="card-text">If you are looking for the information about our brand coolers please click the button below.</p>
                                    <a href="#" className="btn btn-primary explore">Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-md-4 card-mobile'>
                            <div className="card" >
                                <img className="card-img-top" src={Logo_1} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Typography</h4>
                                    <p className="card-text">Get to know about our brand fronts which are used in marketing materials.</p>
                                    <a href="#" className="btn btn-primary read">Read</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='custom-container join-section'>
                    <div className='row community-row'>
                        <div className='col-lg-12 join-our'><div>Join our partner community</div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='appreciate'>We appreciate everyone who contributes to the expansion of our services and <br></br>popularises cryptocurrency adoption.</div>

                        </div>
                        <div className='col-lg-12 '> <div ><Button className='let-btn'>LET'S GO!</Button></div></div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
        )
}

        export default BecomePartner;