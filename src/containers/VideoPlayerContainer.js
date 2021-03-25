import { connect } from 'react-redux';
import React from 'react';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = ({ video }) => {
  return (<VideoPlayer video={video}/>);
};

const mapStateToProps = (state) => {
  return {video: state.currentVideo};
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps)(VideoPlayerContainer);
