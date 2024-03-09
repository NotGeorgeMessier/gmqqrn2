import {ImageStyle, TextStyle, ViewStyle} from "react-native";

export type TypeStyle<T extends ViewStyle | TextStyle | ImageStyle> = Record<string, T>;
export type TypeEitherOrBoth<T1, T2> = T1 | T2 | (T1 & T2);
export type Unite<Base extends Record<string, any>, Specified extends Record<string, any>> = Omit<
Base,
keyof Specified
> &
Specified;
