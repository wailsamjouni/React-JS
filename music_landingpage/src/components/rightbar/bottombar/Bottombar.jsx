import React from 'react'
import './Bottombar.css'
import Music from '../musiccomponent/Music'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';


function Bottombar() {
    return (
        <div className='bottombar'>
            <div className="first">
                <span>For you</span>
                <ChevronRightOutlinedIcon style={{ fontSize: '30px', cursor: 'pointer' }} />
            </div>
            <div className="second">
                <span id='new'>new</span>
                <span>playlists</span>
                <span>episodes</span>
            </div>
            <div className="music">
                <Music
                    img='https://images.unsplash.com/photo-1643113231904-ea2af9b4ebcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    episode='12'
                    title='Gitanos'
                    singer='Gipsy King'

                />
                <Music
                    img='https://images.unsplash.com/photo-1587744797409-1c6384cb4550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
                    episode='16'
                    title='Dirty Diana'
                    singer='Michael Jackson'
                />
                <Music
                    img='https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    episode='4'
                    title='Entre dos aquas'
                    singer='Camaron de la Isla'
                />
                <Music
                    img='https://images.unsplash.com/photo-1465520873236-ce7c931bba93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'
                    episode='45'
                    title='Hotel California'
                    singer='Eagles'
                />
            </div>
            <div className="third">
                <div className='thirdleft'>
                    <span>Continue listening</span>
                    <ChevronRightOutlinedIcon style={{ fontSize: '30px', cursor: 'pointer' }} />
                </div>
                <div className='thirdleft'>
                    <span>Trending authors</span>
                    <ChevronRightOutlinedIcon style={{ fontSize: '30px', cursor: 'pointer' }} />
                </div>

            </div>
        </div>
    )
}

export default Bottombar