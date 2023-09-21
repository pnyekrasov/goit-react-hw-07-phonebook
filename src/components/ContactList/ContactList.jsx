import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { resetContacts } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled';
// import { ButtonReset, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {/* <ButtonReset
        type="button"
        onClick={() => {
          if (
            window.confirm(
              'Are you sure you want to return Contacts to their starting positions?'
            )
          ) {
            dispatch(resetContacts(contacts));
          }
        }}
      >
        Reset
      </ButtonReset> */}
      <p>Number of contacts:&nbsp;{contacts.length}</p>
      <List>
        {visibleContacts.map(item => (
          <ListItem key={item.id}>
            <ContactItem {...item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
