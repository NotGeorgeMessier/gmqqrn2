import {BaseView, ChatMessagesList, ChatSendMessage, UIText, UITouch} from "@src/com";
import {CHAT_SCREENS, NavigationService, TStackScreen} from "@src/navigation";
import {TypeStyle} from "@src/types";
import {IS_IOS} from "@src/utils";
import * as React from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TextStyle,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
} from "react-native";

export const ChatMainScreen: TStackScreen<CHAT_SCREENS.MAIN> = ({
    route: {
        params: {author, nickname},
    },
}) => {
    return (
        <BaseView>
            <View style={styles.row}>
                <UITouch onPress={() => NavigationService.goBack()}>
                    <UIText>goback</UIText>
                </UITouch>
            </View>
            <KeyboardAvoidingView
                behavior={IS_IOS ? "padding" : undefined}
                style={styles.flex1}
                keyboardVerticalOffset={Platform.select({ios: 60, android: 0})}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ChatMessagesList />
                </TouchableWithoutFeedback>
                <ChatSendMessage {...{author, nickname}} />
            </KeyboardAvoidingView>
        </BaseView>
    );
};

const styles = {
    flex1: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
    },
} satisfies TypeStyle<ViewStyle | TextStyle>;
