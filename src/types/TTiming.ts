export type TypeTimingsTuple = [singular: string, plural: string];

export type TypeTimings = {
    w: TypeTimingsTuple;
    d: TypeTimingsTuple;
    h: TypeTimingsTuple;
    m: TypeTimingsTuple;
    s: TypeTimingsTuple;
    ms: TypeTimingsTuple;
};

export type TypeStringDate = `${number}-${number}-${number}`;

export type WeekDayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type WeekDay = {
    index: WeekDayNumber;
    name: string;
    shortname: string;
    date: string;
    fullDate: TypeStringDate;
    isToday?: boolean;
    isFuture?: boolean;
};
