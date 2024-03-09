import {RNFC} from "@src/types";
import React from "react";
import {StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle} from "react-native";

type Props = TouchableOpacityProps & {
    style?: StyleProp<ViewStyle>;
};

export const UITouch: RNFC<Props> = ({onPress, style, children, ...props}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={style}
            {...props}
        >
            {children}
        </TouchableOpacity>
    );
};
