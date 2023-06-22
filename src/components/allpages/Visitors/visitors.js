import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { PlayCircleOutlined } from '@mui/icons-material';

const Visitors = () => {
  const visitorsTitle = [
    { title: 'Last Updated: 28-04-2023'},
    { title: 'No. of visitors'},
    {title:"Contacts"},
  ];

  return (
    <div>
      {visitorsTitle.map((visitorsTitle, index) => (
        <Typography key={index}>
          <IconButton sx={{ color: 'white'}}>
            <PlayCircleOutlined />
          </IconButton>
          {visitorsTitle.title}
        </Typography>
      ))}
    </div>
  );
};

export default Visitors;
