import {MAIN_SCREEN, NEXT_SCREENS} from "../utils";

type NextScreensParams = {
    [P in NEXT_SCREENS]: undefined;
};

export type TRootStack = NextScreensParams & {
    [MAIN_SCREEN]: undefined;
};
