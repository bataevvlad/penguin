import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {SCREENS} from '@/shared/lib/constants/screens';
import IRootStackParamList from '@/shared/lib/constants/rootStackParamList';
import {Button, IButtonSize, IButtonTypes, SimpleIcon} from '@/shared/ui';
import {move, navigationRef} from '@/shared/lib/navigationRef';
import {useNavigationTheme} from '@/shared/lib/hooks/useNavigationTheme';
import SettingsScreen from '@/pages/MainStack/Settings/ui';
import HomeScreen from '@/pages/MainStack/Home/ui';
import CoreScreen from '@/pages/MainStack/Home/Core/ui';
import UtilsScreen from '@/pages/MainStack/Home/Utils/ui';
import ChartScreen from '@/pages/MainStack/Home/Chart/ui';
import LineChartScreen from '@/pages/MainStack/Home/Chart/LineChart/ui';
import BarChartScreen from '@/pages/MainStack/Home/Chart/BarChart/ui';
import ControlsScreen from '@/pages/MainStack/Home/Core/Controls/ui';
import StylesScreen from '@/pages/MainStack/Home/Core/Styles/ui';
import CTAScreen from '@/pages/MainStack/Home/Core/CTA/ui';

const Stack = createNativeStackNavigator<IRootStackParamList>();

const MainStack = () => {
  const theme = useNavigationTheme();

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator
        screenOptions={() => {
          return {
            headerRight: () => {
              return (
                <Button
                  onPress={move(SCREENS.Settings)}
                  size={IButtonSize.small}
                  type={IButtonTypes.tertiary}
                  rightIcon={<SimpleIcon name={'icon-settings'} />}
                />
              );
            },
          };
        }}>
        <Stack.Screen name={SCREENS.Home} component={HomeScreen} />
        <Stack.Screen name={SCREENS.Settings} component={SettingsScreen} />

        <Stack.Group>
          <Stack.Screen name={SCREENS.Core} component={CoreScreen} />
          <Stack.Screen name={SCREENS.Utils} component={UtilsScreen} />
          <Stack.Screen name={SCREENS.Chart} component={ChartScreen} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name={SCREENS.Controls} component={ControlsScreen} />
          <Stack.Screen name={SCREENS.CTA} component={CTAScreen} />
          <Stack.Screen name={SCREENS.Styles} component={StylesScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name={SCREENS.LineChart} component={LineChartScreen} />
          <Stack.Screen name={SCREENS.BarChart} component={BarChartScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
