import React, {useState} from 'react'
import './Mini_profile.css'
import popUpMiniProfile from '../popup_miniprofile/popup'

function Mini_profile() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div>
      <div class="mini-profile-container">
        <div className='profile'>
          <div class="personal-img">
              <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais" alt="">
              </img>
          </div>
          <div className='contact'>
            <div class="personal-details">
                <p>Name: Binh</p>
                <p>Role/Dept: Staff</p>
                <p>Rank: D</p>
                <p>Stats: 5</p>
            </div>
            <div className='showProfile'>
              <button>
                Show Profile
                {/* <i class="fa-solid fa-bars"></i>  */}
              </button>
              <popUpMiniProfile open={openProfile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mini_profile