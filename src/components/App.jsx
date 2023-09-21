import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsBook } from './App.staled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import {} from './ContactList/ContactList.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // return (
  //   <Layout>
  //     <AppBar />
  //     <TaskForm />
  //     {isLoading && !error && <b>Request in progress...</b>}
  //     <TaskList />
  //   </Layout>
  // );

  return (
    <ContactsBook>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </ContactsBook>
  );
};
