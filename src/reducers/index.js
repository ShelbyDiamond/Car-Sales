// Export the initialState and the reducer function

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  carStore: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
}

const clunckerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      console.log(state.car)
      if (state.car.features.find(feature => feature.id === action.payload.id))
        return {
          ...state,
          car: {
            ...state.car,
            price: state.car.price + action.payload.price,
            features: [...state, state.car.features, action.payload]
          }
        }
      break
    case "REMOVE_FEATURE":
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price - action.payload.price,
          features: state.car.features.filter(item => item !== action.payload)
        }
      }
    default:
      return state
  }
}

export default clunckerReducer
