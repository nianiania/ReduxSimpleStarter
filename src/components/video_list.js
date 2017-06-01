import React from 'react';
import VideoListItem from './video_list_item';

const VideoLIst = (props) => {
    const videoItems = props.videos.map((video)=>{
        return <VideoListItem video={video}/>
    });

    return ( 
        <ul className = "col-md-4 list-group" > 
            {videoItems}
        </ul>
    );
};

export default VideoLIst;