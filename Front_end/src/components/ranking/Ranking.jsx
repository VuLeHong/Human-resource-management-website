import React from 'react'
import user from '../profile/mockData'
import './Ranking.css'

const Ranking = () => {

  const avatar = "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais";
  
  const statsMap = user.map(employee => ({
    "organizational_skill": employee.stats.organizational_skill, 
    "techical_skill": employee.stats.techical_skill,
    "idea_contribution": employee.stats.idea_contribution,
    "communication_skill": employee.stats.communication_skill,
    "product_optimization": employee.stats.product_optimization
  }))

  const sumArr = []
  statsMap.forEach(obj => {
    let objSum = 0
    for(const key in obj) {
      if (obj.hasOwnProperty(key)) {
        objSum += obj[key]
      }
    }
    sumArr.push(objSum)
  })

  // console.log(sumArr)

  return (
    <div className='ranking'>
        <div className="title">
          <h1>Hello {user[0].fullName}, here is your total stats!</h1>
        </div>
        <div className="rank">
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="rank">

          </div>
          <div className="name">
            <h3>{user[0].fullName}</h3>
          </div>
          <div className="total">
            <h5>{sumArr[0]}</h5>
          </div>
        </div>
        <div className='ladderboard'>

        </div>
    </div>
  )
}

export default Ranking
