import firestore from "@react-native-firebase/firestore";
import {ChatMessage, MessageDTO, TypeStyle} from "@src/types";
import {colorscheme} from "@src/utils";
import React, {useCallback, useEffect} from "react";
import {FlatList, ListRenderItem, TextStyle, View, ViewStyle} from "react-native";

import {UIText} from "../ui";

export const ChatMessagesList: React.FC = () => {
    const lref = React.useRef<FlatList<ChatMessage>>(null);
    const [messages, setMessages] = React.useState<ChatMessage[]>([]);
    useEffect(() => {
        const subscriber = firestore()
            .collection("chat")
            .orderBy("createdAt")
            .onSnapshot((q) => {
                const msgs: ChatMessage[] = [];
                q.forEach((d) => {
                    const data = d.data() as MessageDTO;
                    if (d.exists && data.createdAt) {
                        msgs.push({
                            id: d.id,
                            data,
                        });
                    }
                });
                setMessages(msgs);
            });

        return () => subscriber();
    }, []);

    useEffect(() => {
        if (messages.length > 1) {
            const t = setTimeout(() => lref.current?.scrollToEnd(), 300);

            return () => clearTimeout(t);
        }
    }, [messages.length]);

    const renderMessage = useCallback<ListRenderItem<ChatMessage>>(
        ({
            item: {
                data: {nickname, author, message, createdAt},
            },
        }) => {
            return (
                <View style={styles.listItem}>
                    <View style={styles.row}>
                        <UIText style={styles.info}>{nickname}</UIText>
                        <UIText style={styles.info}>{author}</UIText>
                    </View>
                    {!!createdAt && <UIText style={styles.timestamp}>{`${new Date(createdAt.seconds * 1000)}`}</UIText>}
                    <UIText style={styles.msg}>{message}</UIText>
                </View>
            );
        },
        [],
    );

    return (
        <FlatList
            ref={lref}
            contentContainerStyle={styles.list}
            data={messages}
            renderItem={renderMessage}
            keyExtractor={({id}) => id}
        />
    );
};

const styles = {
    list: {
        padding: 16,
    },
    listItem: {
        marginBottom: 16,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    info: {
        color: colorscheme.rating_places.second,
    },
    timestamp: {
        color: colorscheme.transparentBg3,
    },
    msg: {
        color: colorscheme.white,
    },
} satisfies TypeStyle<ViewStyle | TextStyle>;
