const user = [
  { //1
    "username": "vu",
    "password": "1",
	  "fullName": "Le Hong Vu",
	  "isMale": true,
	  "role": "leader",
	  "rank": "B",
    "stats": {
        "organizational_skill": 5,
        "techical_skill": 7,
        "idea_contribution": 10,
        "communication_skill": 9,
        "product_optimization": 10
    },
	  "tasks": [
          {
            "content": "Watch Youtube",
            "rank": "E",
            "isdone": true
          },
          {
            "content": "Play LOL",
            "rank": "D",
            "isdone": true
          },
          {
            "content": "Develope web",
            "rank": "B",
            "isdone": false
          }
    ]
  },
  //#################################
  { //2
    "username": "John", 
    "password": "secret", 
    "truename": "John",
    "ismale": true, 
    "role": "Manager", 
    "rank": "A", 
    "stats": {
      "organizational_skill": 100, 
      "techical_skill": 75, 
      "idea_contribution": 95, 
      "communication_skill": 100, 
      "product_optimization": 88
    },
    "tasks": [ 
      {
        "content": "Study App", 
        "rank": "A", 
        "isdone": true 
      }, 
      {
        "content": "Gym Web", 
        "rank": "B", 
        "isdone": true
      }, 
      { 
        "content": "Web design",
        "rank": "B", 
        "isdone": false
      } 
    ],
  },
  //#################################
  { //3
    "username": "Marry", 
    "password": "secure123", 
    "truename": "Marry",
    "ismale": false, 
    "role": "Marketing Specialist", 
    "rank": "B", 
    "stats": {
      "organizational_skill": 80, 
      "techical_skill": 65, 
      "idea_contribution": 95, 
      "communication_skill": 100, 
      "product_optimization": 88
    },
    "tasks": [ 
      {
        "content": "Design Card", 
        "rank": "A", 
        "isdone": true 
      }, 
      {
        "content": "Customer`s Event", 
        "rank": "B", 
        "isdone": true
      }, 
      { 
        "content": "Seminar",
        "rank": "B", 
        "isdone": false
      } 
    ]
  },
  //#################################
  { //4
    "username": "Emilyjones", 
    "password": "Her123", 
    "truename": "Emilyjones",
    "ismale": false, 
    "role": "Designer", 
    "rank": "C", 
    "stats": {
      "organizational_skill": 10, 
      "techical_skill": 4, 
      "idea_contribution": 5, 
      "communication_skill": 30, 
      "product_optimization": 2
    },
    "tasks": [ 
      {
        "content": "Card design", 
        "rank": "D", 
        "isdone": true 
      }, 
      {
        "content": "Seminar", 
        "rank": "D", 
        "isdone": true
      }, 
      { 
        "content": "Web design",
        "rank": "C", 
        "isdone": false
      } 
    ]
  },
  //#################################
  { //5
    "username": "Alex", 
    "password": "secure321", 
    "truename": "Alex",
    "ismale": true, 
    "role": "Analyst", 
    "rank": "B", 
    "stats": {
      "organizational_skill": 93, 
      "techical_skill": 42, 
      "idea_contribution": 30, 
      "communication_skill": 75, 
      "product_optimization": 90
    },
    "tasks": [ 
      {
        "content": "Study App", 
        "rank": "A", 
        "isdone": true 
      }, 
      {
        "content": "Gym Web", 
        "rank": "B", 
        "isdone": true
      }, 
      { 
        "content": "Web design",
        "rank": "B", 
        "isdone": false
      } 
    ]
  },
  //#################################
  { //6
    "username": "SarahSmith", 
    "password": "secure456", 
    "truename": "SarahSmith",
    "ismale": false, 
    "role": "BA", 
    "rank": "S", 
    "stats": {
      "organizational_skill": 100, 
      "techical_skill": 95, 
      "idea_contribution": 95, 
      "communication_skill": 100, 
      "product_optimization": 99
    },
    "tasks": [ 
      {
        "content": "Music App", 
        "rank": "A", 
        "isdone": true 
      }, 
      {
        "content": "Coding Forum", 
        "rank": "A", 
        "isdone": true
      }, 
      { 
      "content": "School web",
      "rank": "A", 
      "isdone": true
      } 
    ]
  },
  //#################################
  { //7
    "username": "Markwilson", 
    "password": "secret567", 
    "truename": "Markwilson",
    "ismale": true, 
    "role": "Data Scientist", 
    "rank": "A", 
    "stats": {
      "organizational_skill": 100, 
      "techical_skill": 95, 
      "idea_contribution": 55, 
      "communication_skill": 30, 
      "product_optimization": 90
    },
    "tasks": [
      {
        "content": "Marketing Analyst App", 
        "rank": "A", 
        "isdone": true 
      }, 
      {
        "content": "E-book", 
        "rank": "B", 
        "isdone": true
      }, 
      { 
        "content": "Automatic robot",
        "rank": "S", 
        "isdone": false
      } 
    ]
  },
  //#################################
  { //8
    "username": "LisaSmith",
    "password": "secret000", 
    "truename": "Lisa Smith",
    "ismale": false, 
    "role": "Content Writer", 
    "rank": "E", 
    "stats": {
      "organizational_skill": 1, 
      "techical_skill": 1, 
      "idea_contribution": 1, 
      "communication_skill": 1, 
      "product_optimization": 1
    },
    "tasks": [ 
      {
        "content": "Web got 30k likes", 
        "rank": "E", 
        "isdone": false 
      }, 
      {
        "content": "+ 5000 subscribers", 
        "rank": "C", 
        "isdone": false
      }, 
      { 
        "content": "New idea",
        "rank": "B", 
        "isdone": false
      } 
    ]
  },
  //#################################
  { //9
    "username": "michaelbrown", 
    "password": "secret", 
    "truename": "Michael Brown",
    "ismale": true, 
    "role": "Financial Analyst", 
    "rank": "S", 
    "stats": {
      "organizational_skill": 100, 
      "techical_skill": 100,
      "idea_contribution": 100, 
      "communication_skill": 100, 
      "product_optimization": 100
    },
    "tasks": [ 
      {
        "content": "Study App", 
        "rank": "A", 
        "isdone": true 
      }, 
      {
        "content": "Financial Forecase Terminater", 
        "rank": "S", 
        "isdone": true
      }, 
      { 
        "content": " + 10k subscribers",
        "rank": "S", 
        "isdone": true
      } 
    ]
  },
  //#################################
  { //10
    "username": "jennifermiller", 
    "password": "secure567", 
    "truename": "Jennifer Miller",
    "ismale": false, 
    "role": "Marketing Manager", 
    "rank": "A", 
    "stats": {
      "organizational_skill": 100, 
      "techical_skill": 85, 
      "idea_contribution": 93, 
      "communication_skill": 100, 
      "product_optimization": 60
    },
    "tasks": [ 
      {
        "content": "Running Time App", 
        "rank": "A", 
        "isdone": true 
      }, 
      {
        "content": "Calories device", 
        "rank": "S", 
        "isdone": true
      }, 
      { 
        "content": "AI Fitness Food App",
        "rank": "A", 
        "isdone": false
      } 
    ]
  },
  //#################################
  { //11
    "username": "davidwilson", 
    "password": "Class@234", 
    "truename": "David Wilson",
    "ismale": true, 
    "role": "Software Engineer", 
    "rank": "F", 
    "stats": {
      "organizational_skill": 5, 
      "techical_skill": 5, 
      "idea_contribution": 25, 
      "communication_skill": 10, 
      "product_optimization": 8
    },
    "tasks": [ 
      {
        "content": "", 
        "rank": "A", 
        "isdone": true
      }
    ]
  },
  //#################################
  { //12
    "username": "monicajohnson", 
    "password": "99op", 
    "truename": "Monica Johnson",
    "ismale": false, 
    "role": "HR Specialist", 
    "rank": "A", 
    "stats": {
      "organizational_skill": 100, 
      "techical_skill": 70, 
      "idea_contribution": 95, 
      "communication_skill": 100, 
      "product_optimization": 60
    },
    "tasks": [ 
      {
        "content": "Find 10 software engineer", 
        "rank": "A", 
        "isdone": true 
      }, 
      {
        "content": "Fire 9 employees", 
        "rank": "A", 
        "isdone": true
      }, 
      { 
        "content": "Find internships",
        "rank": "C", 
        "isdone": false
      } 
    ]
  },
  //#################################
  { //13
    "username": "kevinmartinez", 
    "password": "securepass789", 
    "truename": "Kevin Martinez",
    "ismale": true, 
    "role": "Java Intership", 
    "rank": "E", 
    "stats": {
      "organizational_skill": 1, 
      "techical_skill": 1, 
      "idea_contribution": 1, 
      "communication_skill": 1, 
      "product_optimization": 2
    },
    "tasks": [ 
      {
        "content": "Study App", 
        "rank": "E", 
        "isdone": false 
      }, 
      {
        "content": "Gym Web", 
        "rank": "E", 
        "isdone": false
      }, 
      { 
        "content": "Web design",
        "rank": "E", 
        "isdone": false
      } 
    ]
  },
  //#################################
  { //14
    "username": "laurasmith", 
    "password": "secret378", 
    "truename": "Laura Smith",
    "ismale": false, 
    "role": "Graphic Designer", 
    "rank": "S", 
    "stats":  {
      "organizational_skill": 100, 
      "techical_skill": 100, 
      "idea_contribution": 95, 
      "communication_skill": 100, 
      "product_optimization": 95
    },
    "tasks": [ 
      {
        "content": "CEO seminar", 
        "rank": "A", 
        "isdone": true 
      }, 
      {
        "content": "Hackathon", 
        "rank": "B", 
        "isdone": true
      }, 
      { 
        "content": "Game characters",
        "rank": "A", 
        "isdone": false
      } 
    ]
  },
  //#################################
  { //15
    "username": "chrismiller", 
    "password": "secret123", 
    "truename": "Chris Miller",
    "ismale": true, 
    "role": "Sales Representative", 
    "rank": "C", 
    "stats": {
      "organizational_skill": 40, 
      "techical_skill": 50, 
      "idea_contribution": 60, 
      "communication_skill": 60, 
      "product_optimization": 75
    },
    "tasks": [ 
      {
        "content": " Sell 500 products/day", 
        "rank": "B", 
        "isdone": false 
      }, 
      {
        "content": "Introduce for 1k customers", 
        "rank": "C", 
        "isdone": true
      }, 
      { 
      "content": "Sell 500 products/year",
      "rank": "C", 
      "isdone": false
      } 
    ]
  }
];

//Logic sap xep thu tu hang dua vao chi so diem

// const statsMap = user.map(employee => ({
//   "organizational_skill": employee.stats.organizational_skill, 
//   "techical_skill": employee.stats.techical_skill,
//   "idea_contribution": employee.stats.idea_contribution,
//   "communication_skill": employee.stats.communication_skill,
//   "product_optimization": employee.stats.product_optimization
// }))

// const sumArr = []
// statsMap.forEach(obj => {
//   let objSum = 0
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       objSum += obj[key]
//     }
//   }
//   sumArr.push(objSum)
// })

// for (let i = 0; i < sumArr.length; i++) {
//   user[i].score = (user[i].score || 0) + sumArr[i]
// }
// user.sort((a, b) => b.score - a.score)

// console.log(user)

export default user;