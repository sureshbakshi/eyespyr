import './header.scss'
import Button from '../button/button';
const Header = () => {
    return (
        <header className="App-header">
            <div className='logo'>
                logo
                {/* <img/> */}
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