import logo from '../../assets/logo.svg'
import './_Header.scss'
import Navbar from "../navbar/Navbar"

export default function Header() {
    return (
        <div className='kasa-header'>
            <img src={logo} alt='Kasa' className='kasa-header__logo' />
            <Navbar />
        </div>
    );
}
