import React from 'react'
import footer_image from './images/footer_image.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import './scss/Footer.scss'
const Footer = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-sm-6'>
                    <img src={footer_image} />
                    <div class='social-icons'>
                        <ul className='list-unstyled list-social-icon'>
                            <li><FacebookIcon /></li>
                            <li> <TwitterIcon /></li>
                            <li> <InstagramIcon /></li>
                            <li> <YouTubeIcon /></li>
                            <li><LinkedInIcon /></li>
                            <li> <TelegramIcon /></li>
                        </ul>
                        <div class='dream-finance'>© 2023 CoinsPaid<br></br>
                            Dream Finance OU (Reg No. 14783543)<br></br>
                            Address: Harju maakond, Tallinn, Kesklinna <br></br>linnaosa, Kai tn 4, 10111, Estonia<br></br>
                            VAT: EE102212301<br></br>
                            License No.: FVT000166.</div>
                    </div></div>

                <div className='col-lg-3 col-sm-6'><div className='product-heading'>Products</div>
                    <ul className='products'>
                        <li className='product-items'>Payment gateway</li>
                        <li className='product-items'>Personal wallet</li>
                        <li className='product-items'>Exchange and OTC desk</li>
                        <li className='product-items'>Hot wallet</li>
                        <li className='product-items'>Crypto SaaS</li>
                        <li className='product-items'> CoinsPaid Explorer</li>
                    </ul>
                </div>
                <div className='col-lg-3 col-sm-6'><div className='product-heading'>Products</div>
                    <ul className='products'>
                        <li className='product-items'>Payment gateway</li>
                        <li className='product-items'>Personal wallet</li>
                        <li className='product-items'>Exchange and OTC desk</li>
                        <li className='product-items'>Hot wallet</li>
                        <li className='product-items'>Crypto SaaS</li>
                        <li className='product-items'> CoinsPaid Explorer</li>
                    </ul>
                </div>
                <div className='col-lg-3 col-sm-6'><div className='product-heading'>Products</div>
                    <ul className='products'>
                        <li className='product-items'>Payment gateway</li>
                        <li className='product-items'>Personal wallet</li>
                        <li className='product-items'>Exchange and OTC desk</li>
                        <li className='product-items'>Hot wallet</li>
                        <li className='product-items'>Crypto SaaS</li>
                        <li className='product-items'> CoinsPaid Explorer</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;