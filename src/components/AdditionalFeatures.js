import React from "react"
import AdditionalFeature from "./AdditionalFeature"

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.carStore.length ? (
        <ol type="1">
          {props.carStore.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  )
}

export default AdditionalFeatures
