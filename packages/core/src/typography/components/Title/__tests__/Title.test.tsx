import {render} from '@testing-library/react-native';

import {Title} from '../Title';

describe('@penguin/core/Header', () => {
  it('renders default correctly', () => {
    const {toJSON} = render(<Title>My Text</Title>);
    expect(toJSON()).toMatchSnapshot();
  });
});
