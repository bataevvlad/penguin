import {render} from '@testing-library/react-native';

import Text from '../Text';

describe('@penguin/core/Text', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Text>Text</Text>);
    expect(toJSON()).toMatchSnapshot();
  });
});
