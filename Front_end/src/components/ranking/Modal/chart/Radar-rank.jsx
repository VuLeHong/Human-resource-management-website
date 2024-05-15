import React from "react";
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

const data = {
    labels: ['Organizational Skill', 'Technical Skill', 'Idea Contribution', 'Communication Skill', 'Product Optimization'],
    datasets: [
        {
            label: 'You',
            data: [875, 1421, 765, 1269, 1542],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1,
        },
        {
            label: 'Your Competitor',
            data: [800, 1252, 650, 1058, 1337],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 1,
        }
    ]
}

const Radar_rank = () => {
    return <Radar data={data} height={400} width={500} />
}

export default Radar_rank