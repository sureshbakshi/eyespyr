import './banner.scss';
// import Button from '../button/button';
import bg from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div class="banner-area bg-gray bg-bottom-center center-mobile top-pad-90 text-combo multi-heading text-light">
        <div class="item">
            <div class="box-table">
                <div class="box-cell">
                    <div class="container">
                        <div class="row">
                            <div class="double-items">
                                <div class="col-lg-7 info">
                                    <h2 class="wow fadeInDown" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInDown'}}>Applying Data Science  &amp; Techniques <span>with Modern Systems</span></h2>
                                    <a href="https://www.youtube.com/watch?v=owhuBrGIOsE" class="popup-youtube light video-play-button item-center relative">
                                        <i class="fa fa-play"></i>
                                    </a>
                                </div>
                                <div class="col-lg-5 thumb max-right wow fadeInDown" data-wow-duration="1s" style={{visibility: 'visible', animationDuration: '1s', animationName: 'fadeInDown'}}>
                                    <img src={bg} alt="Thumb"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Banner;