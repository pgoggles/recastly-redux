import { connect } from 'react-redux';
import React from 'react';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = ({ videos, handleVideoListEntryTitleClick }) => {
  return (<VideoList
    handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
    videos={videos}
  />);
};

var mapDispatchToProps = (dispatch) => {
  return { handleVideoListEntryTitleClick: (video) => { dispatch(changeVideo(video)); } };
};

var mapStateToProps = (state) => {
  return { videos: state.videoList };
};
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);
