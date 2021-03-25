import { connect } from 'react-redux';
import React from 'react';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

var SearchContainer = ({ handleSearchInputChange }) => {
  return (<Search handleSearchInputChange={handleSearchInputChange}/>);
};

var mapDispatchToProps = (dispatch) => {
  return {handleSearchInputChange: (q) => { dispatch(handleSearchChange(q)); } };
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(null, mapDispatchToProps)(SearchContainer);
