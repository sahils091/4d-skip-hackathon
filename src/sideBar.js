import React from 'react';
import settings from './styles/images/settings_24px.svg'
import dashboard from './styles/images/dashboard_24px.svg'
import folder from './styles/images/folder_open_24px.svg'
import person from './styles/images/people_outline_24px.svg'
import logo from './styles/images/Group 96.svg'
import josh from './styles/images/pexels-matt-hardy-1680317.jpg'


function sideBar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <img src={logo} className='sidebar__logo' alt=''/>
                <h1 className='sidebar__brand'>rview</h1> 
            </div>
            <div className='sidebar__user'>
                <img src={josh} className='sidebar__josh' alt=''/>
                <h1 className='sidebar__name'>Hello Josh!</h1>
                <p className='sidebar__greeting'>It's good to see you again.</p>
            </div>
            <div className='sidebar__nav'>
                <div className='sidebar__list'>
                    <img src={dashboard} className='sideBar__nav-img' alt=''/><button><p className='sidebar__text'>DashBoard</p></button>
                </div>
                <div className='sidebar__list'>
                    <img src={person} className='sideBar__nav-img'alt=''/><button><p className='sidebar__text'>Team</p></button>
                </div>
                <div className='sidebar__list'>
                    <img src={folder} className='sideBar__nav-img'alt=''/><button><p className='sidebar__text'>Resources</p></button>
                </div>
                <div className='sidebar__list'>
                    <img src={settings} className='sideBar__nav-img'alt=''/><button><p className='sidebar__text'>Settings</p></button>
                </div>
            </div>
            <div className='sideBar__logout-container'>
                <button className='sideBar__logout'>
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default sideBar
