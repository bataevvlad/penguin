import {render} from '@testing-library/react-native';

import ButtonWrapper from '../ButtonWrapper';

describe('@penguin/core/Button', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<ButtonWrapper title={'button'} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
