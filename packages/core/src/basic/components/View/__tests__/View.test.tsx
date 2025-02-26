import {render} from '@testing-library/react-native';

import View from '../View';

describe('@penguin/core/View', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<View />);
    expect(toJSON()).toMatchSnapshot();
  });
});
