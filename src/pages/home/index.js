import ServiceCard from "@/_components/serviceCard/serviceCard";
import CaseCard from "@/_components/casestudy/caseStudy";
import ApproachCard from "@/_components/approach/approach";
import DevImg from "@/_assets/png/image1.png";
import CaseImg from "@/_assets/png/image2.png";
import ApproachImg from "@/_assets/png/image3.png";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
    <Box sx={
      {bgcolor:'#F9F9FF',
       paddingBottom: '20px'}}>
      <Typography 
      sx={{textAlign: 'center',
        fontSize: '35px',
         fontWeight: 700,
          lineHeight: '55px',
           marginBottom: '25px',
            paddingTop: '20px'}}>
        Services We Offer
      </Typography>
    <Box sx={{display:'flex',
     gap: '15px',
      px:'10px',
       flexDirection:{
      xs: "column",
      md: "row"
    }}}>
      <ServiceCard
        img={DevImg}
        title="Web Design & Development"
        desc="A website is your number one marketing asset because we live in a digital age."
      />
            <ServiceCard
        img={DevImg}
        title="Web Design & Development"
        desc="A website is your number one marketing asset because we live in a digital age."
      />
            <ServiceCard
        img={DevImg}
        title="Web Design & Development"
        desc="A website is your number one marketing asset because we live in a digital age."
      />
            <ServiceCard
        img={DevImg}
        title="Web Design & Development"
        desc="A website is your number one marketing asset because we live in a digital age."
      />
    </Box>
    </Box>
    <Box sx={{bgcolor:'#F7F7FA'}}>
      <Typography sx={{textAlign:'center',
         fontWeight:600,
          fontSize:'35px',
           lineHeight:'55px',
            py:'30px'}}>
        Our Recent Case Studies
      </Typography>
    <CaseCard
    img={CaseImg}
    title='Website Design for SCFC Canada'
    desc= 'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.'
    />
        <CaseCard
    img={CaseImg}
    title='Website Design for SCFC Canada'
    desc= 'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.'
    />
        <CaseCard
    img={CaseImg}
    title='Website Design for SCFC Canada'
    desc= 'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.'
    />
    </Box>
    <Box sx={{bgcolor:'#F7F7FA', paddingBottom:'30px'}}>
      <Typography sx={{fontWeight:600, fontSize:'35px', lineHeight:'55px', textAlign:'center', py:'40px'}}>
        Our Design and Development approach
      </Typography>
      <Box sx={{display:'grid',
         gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', gap: '20px'},
        px:'60px'}}>
        <ApproachCard
        img={ApproachImg}
        title="Proven Experience and Expertise"
        desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
        />
                <ApproachCard
        img={ApproachImg}
        title="Proven Experience and Expertise"
        desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
        />
                <ApproachCard
        img={ApproachImg}
        title="Proven Experience and Expertise"
        desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
        />
                <ApproachCard
        img={ApproachImg}
        title="Proven Experience and Expertise"
        desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
        />
                <ApproachCard
        img={ApproachImg}
        title="Proven Experience and Expertise"
        desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
        />
                <ApproachCard
        img={ApproachImg}
        title="Proven Experience and Expertise"
        desc="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
        />
      </Box>
    </Box>
    </Box>
  );
};

export default HomePage;
