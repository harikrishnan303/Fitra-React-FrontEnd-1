import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './ProgressTracker.css'
function ProgressTracker(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
    
      <CircularProgress size='25rem' thickness='2.5' variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
                <div className='cal'>1500</div>
      </Box>
    </Box>
  );
}

ProgressTracker.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
   setProgress((700/1500)*100)}, []);

  return <ProgressTracker value={progress} />;
}