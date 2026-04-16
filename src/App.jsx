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
