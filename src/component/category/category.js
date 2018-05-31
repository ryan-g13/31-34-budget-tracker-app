import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';

import ExpenseForm from './../expense-form/expense-form';
import Expense from './../expense/expense';
import * as expenseActions from '../../action/expense';

class CategoryItem extends React.Component {
  render() {
    const { 
      expenses,
      expenseCreate,
      category,
      categoryDestroy,
      categoryUpdate,
    } = this.props;

    const categoryExpenses = expenses[category.id];
    return (
      <div className='categoryItem' key={category.id}>
        <h1> { category.name } </h1>
        <h2> { category.budget } </h2>
        <button onClick={() => categoryDestroy(category)}> Delete </button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <ExpenseForm category={category} onComplete={expenseCreate} />
        <div className='expense-list'> 
          { categoryExpenses.map(expense => <Expense expense={expense} key={expense.id} />)}
        </div>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object,
  // key: PropTypes.number, id?
  expenses: PropTypes.object,
  expenseCreate: PropTypes.func,
  categoryDestroy: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: data => dispatch(expenseActions.createAction(data)), 
    categoryDestroy: data => dispatch(categoryActions.destroy(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
