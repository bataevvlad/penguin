import {forwardRef} from 'react';
import {Button as DefaultButton} from 'react-native';

import {IButtonWrapperProps, IButtonWrapper} from './types';

// eslint-disable-next-line react/display-name
const ButtonWrapper = forwardRef<IButtonWrapper, IButtonWrapperProps>(
  (props, ref) => {
    return <DefaultButton ref={ref} {...props} />;
  },
);
export default ButtonWrapper;
