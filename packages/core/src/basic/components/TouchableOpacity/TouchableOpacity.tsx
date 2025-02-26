import {forwardRef} from 'react';
import {TouchableOpacity as DefaultTouchableOpacity} from 'react-native';

import {ITouchableOpacity, ITouchableOpacityProps} from './types';

// eslint-disable-next-line react/display-name
const TouchableOpacity = forwardRef<ITouchableOpacity, ITouchableOpacityProps>(
  (props, ref) => <DefaultTouchableOpacity ref={ref} {...props} />,
);
export default TouchableOpacity;
