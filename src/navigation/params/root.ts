import {CHAT_SCREENS, EXAMPLE_SCREENS, MAIN_SCREEN, NEXT_SCREENS} from "../utils";

type ExampleScreensParams = {
    [P in EXAMPLE_SCREENS]: undefined;
};

type NextScreensParams = {
    [P in NEXT_SCREENS]: undefined;
};
type ChatScreensParams = {
    [P in CHAT_SCREENS]: undefined;
};

export type TRootStack = NextScreensParams &
ChatScreensParams &
ExampleScreensParams & {
    [MAIN_SCREEN]: undefined;
};
