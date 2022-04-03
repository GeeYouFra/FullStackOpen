// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.courseName}</h1>
//     </div>
//   );
// };
// OR
const Header = (props) => props.courseName;

const Content = (props) => {
  return (
    <div>
      {props.parts.map((parts, index) => (
        <div key={index}>
          <p>
            {parts.name} have {parts.exercises} exercises
          </p>
        </div>
      ))}
    </div>
  );
};

const Total = (props) => {
  const totalExercises = props.sum.map((t) => t.exercises);
  // const reducer = (previousValue, currentValue) => previousValue + currentValue;
  // const sum = totalexercises.reduce(reducer);
  // OR
  const sum = totalExercises.reduce(
    (prevValue, currValue) => prevValue + currValue
  );
  return <p>Total exercises: {sum}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts} />
    </div>
  );
};

export default App;
