const removeFeature = feature => {
  // dipsatch an action here to remove an item
  return {
    type: "REMOVE_FEATURE",
    payload: feature
  }
}

const buyFeature = feature => {
  // dipsatch an action here to add an item
  return {
    type: "BUY_FEATURE",
    payload: feature
  }
}
