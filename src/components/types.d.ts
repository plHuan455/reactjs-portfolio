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
  | 'columbiaBlue'
  | 'deepKoamaru'
  | 'lightSteelBlue'
  | 'sonicSilver'
  | 'grayX11'
  | 'outerSpace'
  | 'darkGrayX11'

type BoxSize = '12x12' | '16x16' | '18x18' | '20x20' | '24x25' |'32x32' | '36x36';

type TextSizes = '12x18' | '14x16' | '14x21' | '14x18' | '14x20' | '16x20' | '16x24' | '20x24' | '24x24' | '24x28' | '28x36' | '38x56' | '42x52' | '45x56';

type FontFamily = 'fontLexend' | 'fontNoto' | 'fontLato' | 'fontCalibri';

type GeneralTextStyle = ColorStyle | FontWeightStyle | TextStyle | FontFamily | TextSizes;
