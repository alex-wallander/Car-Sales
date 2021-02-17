import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../action/featureAction';


const AdditionalFeature = props => {
  return (
    <ol>
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
    </ol>
  );
};

const mapStateToProps = state => {
  return({
    additionalFeatures: state.additionalFeatures
  })
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeature);
