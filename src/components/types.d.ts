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
  | 'darkLiver'
  | 'davysGrey'
  | 'independence'

type TextSizes = '14x16' | '14x21' | '14x18' | '14x20' | '16x20' | '16x24' | '20x24' | '24x24' | '24x28' | '28x36' | '38x56' | '64x80';

type FontFamily = 'fontLexend' | 'fontNoto' | 'fontLato' | 'fontCalibri';

type GeneralTextStyle = ColorStyle | FontWeightStyle | TextStyle | FontFamily | TextSizes;
