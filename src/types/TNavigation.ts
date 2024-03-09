import {NavigationProp, ParamListBase, RouteProp} from "@react-navigation/native";

import {RNFC} from "./TDefault";

export type RNStackScreen<ParamList extends ParamListBase, RouteName extends keyof ParamList = string> = RNFC<{
    route: RouteProp<ParamList, RouteName>;
    navigation: NavigationProp<ParamList>;
}>;
