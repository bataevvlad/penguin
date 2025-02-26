import {render} from '@testing-library/react-native';

import TouchableHighlight from '../TouchableHighlight';
import {View} from '../../View';

describe('@penguin/core/TouchableHighlight', () => {
  it('renders correctly', () => {
    const {toJSON} = render(
      <TouchableHighlight underlayColor={'GRAY'} onPress={jest.fn}>
        <View />
      </TouchableHighlight>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
