import React from 'react'
import { Chart as ChartJs, 
          CategoryScale, 
          LinearScale, 
          PointElement, 
          LineElement, 
          Title, 
          Tooltip, 
          Legend 
} from "chart.js";
import { Line } from "react-chartjs-2";
import user from '../mockData';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend:{
      position: 'top',
    },
    title: {
      display: true,
      text: "Ranking Revolution",
    },
  },
};

const labels = [2019, 2020, 2021, 2022, 2023];

export const data = {
  labels,
  datasets:[
    
  ]
}