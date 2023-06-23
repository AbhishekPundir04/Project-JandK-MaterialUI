import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { PlayCircleOutlined } from '@mui/icons-material';

const LinkFooter = (props) => {
  return (
    <div style={{marginTop:"56px"}}>
      {props?.linkList && props.linkList.map((linkItem, index) => (
        <div key={index}  >
          <IconButton sx={{ color: 'white',marginLeft:"50px"}} onClick={()=>props.linkAction(linkItem.route)}>
            <PlayCircleOutlined />
            <Typography sx={[{marginLeft:"10px"},props.style]}>
            {linkItem?.title}
            </Typography>
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default LinkFooter;

// import { PlayCircleFilledOutlined } from '@mui/icons-material'
// import { IconButton, Typography } from '@mui/material'
// import React from 'react'

// const LinkFooter = (props) => {
//   return (
//     <div>
//         {props?.linkList && props?.linkList.map((linkItem,index)=>(
//             <IconButton sx={{ color: 'white'}} >
//                 <PlayCircleFilledOutlined/>
//                 <Typography sx={[{marginLeft:"10px"},props.style]} onClick={()=>props.linkAction(linkItem.route)}>
//                     {linkItem?.title}
//                 </Typography>
//             </IconButton>
//         ))}
//     </div>
//   )
// }

// export default LinkFooter