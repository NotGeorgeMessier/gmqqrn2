import {RNStackScreen} from "@src/types";

import {TRootStack} from "./root";

export type DefaultScreensParams = {
    [SCREEN_NAME in string]: undefined;
};

export type TStackScreen<Screen extends keyof TRootStack | null = null> = Screen extends keyof TRootStack
    ? RNStackScreen<TRootStack, Screen>
    : RNStackScreen<DefaultScreensParams>;
