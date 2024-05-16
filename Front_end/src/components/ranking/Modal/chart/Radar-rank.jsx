import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Chart as ChartJs,
    RadialLinearScale,
    PointElement,
    Filler,
    Tooltip,
    Legend,
    LineElement
} from "chart.js"
import { Radar } from "react-chartjs-2"

ChartJs.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)



const Radar_rank = (props) => {
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
    const data = {
        labels: ['Organizational Skill', 'Technical Skill', 'Idea Contribution', 'Communication Skill', 'Product Optimization'],
        datasets: [
            {
                label: 'You',
                data: [owner.stats === undefined ? auth1.stats.organizational_skill : owner.stats.organizational_skill,
                        owner.stats === undefined ? auth1.stats.techical_skill : owner.stats.techical_skill, 
                        owner.stats === undefined ? auth1.stats.idea_contribution : owner.stats.idea_contribution, 
                        owner.stats === undefined ? auth1.stats.communication_skill : owner.stats.communication_skill, 
                        owner.stats === undefined ? auth1.stats.product_optimization : owner.stats.product_optimization],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
<<<<<<< HEAD
                borderColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
=======
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 3,
>>>>>>> 0c35f6e62e088642cc7270020ad2771a1eae04c6
            },
            {
                label: 'Your Competitor',
                data: [props.organizational_skill, props.techical_skill, props.idea_contribution, props.communication_skill, props.product_optimization],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
<<<<<<< HEAD
                borderColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 1,
            }
        ]
    }
    console.log(props)

    return <Radar data={data} height={400} width={500} />
=======
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 3,
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
                    display: false // Disables the angle lines
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
        
    }

    return <Radar data={data} options={options} height={500} width={600} />
>>>>>>> 0c35f6e62e088642cc7270020ad2771a1eae04c6
}

export default Radar_rank