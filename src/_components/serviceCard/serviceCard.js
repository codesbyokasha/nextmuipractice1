import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const ServiceCard = (props) => {
  return (
    <Box sx={{border: '1px solid black',
      // maxWidth: "500px",
      minWidth: "200px",
      borderRadius: '10px',
      marginTop: '10px',
      paddingLeft:'15px',
      paddingRight:'15px',
    }}>
      <Box 
      sx={{
        border: '1px solid grey',
        borderRadius: '50%',
        width: '58px',
        height: '58px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:"5px",
        marginTop: "30px",
        marginBottom: "10px",
      }}>
        <Image width={34} src={props.img}/>
      </Box>
      <Typography sx={{fontSize: '20px', fontWeight: 600, lineHeight: '27.3px', color:'purple',  marginBottom: "10px",}}>{props.title}</Typography>
      <Typography sx={{fontSize: '14px', fontWeight: 400, lineHeight: '22.68px', color:'#4A5568',marginBottom: "25px",}}>{props.desc}</Typography>
    </Box>
  );
};

export default ServiceCard;