import {forwardRef} from 'react';
import {TextInput as DefaultTextInput} from 'react-native';

import {getConfig} from '../../config';

import {ITextInputProps, ITextInput} from './types';

// eslint-disable-next-line react/display-name
const TextInput = forwardRef<ITextInput, ITextInputProps>((props, ref) => (
  <DefaultTextInput
    ref={ref}
    allowFontScaling={getConfig().allowFontScaling}
    {...props}
  />
));
export default TextInput;
