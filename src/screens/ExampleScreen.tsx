import {BaseView, UIText} from "@src/com";
import {MAIN_SCREEN, TStackScreen} from "@src/navigation";
import * as React from "react";
import {ScrollView} from "react-native-gesture-handler";

export const ExampleScreen: TStackScreen<typeof MAIN_SCREEN> = () => {
    return (
        <BaseView>
            <ScrollView>
                <UIText>Example text2</UIText>
            </ScrollView>
        </BaseView>
    );
};
