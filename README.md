# NewsNetGoal

### visit website : https://news-net-goal.vercel.app/
## Overview

This project is a Next.js website that provides news articles and information about football (soccer). It utilizes the [NewsAPI](https://saurav.tech/NewsAPI/) for fetching top headlines based on a specified category and the [Football Data API](https://www.football-data.org/) for retrieving football match data.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer motion](https://www.framer.com/motion/)

## APIs Used

1. **NewsAPI:**
   - Endpoint: `https://saurav.tech/NewsAPI/top-headlines/category/${keyword}/in.json`
   - Description: This API is used to fetch top headlines based on a specified category. It provides the latest news articles, and the category can be customized in the application.

2. **Football Data API:**
   - Endpoint: `https://api.football-data.org/v4/matches`
   - Description: The Football Data API is utilized to retrieve information about football matches. It provides data such as match fixtures, scores, and other relevant details.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mehdybenromdhane/newsNetGoal.git
   cd newsNetGoal
    ``` 
2. Install dependencies:
```
npm install
```

3. Create a .env file and set your API keys

4. Running the Application:
  Run the development server:
```
npm run dev
```

Visit http://localhost:3000 in your browser to see the application.



### License
This project is licensed under the MIT License.


## Author

- [@mehdy](https://github.com/mehdybenromdhane)

