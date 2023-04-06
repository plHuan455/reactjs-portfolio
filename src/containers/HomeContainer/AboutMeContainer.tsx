import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import skypeIcon from '~assets/icons/ic_skype.svg';
import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { rem } from "~mixin";
import AboutMe, { ContactCardTypes, InfoTypes } from "~templates/AboutMe";


const AboutMeContainer: React.FC = () => {
  const contactList = useMemo<ContactCardTypes[]>(() => {
    return [
      {
        title: 'Phone',
        value: '0362806575',
        desc: 'Hotline & Telegram & Zalo',
        icon: (
          <LocalPhoneIcon sx={{ fontSize: rem(26) }} />
        ),
        color: 'linear-gradient(to bottom, #88FD70, #16D820)'
      },
      {
        title: 'Email',
        value: 'plhuan455@gmail.com',
        desc: 'My Email Address',
        icon: <EmailIcon sx={{ fontSize: rem(28) }} />,
        color: 'linear-gradient(to bottom, #19E4FF, #1E53EE)'
      },
      {
        title: 'Skype',
        value: 'live:.cid.eb8261b5d8ab060f',
        desc: 'Huan Pham',
        color: 'linear-gradient(to bottom, #19e4ff56, #1e52ee2a)',
        icon: (
          <Box sx={{ width: '80%', height: '80%', '& img': { width: '100%', height: '100%' } }}>
            <img src={skypeIcon} alt='' />
          </Box>
        )
      }
    ]
  }, []);

  const infoList = useMemo<InfoTypes[]>(() => {
    return [
      {label: 'Name', value: 'Pham Long Huan'},
      {label: 'Gender', value: 'Male'},
      {label: 'Birthday', value: 'May 25th, 2000'},
      {label: 'Location', value: 'District 3, Ho Chi Minh City'},
    ]
  }, [])

  return (
    <AboutMe
      contactList={contactList}
      infoList={infoList}
      name="Pham Long Huan"
      description={(
        <>
          <Typography variant="body2" sx={{ textAlign: 'justify' }}>
            I'm a front end developer with 1 year of experience as a web developer. I have spent a considerable amount of time self-learning and creating personal projects in both front-end and back-end development. In addition, I have gained almost one year of experience working for companies with a structured workflow.
          </Typography>
          <Typography variant="body2" sx={{ mt: rem(16), textAlign: 'justify' }}>
            With a strong passion for front-end development, I am always eager to learn new technologies to enhance my skills and create the best user experience for users
          </Typography>
        </>
      )}
      work="Front-end Developer"
    />
  )
}

export default AboutMeContainer;