import React, { Component } from "react";
import PropTypes from 'prop-types'

function YoutubeVideo({ videoId, videoTitle, videoLength, videoDescription, videoAuthor, children }){
    return(
        <div id={videoId}>
            <h1>{videoTitle} - {(parseInt(videoLength)/1000).toFixed(1)}MB</h1>
            <h3>author - {videoAuthor}</h3>
            <p>{videoDescription}</p>
            {children}
        </div>
    )
}

export default YoutubeVideo

YoutubeVideo.propTypes = {
    videoId: PropTypes.string,
    videoTitle: PropTypes.string,
    videoLength: PropTypes.number,
    videoDescription: PropTypes.string

}
//props 기본값 설정
YoutubeVideo.defaultProps ={
    videoAuthor : 'yeona'
}