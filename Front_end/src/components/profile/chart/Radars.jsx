import React, { useEffect, useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const Radars = () => {
	const auth = localStorage.getItem("user");
  	const auth1 = JSON.parse(auth);
	const [owner, setOwner] = useState({});
   	useEffect(() => {
    axios.post('http://localhost:5000/get', {user_id: auth1.user_id}) 
    .then(result => {
            setOwner(result.data)
            console.log(owner.stats)
    })
    .catch(err => console.log(err))
  	},[])
  	const data = [
	{ name: 'Organizational skill', you: owner.stats === undefined ? auth1.stats.organizational_skill : owner.stats.organizational_skill },
	{ name: 'Technology', you: owner.stats === undefined ? auth1.stats.techical_skill : owner.stats.techical_skill },
	{ name: 'Idea Contribution', you: owner.stats === undefined ? auth1.stats.idea_contribution : owner.stats.idea_contribution },
	{ name: 'Communication skill', you: owner.stats === undefined ? auth1.stats.communication_skill : owner.stats.communication_skill },
	{ name: 'Product Optimization', you: owner.stats === undefined ? auth1.stats.product_optimization : owner.stats.product_optimization },
]

    return (
    	<RadarChart height={400} width={500} outerRadius="70%" data={data}>
			<PolarGrid />
			<PolarAngleAxis dataKey="name" fontSize={11} fontWeight={700} />
			<Radar dataKey="you" stroke="green" fill="green" fillOpacity={0.8} />
			<Tooltip wrapperStyle={{width: 150, height: 30, fontSize: 12}} />
			<Legend />
		</RadarChart>
    )
}

export default Radars