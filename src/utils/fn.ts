/* eslint-disable no-console */

export const isEmpty = (obj: object) => {
    for (const key in obj) {
        return false;
    }

    return true;
};

export function generateRandomEmail() {
    let result = "";

    let characters = "abcdefghijklmnopqrstuvwxyz";
    let charactersLength = characters.length;
    let i;
    for (i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    characters = "0123456789";
    charactersLength = characters.length;
    for (i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return `${result}@dragon.family`;
}

export function generateRandomPassword() {
    let result = "";

    const characters = "0123456789";
    const charactersLength = characters.length;
    let i;
    for (i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export const qq = (...args: any) => console.log("qq", ...args);
export const qqw = (...args: any) => console.warn("wqqw", ...args);
export const qqe = (...args: any) => console.error("eqqe", ...args);
/** console.log with switcher on/off in first arg (for debug only) */
export const aqq = (enable?: any, ...args: any) => (enable ? console.log("aqq", ...args) : void 0);

/** JSON stringify */
export const stringify: (src: any, spaceChars?: number) => string = (src, spaceChars) =>
    spaceChars ? JSON.stringify(src, null, spaceChars) : JSON.stringify(src);

/** JSON parse */
export const parseTo: <T>(src: string) => T | {invalidJSON: string} = (src) => {
    try {
        return JSON.parse(src);
    } catch {
        return {invalidJSON: src};
    }
};

export const _random = () => Number(Math.random()).toPrecision(5);

export const _range: (src: number) => number[] = (src) => new Array(Math.round(Number(src))).fill(0).map((_, i) => i);

export const _round: (src: number, fractionSigns?: number) => number = (src, fractionSigns) =>
    fractionSigns ? Math.round(src * 10 ** fractionSigns) / 10 ** fractionSigns : Math.round(Number(src));

/** modifyes 5 to '05' for example */
export const _prettifyNumber = (src: number, maxChars = 2): string => {
    const charDiff = maxChars - String(src).length;

    return charDiff > 0 ? `${_range(charDiff).fill(0).join("")}${src}` : String(src);
};
