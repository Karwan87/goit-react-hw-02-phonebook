import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name.trim(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
    }));
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <div>
        <h1>Contact Book</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
