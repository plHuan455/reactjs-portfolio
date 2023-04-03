import metanodeSrc2 from '~assets/images/metanode-2.png';
import metanodeSrc4 from '~assets/images/metanode-4.png';
import metanodeSrc6 from '~assets/images/metanode-6.png';
import novaLand1 from '~assets/images/novaland-1.png';
import novaLand2 from '~assets/images/novaland-2.png';
import novaLand3 from '~assets/images/novaland-3.png';
import novacommerce1 from '~assets/images/novacommerce-1.png';
import novacommerce2 from '~assets/images/novacommerce-2.png';
import novacommerce3 from '~assets/images/novacommerce-3.png';
import { ProjectItemTypes } from '~templates/Project';

export const projectDummy: ProjectItemTypes[] = [
  {
    name: 'Metanode Mail',
    description: 'A web application used for composing, sending, and viewing emails, where each email sent by an employee is managed by their respective supervisor. The supervisor has the authority to approve or reject the email. This application will be deployed for multiple companies in various countries.',
    technology: 'React + Typescript, Redux, Webpack, SCSS, MaterialUI, Websocket, Firebase.',
    teamSize: '3 members, 2 front-end, 1 back-end',
    imgSrcList: [metanodeSrc6, metanodeSrc2, metanodeSrc4],
    color: '#517fff',
  }, 
  {
    name: "Novaland" ,
    description: 'Websites that provide information about businesses, projects, recruitment information, and events',
    technology: 'React + Typescript, Redux, SCSS, Bootstrap, ESLint, Storybook.',
    imgSrcList: [novaLand1, novaLand2, novaLand3],
    teamSize: '8 members, 5 front-end, 3 back-end',
    color: '#366cff',
  },
  {
    name: "Nova Commerce" ,
    description: 'Websites that provide information about businesses, projects, recruitment information, and events',
    technology: 'React + Typescript, Redux, SCSS, Bootstrap, ESLint, Storybook.',
    imgSrcList: [novacommerce1, novacommerce2, novacommerce3],
    teamSize: '8 members, 5 front-end, 3 back-end',
    color: '#a0fc7a',
  },
]