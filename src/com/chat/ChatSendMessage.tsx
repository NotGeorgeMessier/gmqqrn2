import firestore from "@react-native-firebase/firestore";
import {MessageDTO, TypeStyle} from "@src/types";
import {_random, colorscheme} from "@src/utils";
import React from "react";
import {Keyboard, TextInput, TextStyle, View, ViewStyle} from "react-native";

import {UIText, UITouch} from "../ui";

const sendMessage = ({author, nickname, message}: Partial<MessageDTO>) => {
    firestore().collection("chat").add({
        author,
        createdAt: firestore.FieldValue.serverTimestamp(),
        nickname,
        message,
    });
};

type Props = Omit<MessageDTO, "message" | "createdAt">;

export const ChatSendMessage: React.FC<Props> = ({author, nickname}) => {
    const [text, setText] = React.useState("");

    return (
        <View style={styles.area}>
            <TextInput
                placeholder="Input text"
                placeholderTextColor={colorscheme.grey}
                multiline
                style={styles.input}
                onChangeText={(v) => setText(v)}
                value={text}
            />
            <UITouch
                onPress={() => {
                    Keyboard.dismiss;
                    setText("");
                    sendMessage({
                        author,
                        nickname,
                        message: `random number is ${_random()} + ${text}`,
                    });
                }}
            >
                <UIText style={styles.textCenter}>add message</UIText>
            </UITouch>
        </View>
    );
};

const styles = {
    area: {
        marginBottom: 16,
    },
    input: {
        color: colorscheme.black,
        margin: 4,
        fontSize: 14,
        lineHeight: 16,
        padding: 2,
        height: 36,
        textAlignVertical: "top",
        backgroundColor: colorscheme.white,
        borderRadius: 8,
    },
    textCenter: {
        textAlign: "center",
    },
} satisfies TypeStyle<ViewStyle | TextStyle>;
