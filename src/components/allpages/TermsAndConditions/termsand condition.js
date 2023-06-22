import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { PlayCircleOutlined } from '@mui/icons-material';

const TermsAndCondition = () => {
  const termstitle = [
      { title: 'Copyright Policy'},
      { title: 'HyperLinking Policy'},
      {title: 'Screen Reader Access'},
  ];

  return (
    <div>
      {termstitle.map((termstitle, index) => (
        <Typography key={index}>
          <IconButton sx={{ color: 'white'}}>
            <PlayCircleOutlined />
          </IconButton>
          {termstitle.title}
        </Typography>
      ))}
    </div>
  );
};

export default TermsAndCondition;
