import React from 'react'
import './RightBar.scss'

function RightBar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.unsplash.com/photo-1682428109898-c8e303373754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
              <span>Wail Samjouni</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://plus.unsplash.com/premium_photo-1675074446323-7d464b551c48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
              <span>Marc Billie</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="item">
          <span>Latest activities</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://plus.unsplash.com/premium_photo-1664303478572-14c614a66a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="" />
              <p>
                <span>Estubian</span> change picture
              </p>
            </div>
              <span>1 h ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.unsplash.com/photo-1620677368158-32b1293fac36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
              <p>
                <span>Otman Toul</span> change picture
              </p>
            </div>
              <span>now</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.unsplash.com/photo-1682282298314-0baf5193c6ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
              <p>
                <span>Carmen</span> change picture
              </p>
            </div>
              <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.unsplash.com/photo-1682175904468-1958501d39be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80" alt="" />
              <p>
                <span>Sebastian</span> change picture
              </p>
            </div>
              <span>10 min ago</span>
          </div>
        </div>
        {/*  */}
        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.unsplash.com/photo-1682339011878-c8bed2a7dccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
              <div className="online"></div>
              <span>Core</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.unsplash.com/photo-1682397125309-56077754235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
              <div className="online"></div>
              <span>Max</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.unsplash.com/photo-1682417698042-244cd8ab53dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
              <div className="online"></div>
              <span>Nina</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img src="https://images.unsplash.com/photo-1682406749096-b2bb00e1d8f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
              <div className="online"></div>
              <span>Otman</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default RightBar