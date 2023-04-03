import { Typography } from "@mui/material";
import { rem } from "~mixin";
import AboutMe from "~templates/AboutMe";

const AboutMeContainer: React.FC = () => {
  return (
    <AboutMe 
      name="Pham Long Huan"
      birthday="May 25th, 2000"
      description={(
        <>
          <Typography variant="body2" sx={{textAlign: 'justify'}}>
            I'm a front end developer with 1 year of experience as a web developer. I have spent a considerable amount of time self-learning and creating personal projects in both front-end and back-end development. In addition, I have gained almost one year of experience working for companies with a structured workflow.
          </Typography>
          <Typography variant="body2" sx={{mt: rem(16), textAlign: 'justify'}}>
            With a strong passion for front-end development, I am always eager to learn new technologies to enhance my skills and create the best user experience for users
          </Typography>
        </>
      )}
      email="plhuan455@gmail.com"
      gender="male"
      phone="0362806575"
      phoneExpand="Zalo & Telegram"
      work="Front-end Developer"
      location="District 3, Ho Chi Minh City"
    />
  )
}

export default AboutMeContainer;