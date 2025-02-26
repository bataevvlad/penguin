import {forwardRef} from 'react';
import {View as DefaultView} from 'react-native';

import {IView, IViewProps} from './types';

// eslint-disable-next-line react/display-name
const View = forwardRef<IView, IViewProps>((props, ref) => (
  <DefaultView ref={ref} {...props} />
));

export default View;
