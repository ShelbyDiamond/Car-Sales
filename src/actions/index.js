export const AddFeature = item => {
  return {
    type: "ADD_FEATURE",
    payload: item
  }
}

export const RemoveFeature = item => {
  return {
    type: "REMOVE_FEATURE",
    payload: item
  }
}

export const addAdditionalPrice = item => {
  return { type: "ADD_ADDITIONAL_PRICE", payload: item }
}

export const removeAdditionalPrice = item => {
  return { type: "REMOVE_ADDITIONAL_PRICE", payload: item }
}
