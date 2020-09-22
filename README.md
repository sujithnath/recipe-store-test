## Notes

### Application Setup

- yarn install
- yarn dev

### Project Link

- localhost:3000

### Application Test

- yarn test

## Agenda

- To complete the task and requirements for the test provided by Marley Spoon

## Requirements Checklist

**Task Requirements**

- [x] Create a sample web application that uses the Contentful API to fetch data
- [x] The application MUST be coded in React + Typescript
- [x] SSR with Next.js
- [x] There should be 2 views (different URL path for each one):
      A list view of all the recipes
      A detail view of a recipe
- [x] When clicking on a recipe on the list view, you should then show the detailed view
- [x] The application should be as production-ready as possible

**Technical Requirement**

- [x] ReactJS
- [x] Redux (could have used context as well)
- [x] Responsive Web Design
- [x] Styled components
- [x] Instructions on how to run the project
- [x] Test cases
- [x] SSR with Next.js

## Features I have used

**Technical Features**

- React-redux with Hooks
- Scalable architecture (separation of Presentational layer and Container layer)
- GRID for layouts
- Styled components for styling
- Jest + React-testing-lib for testing (Covered basic testing, will add more)

## Important Note

-

### About Architecture, Containers, Components (Presentational layer)

- I could have used ANTD or any other UI library. But felt this wont be a right approach for a test
- Presentation layer will also have its own state, but ideally its limited locally
- Containers are only dealing with global state, better separation of concern :).

### About Store

- I have used React-redux as a global management.
- I could have also used useContext + useReducer as well.
- Keeping in mind that Redux is a global store where to only store the data which is used by different components.
- Action, reducers and its relative constants are grouped under Store
- Operation is the only file that can be interacted to maintain the store. It helps in dispatching as well maintaining the store

### Responsiveness

- Configured for all devices including Mobile, Tablet and Desktop. (Basic UI)
- This is achieved by using GRID, also helps in reducing number of media queries with performance.
- Using grid, I could also control the placement of elements in layout. Its easy :)
- Also as a performance booster, with the help of webpack I could extract or separate media queries from the page and load only for mobile device and desktop independently. improves TTI :)

### Testing

- Testing strategy, I have used React-lib with jest.
- I prefer to write unit test cases more to achieve a faster result and then at the end implement integration test.
- I would always follow bottom to top approach testing pattern, where unit testing > integration testing.

### Short coming of the designs

### What I could have done more

- Cleaning up the APP and validations
- Semantic structure
- Error Boundaries to sustain the APP even if the error exist.
- More test cases.
- loader with spinner
- After submission I will keep editing the file
