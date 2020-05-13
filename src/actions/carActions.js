export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = feature => {
  console.log('add feature maybe');
  return {
    type: ADD_FEATURE,
    payload: feature,
  };
};

export const DELETE_FEATURE = 'DELETE_FEATURE';
export const deleteFeature = feature => {
  console.log('deleted feature maybe');
  return { type: DELETE_FEATURE, payload: feature };
};
