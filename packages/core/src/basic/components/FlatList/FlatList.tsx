import {forwardRef} from 'react';
import {FlatList as DefaultFlatList} from 'react-native';

import {FlatListProps, IFlatList} from './types';

// eslint-disable-next-line react/display-name
const FlatList = forwardRef<IFlatList, FlatListProps<never>>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <DefaultFlatList ref={ref} {...props} />;
});
export default FlatList;
