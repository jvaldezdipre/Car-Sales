import React from 'react';
import { connect } from 'react-redux';
import { deleteFeature } from '../actions/carActions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.deleteFeature(props.feature)}
        className='button'
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { deleteFeature })(AddedFeature);
