import React from 'react'
import girl from './styles/images/Girl.jpg';
import fstar from './styles/images/star_24px.svg';
import hstar from './styles/images/star_half_24px.svg';
import nstar from './styles/images/star_border_24px.svg';
import arrow from './styles/images/arrow_back_24px_rounded.svg';
import downarrow from './styles/images/expand_more_24px.svg';
import SideBar from './sideBar';
import Recommendations from './components/Recommendations/Recommendations';

function Analysis() {
    return (
        <div className='analysis'>
            <SideBar/>
            <div className='firstrev'>

                <div className='review-header'>
                    <button><img src={arrow} alt='arrow' className='arrow'/></button>
                    <h1 className='header-txt'>Review Analysis</h1>
                </div>

                <div className='girl-card'>
                    <div className="susan-header">
                        <div className='susan'>
                            <img src={girl} className='susan-img' alt='girl-icon'/>
                            <div className='susan-info'>
                                <p className='susan-text'>Susan Carter</p>
                                <p className='susan-text'>Toronto, ON</p>
                            </div>
                        </div>
                        <div className='susan-rating'>
                            <p className='date'>09/04/2020</p>
                            <div className='rating'>
                                <img src={fstar} className='fstar' alt='fstar'/>
                                <img src={hstar} className='hstar' alt='fstar'/>
                                <img src={nstar} className='nstar' alt='fstar'/>
                                <img src={nstar} className='nstar' alt='fstar'/>
                                <img src={nstar} className='nstar' alt='fstar'/>
                            </div>
                            <div className='extend-container'>
                                <p className='extend'>...</p>
                            </div>
                        </div>
                    </div>
                    <p class='susan-review'>"Seems like there are a few kinks to be worked out at this location. Food delivery was a bit rushed however all dishes were cold and tacos were brought out before appetizers. Bartenders were quite attentive but again, the margaritas were unbalanced with too much lime and no salt rim. \n\nOverall disappointed given the college location is consistently superb. I'd recommend sticking with that location."</p>
                </div>
                <div className='see-more-container'>
                    <button className='see-more'><p>See more</p></button>
                    <button><img className='down-arrow' alt='down arrow'src={downarrow}/></button>
                </div>
                <Recommendations/>
            </div>
        </div>
    )
}

export default Analysis
