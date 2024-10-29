import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const CaseCard = (props) =>{
  return(
    <Box sx={{display: 'flex', border:'1px solid grey', borderRadius:'10px', mx:'60px', marginBottom:'20px'
    }}>
      <Box>
        <Image height={416} src={props.img}/>
      </Box>
      <Box sx={{px:'30px', }}>
      <Typography sx={{fontSize:'28px', fontWeight:600, lineHeight:'38px', marginTop:"40px", marginBottom:"25px" }}>
        {props.title}
      </Typography>
      <Typography sx={{fontSize:'14px', fontWeight:400, lineHeight:'22.68px'}}>
        {props.desc}
      </Typography>
      </Box>
    </Box>
  )
}
export default CaseCard;