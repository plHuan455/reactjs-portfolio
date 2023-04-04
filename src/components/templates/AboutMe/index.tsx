import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import React, { useState } from 'react';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import skypeIcon from '~assets/icons/ic_skype.svg';
import ContainerBase from '~organisms/ContainerBase';
import SectionTitle from '~molecules/SectionTitle';
import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { fontFamilyMixin, rem } from '~mixin';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContactCard from '~organisms/ContactCard';
import EmailIcon from '@mui/icons-material/Email';

export interface ContactCardTypes {
  title: string;
  value: string;
  icon: string | JSX.Element;
  desc?: string;
  color?: string;
  hideCopyBtn?: boolean;
}

export interface InfoTypes {
  label: string;
  value: string;
}

export interface AboutMeProps {
  name: string;
  work: string;
  description: React.ReactNode;
  infoList: InfoTypes[];
  contactList: ContactCardTypes[];
}

const AboutMe: React.FC<AboutMeProps> = ({
  name,
  work,
  description,
  contactList,
  infoList,
}) => {
  return (
    <Box className="t-aboutMe">
      <ContainerBase>
        <SectionTitle title="About" subtitle='Information about me' sx={{ pb: rem(50) }} />
        <Box sx={{ display: 'flex', gap: rem(28), flexDirection: {xs: 'column', md: 'row'} }}>
          <Box sx={{ width: {xs: '100%', md: '50%'} }}>
            <Typography sx={{ fontSize: rem(16), lineHeight: rem(20), fontWeight: 800, color: '#FFAD60', textAlign: {xs: 'center', md: 'start'} }}>
              About me
            </Typography>
            <Typography sx={{ mt: rem(8), fontSize: rem(36), lineHeight: rem(40), color: 'white', fontWeight: 800, textTransform: 'capitalize', textAlign: {xs: 'center', md: 'start'} }}>
              {name}
            </Typography>
            <Typography sx={{ mt: rem(8), color: '#FFAD60', fontSize: rem(16), lineHeight: rem(20), fontWeight: 800, textAlign: {xs: 'center', md: 'start'} }}>
              {work}
            </Typography>
            <Box sx={{ mt: rem(30), color: 'rgba(213, 213, 213, 0.8)', fontSize: rem(14), lineHeight: rem(18), '& p': {textAlign: {xs: 'center', md: 'start'}} }}>
              {description}
            </Box>
            <List sx={{ mt: rem(22), '& .MuiListItem-root ~ .MuiListItem-root': {mt: rem(9)}}}>
              {infoList.map(value => (
                <ListItem sx={{ display: 'flex', gap: rem(8), alignItems: 'center', padding: 0, justifyContent: { xs: 'center', md: 'flex-start'} }}>
                  <Typography sx={{ color: '#d5d5d5', fontSize: rem(16), lineHeight: rem(18), fontWeight: 700, ...fontFamilyMixin('jost') }}>
                    {value.label}:
                  </Typography>
                  <Typography sx={{ color: '#d5d5d5', fontSize: rem(14), lineHeight: rem(18), fontWeight: 400, ...fontFamilyMixin('jost') }}>
                    {value.value}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
          <Grid 
            sx={{ width: { md: '50%'}, mt: { xs: rem(18), sm: 0} }} 
            container 
            columnSpacing={28} 
            rowSpacing={44} 
            justifyContent='center'
          >
            {contactList.map(value => (
              (<Grid item xs={6} sm={4} md={6} key={`key-aboutMe-contact-item-${value.title}`}>
                <ContactCard
                  title={value.title}
                  value={value.value}
                  desc={value.desc}
                  color={value.color ?? 'orange'}
                  icon={value.icon}
                />
              </Grid>)
            ))}
          </Grid>
        </Box>
      </ContainerBase>
    </Box>
  )
};

export default AboutMe;

