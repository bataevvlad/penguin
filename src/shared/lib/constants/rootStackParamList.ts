import { SCREENS } from "@/shared/lib/constants/screens";

type IRootStackParamList = {
  [SCREENS.Home]: undefined,
  [SCREENS.Settings]: undefined

  // MAIN
  [SCREENS.Core]: undefined
  [SCREENS.Utils]: undefined
  [SCREENS.Chart]: undefined

  // CORE
  [SCREENS.Controls]: undefined
  [SCREENS.CTA]: undefined
  [SCREENS.Inputs]: undefined
  [SCREENS.Styles]: undefined

  // CHARTS
  [SCREENS.LineChart]: undefined
  [SCREENS.BarChart]: undefined

  // OTHERS
  [SCREENS.DragAndDrop]: undefined
}

export default IRootStackParamList
