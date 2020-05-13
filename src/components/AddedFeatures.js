import React from 'react';
import { connect } from 'react-redux';
import { deleteFeature } from '../actions/carActions';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log('hello', props.car.features);
  return (
    <div className='content'>
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type='1'>
          {props.car.features.map(item => {
            console.log('added features ', item.name);
            return (
              <AddedFeature
                key={item.id}
                feature={item}
                deleteFeature={props.deleteFeature}
                name={item.name}
              />
            );
          })}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
  };
};
export default connect(mapStateToProps, { deleteFeature })(AddedFeatures);
