import React from 'react';

const Header = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

const Parts = ({ name, exercises }) => {
  return (
    <tr>
      <td>{name} have : </td>
      <td>{exercises} exercises</td>
    </tr>
  );
};

const Content = ({ content }) => {
  return (
    <div>
      <table>
        <tbody>
          {content.map((parts) => {
            return (
              <Parts
                key={parts.id}
                name={parts.name}
                exercises={parts.exercises}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Total = ({ total }) => {
  const sum = total.reduce((prevNum, currNum) => {
    return prevNum + currNum.exercises;
  }, 0);

  return (
    <div>
      <h3>Total exercises: {sum}</h3>
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      <Header title={courses.name} />
      <Content content={courses.parts} />
      <Total total={courses.parts} />
    </div>
  );
};

export default Course;
