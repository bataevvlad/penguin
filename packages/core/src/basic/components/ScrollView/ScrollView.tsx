import {forwardRef} from 'react';
import {ScrollView as DefaultScrollView} from 'react-native';

import {IScrollView, IScrollViewProps} from './types';

// eslint-disable-next-line react/display-name
const ScrollView = forwardRef<IScrollView, IScrollViewProps>((props, ref) => {
  return <DefaultScrollView ref={ref} {...props} />;
});
export default ScrollView;
