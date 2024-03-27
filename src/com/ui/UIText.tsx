import {RNFC} from "@src/types";
import {colorscheme} from "@src/utils";
import React from "react";
import {StyleProp, Text, TextProps, TextStyle} from "react-native";

type Props = TextProps & {
    style?: StyleProp<TextStyle>;
};

export const UIText: RNFC<Props> = ({style, children, ...props}) => {
    return (
        <Text style={[{color: colorscheme.black}, style]} {...props}>
            {children}
        </Text>
    );
};
