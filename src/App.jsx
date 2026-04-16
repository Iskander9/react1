const courseTitle = "React Fundamentals";

function App() {
 
  const studentName = "Iskander";

  const student = {
    name: "Iskander",
    age: 21,
    track: "adv web dev"
  };


  function sayHello() {
    return `Hello ${studentName}, welcome to React!`;
  }

  return (
    <div>
      <h1>My First React App</h1>

      <p>Student name: {studentName}</p>

      <p>Welcome to {courseTitle}, {studentName}!</p>

      <label htmlFor="nameInput">Enter your name:</label>
      <input type="text" id="nameInput" />

      <h2>Student Info</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>

      {/* Reflection Answers */}
      {/*
        One thing I understand well: everything.

        One mistake I made and fixed: there's none.
      */}
    </div>
  );
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => 
  
    <div>
      <Header/>
      <Search/>
      <hr />
      <List />
    </div>
  ;

const Header = () => 
<h1>My Hacker Stories</h1>

const  Search = () => {
  const handleChange = (event) =>{
    console.log(event)
    console.log(event.target.value);
  }
  
  return (
  <>
  <label classname="search" htmlFor="search">search:</label>
  <input id="search" type="text" onChange={handleChange}/> </>
  )
} 

const List = () => 
    <ul>
      {list.map( (item) => {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>  {item.author}</span>
            <span>  {item.num_comments}</span>
            <span>  {item.points}</span>
          </li>
        );
      })}
    </ul>
  ;

/* Step 7 – Reflection
  - map(): Essential for turning data arrays into visual UI elements.
  - objectID: Best key because it's a permanent, unique ID from the database.
export default App ;*/
/* session 3 : App now acts as the main container that organizes the structure of the application by rendering Header, Search, and List.
List is responsible for looping through the stories array and displaying each story as a list item.

Search renders the search label and input field */ 

export default App ;
