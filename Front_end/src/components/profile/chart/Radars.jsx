import React from 'react'
import { Radar, 
	RadarChart, 
	PolarGrid, 
	PolarAngleAxis,
	Area,
	Tooltip,
	Legend } from 'recharts';

const Radars = () => {
  const data = [
		{ name: 'Organizational skill', score: 875 },
		{ name: 'Technology', score: 1421 },
		{ name: 'Idea Contribution', score: 765 },
		{ name: 'Communication skill', score: 1269 },
		{ name: 'Product Optimization', score: 1542 },
	];

    return (
    	<RadarChart height={400} width={500} outerRadius="70%" data={data}>
			<PolarGrid />
			<PolarAngleAxis dataKey="name" fontSize={11} fontWeight={700} />
			<Radar dataKey="score" stroke="green" fill="green" fillOpacity={0.8} />
			<Tooltip />
			<Legend />
		</RadarChart>
    )
}

export default Radars