import React from 'react';

const PersonList = ({ personRefactor }) => {
  return (
    <p>
      {personRefactor.name} {personRefactor.number}
    </p>
  );
};

const Persons = ({ person, showFilter }) =>
  person
    .filter(
      (person) =>
        person.name.toLowerCase().includes(showFilter.toLowerCase()) ||
        person.number.toLowerCase().includes(showFilter.toLowerCase())
    )
    .map((person) => (
      <PersonList key={person.name} personRefactor={person} />
      // OR below without the Refactor
      // <p key={person.name}>
      //   {person.name} {person.number}
      // </p>
    ));
export default Persons;
