const rooms =  [
    {
        room: "CR1-100",
        capacity: 6,
        isBusy: false,
        start: null,
        end: null
    },
    {
        room: "CR1-101",
        capacity: 6,
        isBusy: false,
        start: null,
        end: null
    }
];

export const handler = async(event) => {
    return rooms;
};
