import {CHAT_SCREENS, EXAMPLE_SCREENS, MAIN_SCREEN, NEXT_SCREENS} from "../utils";

type ExampleScreensParams = {
    [P in EXAMPLE_SCREENS]: undefined;
};

type NextScreensParams = {
    [P in NEXT_SCREENS]: undefined;
};
type ChatScreensParams = {
    [CHAT_SCREENS.LOGIN]: undefined;
    [CHAT_SCREENS.MAIN]: {
        author: string;
        nickname: string;
    };
};

export type TRootStack = NextScreensParams &
ChatScreensParams &
ExampleScreensParams & {
    [MAIN_SCREEN]: undefined;
};
