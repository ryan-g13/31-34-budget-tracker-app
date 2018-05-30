import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils';

const defaultState = {
  name: '',
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <form onSubmit={this.handleSubmit} className='category-form'>
        <input
          type='text'
          name='name'
          placeholder='Category Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
          type='number'
          name='budget'
          placeholder='Enter Budget $'
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText} Category</button>
      
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};

export default CategoryForm;
