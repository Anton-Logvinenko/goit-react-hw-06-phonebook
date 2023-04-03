import React from 'react';
import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import{getContactsState, getFiltersState} from '../../redux/selectors'


function ContactList() {
  const contacts = useSelector(getContactsState);
console.log('contacts', contacts)
  const nameFilter= useSelector(getFiltersState);
  
  const dispatch = useDispatch();

  
  // Фильтрация
  const getVisibleContacts = () => {
    const normalaizeFilter = nameFilter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalaizeFilter)
    );
  };
  // отфильтрованный список для рендера
   const visibleContacts = getVisibleContacts()
   console.log('visibleContacts',visibleContacts)

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({id, name, number }) => (
        <li key={id}>
          <p className={css.text}>
            {name} : {number}
          </p>
          <button
            className={css.btnDelete}
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export { ContactList };
