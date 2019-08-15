export const AddFeature = "ADD_FEATURE"

export const AddFeature = item => {
  console.log(item)
  return {
    type: "ADD_FEATURE",
    payload: item
  }
}

export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const RemoveFeature = item => {
  console.log(item)
  return {
    type: "REMOVE_FEATURE",
    payload: item
  }
}
