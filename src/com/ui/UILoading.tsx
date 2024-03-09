import {TypeStyle} from "@src/types";
import {colorscheme} from "@src/utils";
import {lottieSrc} from "@src/utils/lottieSrc";
import LottieView from "lottie-react-native";
import React from "react";
import {View, ViewStyle} from "react-native";

type Props = {
    containerStyle?: ViewStyle;
    size?: number;
    borderRadius?: number;
    transparentBackground?: boolean;
};

const DEFAULT_SIZE = 40;

export const UILoading: React.FC<Props> = ({size, containerStyle, borderRadius, transparentBackground}) => {
    const lottieSize = 3 * (size ?? DEFAULT_SIZE);

    const backgroundColor = transparentBackground ? colorscheme.transparent : colorscheme.transparentBg5;

    const conStyle: ViewStyle = {
        ...styles.con,
        backgroundColor,
        borderRadius: borderRadius ?? styles.con.borderRadius,
        ...containerStyle,
    };

    const style: ViewStyle = {
        width: lottieSize,
        height: lottieSize,
    };

    return (
        <View style={conStyle}>
            <LottieView source={lottieSrc.LOADER} autoPlay loop style={style} />
        </View>
    );
};

const styles = {
    con: {
        zIndex: 999,
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
    },
} satisfies TypeStyle<ViewStyle>;
