import { useRef, useState } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';

// project-imports
import FadeInWhenVisible from './Animation';
import { ThemeDirection } from 'config';

// third-party
import Slider from 'react-slick';

// assets
import featureChat from 'assets/images/landing/chat.png';
import featureEcommerce from 'assets/images/landing/e-commerce.png';
import featureMail from 'assets/images/landing/mail.png';
import featureSocial from 'assets/images/landing/social.png';

const Technologies = [
  {
    image: featureChat,
    title: 'Parenting',
    href: 'chat',
    description: 'A parent-child relationship is the most comprehensive dyadic relationship where many elements of a relationship are implied. With guidance, security, and love as underlying attributes, the relationship can take positive directions.'
  },
  {
    image: featureEcommerce,
    title: 'Spousal relationships',
    href: 'ecommerce',
    description: 'Spousal relationships, though inherently intimate, encompass much more. The strength of the spousal connection directly influences each partner\'s health, underscoring the importance of fostering unity, empathy, and shared values within the home.'
  },
  {
    image: featureMail,
    title: 'Family',
    href: 'mail',
    description: 'Family relationship is a culmination of Spousal and Parental relationships.'
  },
  {
    image: featureSocial,
    title: 'Quality Relationships',
    href: 'social',
    description: 'Nurturing and preserving the quality of relationships has tremendous health benefits.'
  }
];


// ==============================|| LANDING - AppsPage ||============================== //

export default function AppsPage() {
  const theme = useTheme();
  const [slideIndex, setSlideIndex] = useState(0);

  function handleChange(value) {
    goToSlide(value);
    setSlideIndex(value);
  }

  const [state, setState] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    setState(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings = {
    autoplay: true,
    fade: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: function (currentSlide, next) {
      setSlideIndex(next);
    }
  };

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, overflow: 'hidden', pt: { md: 10, xs: 5 }, position: 'relative' }}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center" sx={{ textAlign: 'center', marginBottom: 3 }}>
              <Grid item xs={12}>
                <Typography variant="h2" color="white">
                  Working Conceptual Apps
                </Typography>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography color="white">
                  Each App is carefully crafted to achieve the best feature rich working concept for your project
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ pt: { md: 10, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={3} alignItems="start">
              <Grid item xs={12} md={6}>
                <Box pb={{ xs: 0, md: 10 }}>
                  <Grid container spacing={1.5} alignItems="center">
                    {Technologies.map((tech, index) => (
                      <Grid item xs={12} key={index}>
                        <FadeInWhenVisible>
                          <Button
                            onClick={() => {
                              handleChange(index);
                            }}
                            role="link"
                            href={`#${tech.href}`}
                            sx={{
                              p: 3,
                              borderRadius: 1.5,
                              ...(slideIndex === index && {
                                background: alpha(theme.palette.secondary.lighter, 0.13),
                                boxShadow: theme.customShadows.z1,
                                '&:hover': { background: alpha(theme.palette.secondary.lighter, 0.13), boxShadow: theme.customShadows.z1 }
                              })
                            }}
                            variant="light"
                          >
                            <Grid container textAlign="start" spacing={2}>
                              <Grid item xs={12}>
                                <Typography variant="h4" color="white">
                                  {tech.title}
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography color="white">{tech.description}</Typography>
                              </Grid>
                            </Grid>
                          </Button>
                        </FadeInWhenVisible>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    transform: 'scale(1.56)',
                    transformOrigin: 'top left',
                    mt: 3,
                    width: '100%',
                    pointerEvents: 'none',
                    ...(theme.direction === ThemeDirection.RTL && {
                      '& .slick-slider > .slick-list > .slick-track > .slick-slide': { float: 'right !important' }
                    })
                  }}
                >
                  <Slider ref={sliderRef} {...settings}>
                    {Technologies.map((tech, index) => (
                      <Box key={index + state}>
                        <CardMedia component="img" image={tech.image} sx={{ width: '100%', minHeight: '100%' }} />
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <IconButton
        aria-label="chat"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: alpha(theme.palette.secondary.main, 0.7),
          '&:hover': {
            backgroundColor: alpha(theme.palette.secondary.main, 1),
          },
        }}
      >
        <ChatIcon sx={{ color: 'white', fontSize: 32 }} />
      </IconButton>
    </Box>
  );
}
