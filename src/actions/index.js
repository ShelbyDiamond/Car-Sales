const removeFeature = item => {
  // dipsatch an action here to remove an item
  return {
    type: "REMOVE_FEATURE",
    payload: item
  }
}

const buyFeature = item => {
  // dipsatch an action here to add an item
  return {
    type: "BUY_FEATURE",
    payload: item
  }
}
