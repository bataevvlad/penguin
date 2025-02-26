import {render} from '@testing-library/react-native';

import ScrollView from '../ScrollView';

describe('@penguin/core/ScrollView', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<ScrollView />);
    expect(toJSON()).toMatchSnapshot();
  });
});
