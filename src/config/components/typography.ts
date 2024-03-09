import {TypeStyle} from "@src/types";
import {TextStyle} from "react-native";

export const TYPOGRAPHY = {
    // Заголовки
    Title_24_Semibold: {
        fontWeight: "600",
        fontSize: 24,
        lineHeight: 28,
    },
    Title_24_Bold: {
        fontWeight: "700",
        fontSize: 24,
        lineHeight: 28,
    },
    Title_24_Heavy: {
        fontWeight: "800",
        fontSize: 24,
        lineHeight: 28,
    },
    Title_20_Regular: {
        fontWeight: "400",
        fontSize: 20,
        lineHeight: 24,
    },
    Title_20_Semibold: {
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 24,
    },
    Title_20_Heavy: {
        fontWeight: "800",
        fontSize: 20,
        lineHeight: 24,
    },
    Title_17_Regular: {
        fontWeight: "400",
        fontSize: 17,
        lineHeight: 22,
    },
    Title_17_Medium: {
        fontWeight: "500",
        fontSize: 17,
        lineHeight: 22,
    },
    Title_17_Semibold: {
        fontWeight: "600",
        fontSize: 17,
        lineHeight: 22,
    },
    Headline_16_Regular: {
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 20,
    },
    Headline_16_Medium: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 20,
    },
    Headline_16_Semibold: {
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 20,
    },
    Text_15_Regular: {
        fontWeight: "400",
        fontSize: 15,
        lineHeight: 20,
    },
    Text_15_Medium: {
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 20,
    },
    Text_15_Semibold: {
        fontWeight: "600",
        fontSize: 15,
        lineHeight: 20,
    },
    Subhead_14_Regular: {
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 18,
    },
    Subhead_14_Medium: {
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 18,
    },
    Subhead_14_Semibold: {
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 18,
    },
    Subhead_14_Bold: {
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 18,
    },
    Caption_13_Regular: {
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 16,
    },
    Caption_13_Medium: {
        fontWeight: "500",
        fontSize: 13,
        lineHeight: 16,
    },
    Caption_13_Semibold: {
        fontWeight: "600",
        fontSize: 13,
        lineHeight: 16,
    },
    Caption_13_Semibold_CAPS: {
        fontWeight: "600",
        fontSize: 13,
        lineHeight: 16,
        textTransform: "uppercase",
    },
    Caption_12_Regular: {
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14,
    },
    Caption_12_Medium: {
        fontWeight: "500",
        fontSize: 12,
        lineHeight: 14,
    },
    Caption_12_Semibold: {
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 14,
    },
    Caption_12_Semibold_CAPS: {
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 14,
        textTransform: "uppercase",
    },
    Caption_11_Regular: {
        fontWeight: "400",
        fontSize: 11,
        lineHeight: 14,
    },
    Caption_11_Regular_CAPS: {
        fontWeight: "400",
        fontSize: 11,
        lineHeight: 14,
        textTransform: "uppercase",
    },
    Caption_11_Semibold_CAPS: {
        fontWeight: "600",
        fontSize: 11,
        lineHeight: 14,
        textTransform: "uppercase",
    },
    Caption_10_Medium: {
        fontWeight: "400",
        fontSize: 10,
    },
    Caption_9_Regular: {
        fontWeight: "400",
        fontSize: 9,
        lineHeight: 12,
    },
    Caption_9_Bold_CAPS: {
        fontWeight: "700",
        fontSize: 9,
        lineHeight: 12,
        textTransform: "uppercase",
    },
} satisfies TypeStyle<TextStyle>;
