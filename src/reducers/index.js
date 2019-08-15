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
  console.log("action", action)

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
      const newestStore = [...state.carStore, action.payload]
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            filter(item => {
              return item !== action.payload
            })
          )
        },
        Store: newestStore
      }

    case "ADD_ADDITIONAL_PRICE":
      const priceIncrease = (number, total) => {
        return number + total
      }
      return {
        ...state,
        additionalPrice: updatedPrice.reduce(priceIncrease, action.payload)
      }

    case "REMOVE_ADDITIONAL_PRICE":
      const priceDecrease = (number1, total) => {
        return total - number1
      }
      return {
        ...state,
        additionalPrice: updatedPrice.reduce(priceDecrease, action.payload)
      }
    default:
      return state
  }
}

export default clunckerReducer
