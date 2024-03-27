import {BaseView, UIText, UITouch} from "@src/com";
import {CHAT_SCREENS, NavigationService, TStackScreen} from "@src/navigation";
import {TypeStyle} from "@src/types";
import {colorscheme} from "@src/utils";
import * as React from "react";
import {TextInput, TextStyle, View, ViewStyle} from "react-native";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ChatLoginScreen: TStackScreen<CHAT_SCREENS.LOGIN> = () => {
    const [author, setAuthor] = React.useState("");
    const [isValid, setIsValid] = React.useState(true);
    const [nickname, setNickname] = React.useState("");

    const goToChat = () => {
        setIsValid(emailRegex.test(author));
        if (!emailRegex.test(author)) {
            return;
        }

        if (author && nickname) {
            NavigationService.navigate(CHAT_SCREENS.MAIN, {author, nickname});
        }
    };

    return (
        <BaseView style={styles.center}>
            <View style={styles.inputSection}>
                <UIText>Author</UIText>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={colorscheme.grey}
                    style={[styles.input, !isValid && styles.inputErr]}
                    onChangeText={(v) => setAuthor(v)}
                    value={author}
                />
            </View>
            <View style={styles.inputSection}>
                <UIText>Your nickname</UIText>
                <TextInput
                    placeholder="Nickname"
                    placeholderTextColor={colorscheme.grey}
                    multiline
                    style={styles.input}
                    onChangeText={(v) => setNickname(v)}
                    value={nickname}
                />
            </View>
            <UITouch onPress={goToChat} style={styles.next}>
                <UIText>Continue</UIText>
            </UITouch>
        </BaseView>
    );
};

const styles = {
    center: {
        alignItems: "stretch",
        marginTop: 32,
    },
    inputSection: {
        marginBottom: 16,
        marginHorizontal: 16,
    },
    input: {
        color: colorscheme.black,
        width: "100%",
        fontSize: 14,
        lineHeight: 18,
        padding: 8,
        textAlignVertical: "top",
        backgroundColor: colorscheme.white,
        borderRadius: 8,
    },
    inputErr: {
        borderWidth: 2,
        borderColor: colorscheme.red,
    },
    next: {
        backgroundColor: colorscheme.pagBtn,
        padding: 8,
        margin: 16,
        borderRadius: 8,
    },
} satisfies TypeStyle<ViewStyle | TextStyle>;
