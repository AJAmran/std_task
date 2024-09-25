# SteadFast Courier Front-End Developer Task

## Table of Contents
- [Objective](#objective)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Tasks Breakdown](#tasks-breakdown)
  - [Task 1: Responsive Web Page](#task-1-responsive-web-page)
  - [Task 2: React Implementation](#task-2-react-implementation)
  - [Task 3: Problem Solving & Debugging](#task-3-problem-solving--debugging)
  - [Task 4: Git & Branching](#task-4-git--branching)
- [Challenges Faced](#challenges-faced)
- [How to Run the Project](#how-to-run-the-project)
- [Live Demo](#live-demo)

## Objective
The goal of this project is to evaluate my front-end development skills through a series of tasks. These tasks include creating a responsive web page using HTML, CSS, and Vanilla JavaScript, implementing the same design using React, fixing bugs in an e-commerce product filter, and showcasing clean Git practices.

## Technologies Used
- **HTML5**
- **CSS3 (Flexbox, Grid)**
- **Vanilla JavaScript**
- **React.js**
- **Tailwind CSS**
- **Git & GitHub**
- **Netlify (for live demo)**

## Project Setup
To run the project locally:
1. Clone this repository:
   ```bash
   git clone https://github.com/AJAmran/std_task.git
   ```
2. Navigate into the project directory:
   ```bash
   cd steadfast-task
   ```
3. For the React part, install the dependencies:
   ```bash
   npm install
   ```
4. Run the React app:
   ```bash
   npm start
   ```

## Tasks Breakdown

### Task 1: Responsive Web Page
- **Description**: Developed a mobile-first, responsive web page using only HTML5, CSS3, and Vanilla JavaScript.
- **Features**:
  - Responsive navigation bar
  - Hero section with a background image and text overlay
  - Grid layout for cards that rearranges on different screen sizes using media queries
  - Simple modal interaction with Vanilla JavaScript
- **Technologies Used**: HTML5, CSS3 (Flexbox, Grid), Vanilla JavaScript

### Task 2: React Implementation
- **Description**: Recreated the same responsive design using React.js and divided it into reusable components.
- **Components**:
  - `NavBar`
  - `Hero`
  - `CardGrid` (Card layout that adjusts responsively)
- **State Management**: Managed interactive elements like toggling a modal using React's `useState`.
- **Bonus**: Tailwind CSS was used for styling. Added smooth scrolling and CSS animations for transitions.

### Task 3: Problem Solving & Debugging
- **Bug**: Product list in the e-commerce filter feature wasn’t updating based on applied filters.
- **Solution**: Fixed the JavaScript logic to ensure dynamic updates as per the selected filters.
- **Bonus**: Implemented the filter functionality using React Hooks (`useState`, `useEffect`).

### Task 4: Git & Branching
- **GitHub**: All tasks were committed with clear and concise messages.
- **Branching**:
  - `feature/modal`: Implemented the modal for Task 1.
  - `feature/filter`: Fixed the filtering bug and added the React implementation.

## Challenges Faced
- Ensuring proper responsiveness across multiple screen sizes was challenging but handled using CSS Grid and Flexbox.
- Debugging the e-commerce filter logic required a careful understanding of state management in both Vanilla JS and React.

## How to Run the Project
1. Clone the repo and navigate into the project folder.
2. For the Vanilla JavaScript version, open the `index.html` file in your browser.
3. For the React version, follow the instructions in the [Project Setup](#project-setup) section above.

## Live Demo
Check out the live version of the project Vanilla HTML, CSS, JS : [Site](https://steadfasttask.netlify.app/).
React Version with Filter funtionlaity  [Site](https://stead-fast-second-task.netlify.app/).
