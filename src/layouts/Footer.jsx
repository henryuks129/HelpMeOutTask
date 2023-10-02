import footericon from '../assets/footericon.svg'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className="footer-main-body">
        <footer className="text-white container d-flex justify-content-between align-items-center footer-inner">
            <div className='d-flex gap-2 footer-icon-body'>
                <img src={footericon} alt="" />
                <h5 className='pt-2 footer-icon-text'>HelpMeOut</h5>
            </div>
                <div className='mt-5'>
                    <h5 className='footer-header'>Menu</h5>
                    <div className='mt-4'>
                    <p className='footer-header-text'>Home</p>
                    <p className='footer-header-text'>Converter</p>
                    <p className='footer-header-text'>How it Works</p> 
                    </div>
                </div>
                <div className='mt-5'>
                    <h5 className='footer-header'>About Us</h5>
                    <div className='mt-4'>
                    <p className='footer-header-text'>About</p>
                    <p className='footer-header-text'>Contact Us</p>
                    <p className='footer-header-text'>Privacy Policy</p>
                    </div>
                </div>
                <div className='mt-5'>
                    <h5 className='footer-header'>Screen Record</h5>
                    <div className='mt-4'>
                    <p className='footer-header-text'>Browser Window</p>
                    <p className='footer-header-text'>Desktop</p>
                    <p className='footer-header-text'>Application</p>
                    </div>
                </div>
        </footer>
    </div>
  )
}
