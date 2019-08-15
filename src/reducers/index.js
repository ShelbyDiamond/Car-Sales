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

export const clunckerReducer = (state = initialState, action) => {
  const updatedPrice = [state.additionalPrice]

  switch (action.type) {
    case "ADD_FEATURE":
      console.log(state.car)
      const store = state.carStore.filter(feature => feature !== action.payload)

      return {
        ...state,
        car: {
          ...state.car,
          features: [...state, state.car.features, action.payload]
        }
      }

    case "REMOVE_FEATURE":
      return {
        ...state,
        features: !state.features
      }
    default:
      return state
  }
}
