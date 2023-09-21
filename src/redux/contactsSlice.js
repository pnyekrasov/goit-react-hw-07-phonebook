import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: startContacts,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  [deleteContact.pending](state) {
    state.isLoading = true;
  },
  [deleteContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    return state.filter(contact => contact.id !== action.payload);
  },
  [deleteContact.rejected](state, action) {
    state.isLoading = false;
    state.error = action.payload;
  },
  // resetContacts(state, action) {
  //         return startContacts;
  //       },
});

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: startContacts,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(values) {
//         return {
//           payload: {
//             id: nanoid(),
//             ...values,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//     resetContacts(state, action) {
//       return startContacts;
//     },
//   },
// });
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

// export const { addContact, deleteContact, resetContacts } =
//   contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
