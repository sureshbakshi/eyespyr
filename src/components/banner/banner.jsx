import './banner.scss';
import Button from '../button/button';
const Banner = () => {
    return (
        <div className='banner'>
            <div className='left'>
                <p>Are your Ready?</p>
                <p className='banner-txt'>Protect Your Business with CCTV</p>
                <Button text={'Register'} className={'secondary'} />
            </div>
            <div className='right'>
                <img />
            </div>

        </div>
    )
}
export default Banner;