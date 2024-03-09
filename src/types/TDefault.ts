import * as React from "react";
import {ColorValue, OpaqueColorValue} from "react-native";

export type TypePicture = ReturnType<typeof require>;
export type TypeInterval = ReturnType<typeof setInterval>;
export type TypeTimeout = ReturnType<typeof setTimeout>;

export type TypeID = number;

export type TNullable<T> = T | null;

type DefaultProps = Record<string, any>;

export type RNFC<Props = DefaultProps> = React.FC<{children?: React.ReactNode} & Props>;

export type RNModal<T = DefaultProps> = RNFC<
{
    visible: boolean;
    onClose: () => void;
} & T
>;
export type TypePrimitive = string | number | boolean | null | undefined;
export type TypeEmail = string;
export type TypePhone = string;
export type TypePassword = string;
export type TypeImageURI = string;
/** Dumb implementation of string color types */
export type TypeColor = Exclude<ColorValue, OpaqueColorValue>;
export type TypeGradient = [TypeColor, TypeColor] | [TypeColor, TypeColor, TypeColor];
