import {ScrollView, useStyles} from '@/shared/ui';
import getScreenStyles from '@/shared/styles/getScreenStyles';
import NavigationButton from '@/shared/ui/NavigationButton';
import {SCREENS} from '@/shared/lib/constants/screens';
import {move} from '@/shared/lib/navigationRef';

const CoreScreen = () => {
  const [styles] = useStyles(getScreenStyles);

  return (
    <ScrollView contentContainerStyle={[styles.container, {flex: undefined}]}>
      <NavigationButton
        text={SCREENS.Controls}
        onPress={move(SCREENS.Controls)}
      />
      <NavigationButton text={SCREENS.CTA} onPress={move(SCREENS.CTA)} />
      <NavigationButton text={SCREENS.Styles} onPress={move(SCREENS.Styles)} />
    </ScrollView>
  );
};

export default CoreScreen;
