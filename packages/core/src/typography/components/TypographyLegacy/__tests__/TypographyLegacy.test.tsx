import {render} from '@testing-library/react-native';

import {TypographyLegacy} from '../TypographyLegacy';

describe('@penguin/core/TypographyLegacy', () => {
  it('renders default correctly', () => {
    const {toJSON} = render(<TypographyLegacy>My Text</TypographyLegacy>);
    expect(toJSON()).toMatchSnapshot();
  });
});
