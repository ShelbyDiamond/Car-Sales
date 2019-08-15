import React from "react"
import Header from "./components/Header"
import AddedFeatures from "./components/AddedFeatures"
import AdditionalFeatures from "./components/AdditionalFeatures"
import Total from "./components/Total"
import { connect } from "react-redux"
import AddFeature from "./actions"
import RemoveFeature from "./actions"

const App = props => {
  const removeFeature = item => {
    props.deleteFeature()
  }

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature()
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} carStore={props.carStore} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    car: state.car,
    carStore: state.carStore,
    additionalPrice: state.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  { AddFeature, RemoveFeature }
)(App)
