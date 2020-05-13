import { ADD_FEATURE, DELETE_FEATURE } from '../actions/carActions';

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
  ],
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },

        //Removes the object that was clicked on
        additionalFeatures: state.additionalFeatures.filter(item => {
          return item !== action.payload;
        }),
      };

    case DELETE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            feature => feature !== action.payload
          ),
        },

        //Adds the object that was removed from the added features
        additionalFeatures: [...state.additionalFeatures, action.payload],
      };

    default:
      return state;
  }
};
