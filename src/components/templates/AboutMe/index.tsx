import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ContainerBase from '~organisms/Container';
import SectionTitle from '~molecules/SectionTitle';
import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { rem } from '~mixin';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export interface AboutMeProps {
  name: string;
  work: string;
  description: React.ReactNode;
  birthday: string;
  location: string;
  gender: string;
  email: string;
  phone: string;
  phoneExpand?: string;
}

interface ContactInfoProps {
  label: string;
  value: string;
  sx?: SxProps<Theme>;
  hasCopy?: boolean;
  onClick?: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  label,
  value,
  sx,
  hasCopy,
  onClick,
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000)
  }
  return (
    <Box className="t-aboutMe_contactItem" sx={{display: 'flex', alignItems: 'center', gap: rem(20), ...sx}}>
      <Typography className="t-aboutMe_contactItem_label" sx={{color: '#D2D3D4', fontSize: rem(16), lineHeight: rem(18), width: rem(100), fontWeight: 700}}>
        {label}:
      </Typography>
      <Box sx={{display: 'flex', alignItems: 'center', gap: rem(8), color: 'rgba(255, 255, 255, 0.8)',}}>
        <Typography 
          sx={{ fontSize: rem(14), lineHeight: rem(16), cursor: onClick ? 'pointer' : undefined}}
          onClick={onClick}  
        >
          {value}
        </Typography>
        {hasCopy && (
          <Box sx={{cursor: 'pointer', color: isCopied ? 'rgba(124, 124, 124, 0.526)' : undefined}} onClick={handleCopy}>
            <ContentCopyIcon sx={{fontSize: rem(14)}}/>
          </Box>
        )}
      </Box>
    </Box>
  )
}

const AboutMe: React.FC<AboutMeProps> = ({
  name,
  work,
  description,
  birthday,
  location,
  gender,
  email,
  phone,
  phoneExpand,
}) => {
  return (
    <Box className="t-aboutMe">
      <ContainerBase>
        <SectionTitle title="About" subtitle='Information about me' sx={{pb: rem(50)}}/>
        <Typography sx={{fontSize: rem(16), lineHeight: rem(20), fontWeight: 800, color: '#FFAD60'}}>
          About me
        </Typography>
        <Typography sx={{mt: rem(8), fontSize: rem(36), lineHeight: rem(40), color: 'white', fontWeight: 800, textTransform: 'capitalize'}}>
          {name}
        </Typography>
        <Typography sx={{mt: rem(8), color: '#FFAD60', fontSize: rem(16), lineHeight: rem(20), fontWeight: 800}}>
          {work}
        </Typography>
        <Box sx={{mt: rem(30), color: 'rgba(213, 213, 213, 0.8)', fontSize: rem(14), lineHeight: rem(18)}}>
          {description}
        </Box>
        <Box className="t-aboutMe_contactInfo" sx={{mt: rem(30), display: 'flex', justifyContent: 'space-between', flexDirection: {xs: 'column', md: 'row'}}}>
          <Box sx={{'& .t-aboutMe_contactItem:nth-child(n+2)': { mt: rem(8)}, '& .t-aboutMe_contactItem_label': {width: {xs: phoneExpand ? 200 : undefined, md: undefined}}}}>
            <ContactInfo label="Name" value={name} />
            <ContactInfo label="Birthday" value={birthday} />
            <ContactInfo label="Location" value={location} />
            <ContactInfo label="Gender" value={gender} />
          </Box>
          <Box sx={{mt: {xs: rem(8), md: 0}, '& .t-aboutMe_contactItem:nth-child(n+2)': { mt: rem(8)}, '& .t-aboutMe_contactItem_label': {width: phoneExpand ? 200 : undefined}}}>
            <ContactInfo label="Email" value={email} hasCopy />
            <ContactInfo label={`Phone${phoneExpand !== undefined ? ` (${phoneExpand})`: ''}`} value={phone} hasCopy/>
          </Box>
        </Box>
      </ContainerBase>
    </Box>
  )
};

export default AboutMe;

