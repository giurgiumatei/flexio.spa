import { Avatar, Grid, Paper } from '@mui/material';
import React from 'react';

const Comment = ({ displayName, isAnonymous, text, dateAdded }) => {
  return (
    <Paper style={{ padding: '40px 20px', marginTop: 10 }}>
      <Grid container wrap='nowrap' spacing={2}>
        <Grid item>
          <Avatar sx={{ bgcolor: '#6667ab61' }} aria-label='recipe'>
            {isAnonymous ? 'A' : displayName[0]}
          </Avatar>
        </Grid>
        <Grid justifyContent='left' item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: 'left' }}>
            {isAnonymous ? 'Anonymous' : displayName}
          </h4>
          <p style={{ textAlign: 'left' }}>{text}</p>
          <p style={{ textAlign: 'left', color: 'gray' }}>{dateAdded.substring(0, 10)}</p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Comment;