import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography, TextField, Button, Box, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

// ==============================|| CUSTOM STYLED FOOTER ||============================== //

const FooterBlock = ({ isFull }) => {
  return (
    <div>
      {/* Footer Section */}
      <footer style={{ backgroundColor: '#f0f0f0', padding: '20px 0' }}>
        <Container>
          <Grid container spacing={3} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={4}>
              {/* Replace with your logo */}
              <img src="/path/to/logo.png" alt="Phoenixcoded" style={{ marginBottom: '10px' }} />
              <Typography variant="body2" color="textSecondary">
                2717 Western Blvd #402-D Raleigh NC 27606<br />
                +1 571 9347292
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="h4">Company</Typography>
              <Link href="https://1.envato.market/xk3bQd" display="block" color="inherit" style={{ margin: '20px 0' }}>
                About
              </Link>
              <Link href="https://1.envato.market/Py9k4X" display="block" color="inherit" style={{ margin: '20px 0' }}>
                Blog
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h4">Help & Support</Typography>
              <Link href="https://phoenixcoded.gitbook.io/able-pro/v/react/" display="block" color="inherit" style={{ margin: '20px 0' }}>
                Contact Us
              </Link>
              <Link href="https://phoenixcoded.gitbook.io/able-pro/v/react/roadmap/" display="block" color="inherit" style={{ margin: '20px 0' }}>
                Support
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h4">Legal Resources</Typography>
              <Link href="https://themeforest.net/page/item_support_policy" display="block" color="inherit" style={{ margin: '20px 0' }}>
                Terms & Condition
              </Link>
              <Link href="https://themeforest.net/licenses/standard" display="block" color="inherit" style={{ margin: '20px 0' }}>
                Privacy Policy
              </Link>
            </Grid>
          </Grid>
          <Box mt={3} textAlign="center">
            <IconButton href="https://www.facebook.com/Phoenixcoded/" aria-label="Facebook" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton href="https://www.instagram.com/Phoenixcoded/" aria-label="Instagram" target="_blank">
              <Instagram />
            </IconButton>
            <IconButton href="https://twitter.com/phoenixcoded" aria-label="Twitter" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton href="https://in.linkedin.com/company/phoenixcoded" aria-label="LinkedIn" target="_blank">
              <LinkedIn />
            </IconButton>
          </Box>
        </Container>
      </footer>
    </div>
  );
};

FooterBlock.propTypes = { 
  isFull: PropTypes.bool 
};

export default FooterBlock;
