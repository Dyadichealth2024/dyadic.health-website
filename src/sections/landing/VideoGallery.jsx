import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function VideoGallery() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { videoList = [], videosPlayed = [] } = location.state || {};
  
  const [currentVideo, setCurrentVideo] = useState(videoList[0].id);
  const [viewedVideos, setViewedVideos] = useState(videosPlayed);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoList.length === 0) {
      navigate('/combo');
    }
  }, [location, navigate, videoList.length]);

  useEffect(() => {
    // Load the YouTube Iframe API script
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize YouTube Player after API loads
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: currentVideo,
        height: '100%', // Ensure the iframe uses 100% of the container height
        width: '100%',  // Ensure the iframe uses 100% of the container width
        events: {
          'onStateChange': onPlayerStateChange, // Attach the state change handler
        },
      });
    };
  }, [currentVideo]);

  // This function handles the YouTube player's state changes
  const onPlayerStateChange = (event) => {
    const totalTime = playerRef.current.getDuration(); // Total duration of the video
    const currentTime = playerRef.current.getCurrentTime(); // Current playback time

    console.log('Player state changed:', event.data); // Debugging: Log the player state
    console.log(`Current time: ${currentTime}, Total time: ${totalTime}`); // Log current and total time

    if (event.data === window.YT.PlayerState.ENDED) {
      console.log('Video ended:', currentVideo); // Debugging: Log when the video ends

      // Allow a bit more tolerance (e.g., within 2-3 seconds of the end) to account for any discrepancies
      if (currentTime >= totalTime - 3 && currentTime <= totalTime + 3) {
        console.log('Marking as viewed:', currentVideo); // Debugging: Log when marking as viewed
        if (!viewedVideos.includes(currentVideo)) {
          setViewedVideos([...viewedVideos, currentVideo]);
        }
      } else {
        console.log('Video ended but not close enough to the end to be marked as viewed.');
      }
    }
  };

  const handleVideoSelect = (videoId) => {
    setCurrentVideo(videoId);
    if (playerRef.current) {
      playerRef.current.loadVideoById(videoId);
    }
  };

  const videoContainerStyle = {
    height: '600px', // Ensure a larger video player container
    position: 'relative',
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const ribbonStyle = {
    width: '300px', // Fixed width for the sidebar
    maxHeight: '600px',
    overflowY: 'auto',
    backgroundColor: '#f7f7f7',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Container className="container">
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Box style={videoContainerStyle}>
            <div id="youtube-player" style={{ width: '100%', height: '100%' }}></div> {/* YouTube Player Placeholder */}
          </Box>
        </Grid>
        <Grid item xs={3} style={ribbonStyle}>
          <Typography variant="h6" gutterBottom>
            Course Videos
          </Typography>
          <Stack spacing={2}>
            {videoList.map((video, index) => (
              <Box
                key={`${video.id}-${viewedVideos.includes(video.id) ? 'viewed' : 'not-viewed'}`} // Use unique key to force re-render
                onClick={() => handleVideoSelect(video.id)}
                className="thumbnail-hover-effect"
                style={{
                  cursor: 'pointer',
                  backgroundColor: viewedVideos.includes(video.id) ? '#d1e7dd' : '#fff',
                  padding: '10px',
                  borderRadius: '8px',
                }}
              >
                <CardMedia
                  component="img"
                  image={video.thumbnail}
                  sx={{ width: '100%', height: 'auto' }}
                />
                <Typography variant="body2" align="center">
                  {video.title}
                </Typography>
                {viewedVideos.includes(video.id) && (
                  <Typography variant="caption" color="success.main" align="center">
                    Viewed
                  </Typography>
                )}
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
