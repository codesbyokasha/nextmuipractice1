const { Box, Typography } = require("@mui/material");
import Image from 'next/image';

const ApproachCard = (props) =>{
  return(
    <Box sx={{maxWidth:'604px', display:'flex', border:'1px solid grey', padding:'25px', borderRadius:'2px'}}>
      <Box>
        <Image width={45} src={props.img}/>
      </Box>
      <Box sx={{paddingLeft:'15px'}}>
        <Typography sx={{fontWeight:600, fontSize:'20px', lineHeight:'27.3px', marginBottom:'10px'}}>
          {props.title}
        </Typography>
        <Typography sx={{fontWeight:400, fontSize:'14px', lineHeight:'22.68px'}}>
          {props.desc}
        </Typography>
      </Box>
    </Box>
  )
}
export default ApproachCard;