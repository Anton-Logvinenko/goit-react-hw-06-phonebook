import React from 'react';
import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from '../../redux/filterSlice';
import{getFiltersState} from '../../redux/selectors'

function Filter() {
  const dispatch = useDispatch();
  const nameValue = useSelector(getFiltersState);
 
// сохранение имени из  фильтра-инпута state
const handelChange = e => {
    dispatch(contactsFilter(e.target.value));
  };

  return (
    <lable className={css.filterLable}>
      Find contacts
      <input
        className={css.filterInput}
        type="text"
        value={nameValue}
        onChange={handelChange}
      />
    </lable>
  );
}

export { Filter };

