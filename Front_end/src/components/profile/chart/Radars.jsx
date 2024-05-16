<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';
=======

import React, { useEffect, useState } from 'react'
import {
	Chart as ChartJs,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
} from "chart.js"
import { Radar } from "react-chartjs-2"
import axios from 'axios';

ChartJs.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
)
>>>>>>> 0c35f6e62e088642cc7270020ad2771a1eae04c6

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
<<<<<<< HEAD
  	const data = [
	{ name: 'Organizational skill', you: owner.stats === undefined ? auth1.stats.organizational_skill : owner.stats.organizational_skill },
	{ name: 'Technology', you: owner.stats === undefined ? auth1.stats.techical_skill : owner.stats.techical_skill },
	{ name: 'Idea Contribution', you: owner.stats === undefined ? auth1.stats.idea_contribution : owner.stats.idea_contribution },
	{ name: 'Communication skill', you: owner.stats === undefined ? auth1.stats.communication_skill : owner.stats.communication_skill },
	{ name: 'Product Optimization', you: owner.stats === undefined ? auth1.stats.product_optimization : owner.stats.product_optimization },
]
=======
  	const data = {
		labels: [`Organizational Skill:${owner.stats === undefined ? auth1.stats.organizational_skill : owner.stats.organizational_skill}`, 
		`Technical Skill: ${owner.stats === undefined ? auth1.stats.techical_skill : owner.stats.techical_skill}`, 
		`Idea Contribution: ${owner.stats === undefined ? auth1.stats.idea_contribution : owner.stats.idea_contribution}`, 
		`Communication Skill: ${owner.stats === undefined ? auth1.stats.communication_skill : owner.stats.communication_skill}`, 
		`Product Optimization: ${owner.stats === undefined ? auth1.stats.product_optimization : owner.stats.product_optimization}`],
		datasets: [
			{
				label: "you",
				data: [owner.stats === undefined ? auth1.stats.organizational_skill : owner.stats.organizational_skill,
						owner.stats === undefined ? auth1.stats.techical_skill : owner.stats.techical_skill, 
						owner.stats === undefined ? auth1.stats.idea_contribution : owner.stats.idea_contribution, 
						owner.stats === undefined ? auth1.stats.communication_skill : owner.stats.communication_skill, 
						owner.stats === undefined ? auth1.stats.product_optimization : owner.stats.product_optimization],
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 3
			}
		]
	}

	const options = {
        scales: {
            r: {
                ticks: {
                    display: false,
                },
                angleLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.5)" // Lighter color for angle lines
                },
                grid: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.2)" // Lighter color for grid lines
                },
                pointLabels: {
                    color: "white" // Brighter color for point labels
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
        
    }

>>>>>>> 0c35f6e62e088642cc7270020ad2771a1eae04c6

    return (
    	<Radar options={options} data={data} />
    )
}

export default Radars