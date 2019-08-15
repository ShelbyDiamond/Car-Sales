import React from "react"
import Header from "./components/Header"
import AddedFeatures from "./components/AddedFeatures"
import AdditionalFeatures from "./components/AdditionalFeatures"
import Total from "./components/Total"
import { connect } from "react-redux"
import { removeFeature, buyFeature } from "./actions"

const App = props => {
  console.log(props)
  const { state, removeFeature, buyFeature } = props

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
          carStore={state.carStore}
          buyFeature={buyFeature}
          removeFeature={removeFeature}
        />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(
  mapStateToProps,
  { removeFeature, buyFeature }
)(App)
