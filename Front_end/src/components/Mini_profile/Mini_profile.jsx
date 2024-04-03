import React from 'react'
import './Mini_profile.css'
import popUpMiniProfile from '../popup_miniprofile/popup'

function Mini_profile() {
  return (
    <div>
      <div class="mini-profile-container">
        <div class="personal-img">
            <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais" alt="">
            </img>
        </div>
        <div class="personal-details">
            <div class="personal-name">Name: Binh</div>
            <div class="personal-role-dept">Role/Dept: Staff</div>
            <div class="personal-rank">Rank: D</div>
            <div class="personal-stats">Stats: 5</div>
        </div>
        <popUpMiniProfile />
      </div>
    </div>
  )
}

export default Mini_profile