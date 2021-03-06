import Course from './components/Course';

const App = ({ courses }) => {
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <div>
        {courses.map((course) => (
          <Course key={course.id} courses={course} />
        ))}
      </div>
    </div>
  );
};

export default App;
