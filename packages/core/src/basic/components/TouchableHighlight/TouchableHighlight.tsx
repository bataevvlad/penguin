import {forwardRef} from 'react';
import {TouchableHighlight as DefaultTouchableHighlight} from 'react-native';

import {ITouchableHighlight, TouchableHighlightProps} from './types';

// eslint-disable-next-line react/display-name
const TouchableHighlight = forwardRef<
  ITouchableHighlight,
  TouchableHighlightProps
>((props, ref) => {
  return <DefaultTouchableHighlight {...props} ref={ref} />;
});
export default TouchableHighlight;
