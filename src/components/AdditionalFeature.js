import React from "react"
// import { VirtualAction } from "rxjs"
// import { Action } from "rxjs/internal/scheduler/Action"

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.buyFeature(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  )
}

export default AdditionalFeature
