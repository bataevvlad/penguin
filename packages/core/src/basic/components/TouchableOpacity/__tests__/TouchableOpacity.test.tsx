import {render} from '@testing-library/react-native';

import TouchableOpacity from '../TouchableOpacity';

describe('@penguin/core/TouchableOpacity', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<TouchableOpacity />);
    expect(toJSON()).toMatchSnapshot();
  });
});
