import {render} from '@testing-library/react-native';

import TextInput from '../TextInput';

describe('@penguin/core/TextInput', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<TextInput />);
    expect(toJSON()).toMatchSnapshot();
  });
});
