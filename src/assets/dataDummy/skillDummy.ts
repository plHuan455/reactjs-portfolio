import { SkillItemTypes } from "~molecules/SkillList";
import iconCss from '~assets/icons/ic_css.svg';
import iconJquery from '~assets/icons/ic_jquery.svg';
import iconTypescript from '~assets/icons/ic_typescript.svg';
import iconHtml from '~assets/icons/ic_html.svg';
import iconNodeJs from '~assets/images/node_express.png';
import iconReactJs from '~assets/icons/ic_react.svg';
import iconReactNative from '~assets/icons/ic_reactNative.svg';
import iconBootstrap from '~assets/images/bootstrap.png';
import iconJs from '~assets/icons/ic_js.svg';
import iconMui from '~assets/images/mui.png';
import iconRedux from '~assets/icons/ic_redux.svg';
import iconTailwindCss from '~assets/icons/ic_tailwind.svg';
import iconSass from '~assets/images/sass.png';
import iconGitlab from '~assets/icons/ic_gitlab.svg';
import iconGit from '~assets/icons/ic_git.svg';

type SkillName =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'reactjs'
  | 'reactNative'
  | 'typescript'
  | 'redux'
  | 'nodejs'
  | 'jquery'
  | 'sass'
  | 'muiui'
  | 'tailwindcss'
  | 'bootstrap'
  | 'git'
  | 'gitlab'

type SkillDataType = {
  [key in SkillName]: SkillItemTypes
}

const skillData: SkillDataType = {
  'html': { imgSrc: iconHtml, label: 'HTML', imgScale: 0.8},
  'css': { imgSrc: iconCss, label: 'CSS', imgScale: 0.7},
  'javascript': { imgSrc: iconJs, label: 'JAVASCRIPT', objectFit: 'cover' },
  'typescript': { imgSrc: iconTypescript, label: 'TYPESCRIPT', imgScale: 0.65 },
  'reactjs': { imgSrc: iconReactJs, label: 'REACTJS', imgScale: 0.8 },
  'redux': { imgSrc: iconRedux, label: 'REDUX', imgScale: 0.6 },
  'reactNative': { imgSrc: iconReactNative, label: 'REACT NATIVE', imgScale: 0.85 },
  'nodejs': { imgSrc: iconNodeJs, label: 'NODEJS (EXPRESS)', imgScale: 0.86 },
  'jquery': { imgSrc: iconJquery, label: 'JQUERY', imgScale: 0.67 },
  'sass': { imgSrc: iconSass, label: 'SCSS', imgScale: 0.8 },
  'muiui': { imgSrc: iconMui, label: 'MATERIAL UI', imgScale: 0.8 },
  'tailwindcss': { imgSrc: iconTailwindCss, label: 'TAILWINDCSS', imgScale: 0.8 },
  'bootstrap': { imgSrc: iconBootstrap, label: 'BOOTSTRAP', imgScale: 0.85, objectFit: 'contain' },
  'git': { imgSrc: iconGit, label: 'GIT', imgScale: 0.8 },
  'gitlab': { imgSrc: iconGitlab, label: 'GITLAB', imgScale: 0.75 },
}

export default skillData;