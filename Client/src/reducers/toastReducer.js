import { v4 as uuidv4 } from 'uuid';

const initState = [
  // {
  //   id: uuidv4(),
  //   type: 'SUCCESS',
  //   title: 'Successfuly fetched data',
  //   message: 'Successfully received data',
  // },
  // {
  //   id: uuidv4(),
  //   type: 'INFO',
  //   title: 'Successfuly fetched data',
  //   message: 'Successfully received data',
  // },
  // {
  //   id: uuidv4(),
  //   type: 'WARNING',
  //   title: 'Successfuly fetched data',
  //   message: 'Successfully received data',
  // },
  // {
  //   id: uuidv4(),
  //   type: 'ERROR',
  //   title: 'Successfuly fetched data',
  //   message: 'Successfully received data',
  // },
];

function toastReducer(state, action) {
  switch (action.type) {
    case 'add_notification':
      return [...state, action.payload];
    case 'delete_notification':
      return state.filter((notification) => notification.id !== action.payload);
    default:
      throw new Error('Invalid action');
  }
}

export { initState };
export default toastReducer;
