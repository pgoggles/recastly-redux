import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return () => {
    searchYouTube({ key: YOUTUBE_API_KEY, query: q }, (data) => {
      changeVideo(data[0]);
      changeVideoList(data);
    });
  };


};

export default handleVideoSearch;
