import logo from '../assets/logo.svg'
import '../styles/Header.scss'

const Header = () => {
    return  (
        <div className='kasa-header'>
            <img src={logo} alt='Kasa' className='kasa-header__logo'/>
            <div className="kasa-header__nav">
                <div className="kasa-header__nav--welcome">Accueil</div>
                <div className="kasa-header__nav--about">A Propos</div>
            </div>
        </div>
        )
};

export default Header