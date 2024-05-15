import React from 'react'
import { Radar, RadarChart, PolarGrid, 
	PolarAngleAxis } from 'recharts';

const Radars = () => {
  const data = [
		{ name: 'Organizational skill', x: 875 },
		{ name: 'Technology', x: 1421 },
		{ name: 'Idea Contribution', x: 765 },
		{ name: 'Communication skill', x: 1269 },
		{ name: 'Product Optimization', x: 1542 },
	];

    return (
      <RadarChart height={400} width={500} outerRadius="70%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="x" />
        <Radar dataKey="x" stroke="green" fill="green" name='name' fillOpacity={0.5} />
		  </RadarChart>
    )
}

export default Radars