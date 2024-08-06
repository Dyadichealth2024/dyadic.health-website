import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MainCard from 'components/MainCard';
import videoList from './videoList';

export default function ComboPage() {
  const [selectedVideo, setSelectedVideo] = useState(videoList[0].id);

  const handleVideoSelect = (videoId) => {
    setSelectedVideo(videoId);
  };

  const containerStyle = {
    height: '10cm', // Adjust height as needed
    overflowY: 'auto',
  };

  const videoItemStyle = {
    cursor: 'pointer',
  };

  const iframeContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '0',
    paddingBottom: '56.25%', // 16:9 aspect ratio
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  };

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '70vh', padding: 3 }}>
      <Container>
      <Box sx={{ marginBottom: 5, marginTop: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Video Gallery
          </Typography>
        </Box>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <MainCard style={{ ...containerStyle, backgroundColor: '#80b3ff' }}>
              <Grid container spacing={2}>
                {videoList.map((video, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index} onClick={() => handleVideoSelect(video.id)} style={videoItemStyle}>
                    <Stack spacing={1} alignItems="center">
                      <Typography variant="body2" align="center" noWrap>
                        {video.title}
                      </Typography>
                      <CardMedia
                        component="img"
                        image={video.thumbnail}
                        sx={{ width: '100%', height: 'auto', maxHeight: '100px', objectFit: 'contain' }}
                      />
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <MainCard style={{ ...containerStyle, backgroundColor: '#80b3ff' }}>
              <Box style={iframeContainerStyle}>
                <Box
                  component="iframe"
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  style={iframeStyle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
            </MainCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}