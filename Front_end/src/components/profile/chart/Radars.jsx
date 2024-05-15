import React from 'react'
// import "./Radars.css"
import { Radar, 
	RadarChart, 
	PolarGrid, 
	PolarAngleAxis,
	Tooltip,
	Legend } from 'recharts';

const Radars = () => {
  const data = [
	{ name: 'Organizational skill', you: 875 },
	{ name: 'Technology', you: 1421 },
	{ name: 'Idea Contribution', you: 765 },
	{ name: 'Communication skill', you: 1269 },
	{ name: 'Product Optimization', you: 1542 },
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