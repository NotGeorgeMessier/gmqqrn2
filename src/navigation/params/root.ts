import {EXAMPLE_SCREENS, MAIN_SCREEN, NEXT_SCREENS} from "../utils";

type ExampleScreensParams = {
    [P in EXAMPLE_SCREENS]: undefined;
};

type NextScreensParams = {
    [P in NEXT_SCREENS]: undefined;
};

export type TRootStack = NextScreensParams &
ExampleScreensParams & {
    [MAIN_SCREEN]: undefined;
};
