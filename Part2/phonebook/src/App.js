import { useState } from 'react';
import HeaderTitle from './components/Header';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = (props) => {
  const [persons, setPersons] = useState(props.personsArray);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [showFilter, setShowFilter] = useState('');
  const mainTitle = 'Phonebook';
  const addTitle = 'Add a new contact';
  const numberTitle = 'Numbers';

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: number,
    };
    persons.some((person) =>
      person.name === newName
        ? alert(`Sorry, ${newName} is already added to phonebook`)
        : setPersons(persons.concat(nameObject))
    );
    setNewName('');
    setNumber('');
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNumber(event.target.value);
  const handleFilterChange = (event) => {
    setShowFilter(event.target.value);
  };

  return (
    <div>
      <HeaderTitle text={mainTitle} />
      <Filter showFilter={showFilter} handleChange={handleFilterChange} />

      <HeaderTitle text={addTitle} />
      <PersonForm
        addPerson={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={number}
        handleNumberChange={handleNumberChange}
      />

      <HeaderTitle text={numberTitle} />
      <Persons person={persons} showFilter={showFilter} />
    </div>
  );
};

export default App;
