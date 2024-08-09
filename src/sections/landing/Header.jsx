import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

// third party
import { motion } from 'framer-motion';

// ==============================|| LANDING - HeaderPage ||============================== //

export default function HeaderPage() {
  const theme = useTheme();

  let value = window.location.search;
  const params = new URLSearchParams(value);
  const ispValue = params.get('isp');

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle change for radio buttons
  const handleRadioChange = (event) => {
    const sectionId = event.target.value;
    scrollToSection(sectionId);
  };

  return (
    <Box sx={{ minHeight: '70vh', position: 'relative', pb: 6, pt: 6, display: 'flex', alignItems: 'center' }}>
      <Container>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ pt: { md: 0, xs: 5 }, pb: { md: 0, xs: 10 } }}>
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
                      Able Pro is one of the featured admin dashboard templates in Envato Marketplace and used by over 2.5K+ customers
                      worldwide.
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
                  <FormControl component="fieldset" sx={{ mt: 3 }}>
                    <RadioGroup
                      aria-label="knowledge-level"
                      name="knowledge-level"
                      onChange={handleRadioChange}
                    >
                      <FormControlLabel value="apps" control={<Radio />} label="I am well known about DH" />
                      <FormControlLabel value="technologies" control={<Radio />} label="I am not sure about DH" />
                      <FormControlLabel value="combo" control={<Radio />} label="I don't know anything about DH" />
                    </RadioGroup>
                  </FormControl>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
