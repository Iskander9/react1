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
const stories = [
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
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <hr />

      <ul>
        {stories.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span> Author: {item.author}</span>
              <span> Comments: {item.num_comments}</span>
              <span> Points: {item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


/* Step 7 – Reflection
  - map(): Essential for turning data arrays into visual UI elements.
  - objectID: Best key because it's a permanent, unique ID from the database.
export default App ;*/
