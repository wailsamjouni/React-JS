import React from 'react'
import './Profile.scss'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../components/posts/Posts'

function Profile() {

  const style = { cursor: 'pointer' };
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80" alt="" />
        <img src="https://images.unsplash.com/photo-1682832919425-6cddd681a283?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
      </div>
      <div className="profilecontainer">
        <div className="infos">
          <div className='left'>
            <a href="https://www.facebook.com/">
              <TwitterIcon fontSize='large' style={style} />
            </a>
            <a href="https://www.facebook.com/">
              <LinkedInIcon fontSize='large' style={style} />
            </a>
            <a href="https://www.facebook.com/">
              <PinterestIcon fontSize='large' style={style} />
            </a>
            <a href="https://www.facebook.com/">
              <FacebookTwoToneIcon fontSize='large' style={style} />
            </a>
          </div>
          <div className='middle'>
            <span>Wail Samjouni</span>
            <div className="info">
              <div className="item">
                <PlaceIcon style={style} />
                <span>GER</span>
              </div>
              <div className="item">
                <LanguageIcon style={style} />
                <span><a href="https://wail-samjouni.netlify.app/">wail.com</a></span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className='right'>
            <EmailOutlinedIcon style={style} />
            <MoreVertIcon style={style} />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile