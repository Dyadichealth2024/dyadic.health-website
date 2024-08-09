import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// third party
import { motion } from 'framer-motion';

// assets
import AnimateButton from 'components/@extended/AnimateButton';
import techBootstrap from 'assets/images/landing/tech-bootstrap.svg';
import techReact from 'assets/images/landing/tech-react.svg';
import techAngular from 'assets/images/landing/tech-angular.svg';
import techCodeigniter from 'assets/images/landing/tech-codeigniter.svg';
import techNet from 'assets/images/landing/tech-net.svg';
import techFigma from 'assets/images/landing/tech-figma.svg';
import techVue from 'assets/images/landing/tech-vuetify.svg';
import techNextJS from 'assets/images/landing/tech-nextjs.svg';

// ==============================|| LANDING - HeaderPage ||============================== //

export default function HeaderPage() {
  const theme = useTheme();

  let value = window.location.search;
  const params = new URLSearchParams(value);
  const ispValue = params.get('isp');

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', pb: 12.5, pt: 10, display: 'flex', alignItems: 'center' }}>
      <Container>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ pt: { md: 0, xs: 10 }, pb: { md: 0, xs: 22 } }}>
          <Grid item xs={12} md={9}>
            <Grid container spacing={3} sx={{ textAlign: 'center' }}>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '1.825rem', sm: '2rem', md: '3.4375rem' },
                      fontWeight: 700,
                      lineHeight: 1.2
                    }}
                  >
                    Explore Our Programs and Improve your{' '}
                    <Typography
                      variant="h1"
                      component="span"
                      sx={{
                        fontSize: 'inherit',
                        background: 'linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169), rgb(37, 161, 244)) 0 0 / 400% 100%',
                        color: 'transparent',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        animation: 'move-bg 24s infinite linear',
                        '@keyframes move-bg': { '100%': { backgroundPosition: '400% 0' } }
                      }}
                    >
                         "Dyadic Health"
                    </Typography>{' '}
                    
                  </Typography>
                </motion.div>
              </Grid>
              <Grid container justifyContent="center" item xs={12}>
                <Grid item xs={8}>
                  <motion.div
                    initial={{ opacity: 0, translateY: 550 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      damping: 30,
                      delay: 0.2
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        fontWeight: 400,
                        lineHeight: { xs: 1.4, md: 1.4 }
                      }}
                    >
                      Able Pro is the one of the Featured admin dashboard template in Envato Marketplace and used by over 2.5K+ Customers
                      wordwide.
                    </Typography>
                  </motion.div>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.4
                  }}
                >
                  <Grid container spacing={3} justifyContent="center">
                    <Grid item>
                      <AnimateButton>
                        <Button component={RouterLink} to="/components-overview/buttons" size="large" color="secondary" variant="outlined">
                          I am well known about DH
                        </Button>
                      </AnimateButton>
                    </Grid>
                    <Grid item>
                      <AnimateButton>
                        <Button component={RouterLink} to="/login" target="_blank" size="large" color="primary" variant="contained">
                          I am not sure about DH
                        </Button>
                      </AnimateButton>
                    </Grid>
                    <Grid item>
                      <AnimateButton>
                        <Button component={RouterLink} to="/components-overview/buttons" size="large" color="secondary" variant="outlined">
                          I dontknow anything about DH
                        </Button>
                      </AnimateButton>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
