import './header.scss'
import Button from '../button/button';
import {ReactComponent as Logo}  from '../../assets/svgviewer.svg'
const Header = () => {
    return (
        <header className="App-header">
            <div className='logo'>
                <Logo/>
            </div>
          <nav>
            <ul className='list'>
                <li>Home</li>
                <li>Privacy Policy</li>
                <li>Terms and Condtions</li>
            </ul>
          </nav>
          <div>
            <Button text={'Get Quote'} className={'primary'}/>
          </div>
        </header>
    )
}

export default Header;