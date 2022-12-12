export const addNotification = (payload) => ({
  type: 'add_notification',
  payload,
});

export const deleteNotification = (payload) => ({
  type: 'delete_notification',
  payload,
});
