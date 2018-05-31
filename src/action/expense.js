import uuid from 'uuid/v4';

const createAction = ({ content, categoryId, price }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    content,
    categoryId,
    price,
    id: uuid(),
  },
});

const updateAction = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

const destroyAction = expense => ({
  type: 'EXPENSE_DESTROY',
  payload: expense, 
});

export { createAction, updateAction, destroyAction };
