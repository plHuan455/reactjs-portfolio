type Ratio =
  'logo';

type FontWeightStyle =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type TextStyle =
  | 'uppercase'
  | 'capitalize'
  | 'underline'
  | 'italic'
  | 'center'
  | 'justify'
  | 'normal'
  | 'right'
  | 'left';

type ColorStyle =
  | 'white'
  | 'black'
  | 'charcoal'
  | 'lightSlateGray'
  | 'rustyRed'
  | 'deepGreenCyanTurquoise'
  | 'charlestonGreen'

type FontFamily = 'fontLexend' | 'fontNoto' | 'fontLato' | 'fontCalibri';

type GeneralTextStyle = ColorStyle | FontWeightStyle | TextStyle | FontFamily;
