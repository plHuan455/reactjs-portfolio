import * as React from 'react';
import { mapModifiers } from '../../../utils/funcs';

type Size = '14x16' | '14x21' | '14x18' | '16x20' | '16x24' | '20x24' | '24x24' | '24x28' | '28x36' | '38x56';

type TextStyles = 'nowrap';

export type TextTypes = 'span' | 'p' | 'div';

interface TextProps {
  modifiers?: (GeneralTextStyle | Size | TextStyles)[];
  type?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  content?: string;
  isInline?: boolean;
  children?: React.ReactNode
}

const Text: React.FC<TextProps> = ({
  modifiers,
  type = 'p',
  children,
  isInline,
}) => {
  const Element = type;

  return <Element className={mapModifiers('a-text', isInline && 'inline', modifiers)}>
      {children}
    </Element>
};

Text.defaultProps = {
  modifiers: undefined,
  type: 'p',
  content: undefined,
  isInline: undefined,
};

export default Text;
