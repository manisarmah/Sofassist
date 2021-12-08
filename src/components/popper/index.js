import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import './style.css'
import ClearAllIcon from '@mui/icons-material/ClearAll';

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: 500 }}  >
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ width: 120 }}>
              <Typography  ><MenuItem style={{display:"flex", justifyContent:"center"}}>Search</MenuItem><MenuItem style={{display:"flex", justifyContent:"center"}}>Mute</MenuItem><MenuItem style={{display:"flex", justifyContent:"center"}}>Block</MenuItem><MenuItem style={{display:"flex", justifyContent:"center"}}>Clear Chat</MenuItem><MenuItem style={{display:"flex", justifyContent:"center"}}>Report</MenuItem></Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center" >
        <Grid item>
          <Button onClick={handleClick('bottom-end')} > <ClearAllIcon style={{fontSize:"2.2rem", color:"rgba(155, 81, 224, 1)", }}/></Button>
        </Grid>
      </Grid>
    </Box>
  );
}
