///copy and paste in all lambda functions
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

//GET Method
//Replace function name handler_getAllRooms by handler --> export const handler = async(event) => {
//Function for getting all rooms
export const handler_getAllRooms = async(event) => {
    return rooms;
};

//Get method
//Replace function name handler_GetRoom by handler --> export const handler = async(event) => {
//function for getting a specific room
export const handler_GetRoom = async(event) => {
    let room = rooms.filter(item => item.room === event.roomName);

    if (room.length > 0){
        return room;
    }else
        return { success: false, message: 'Room not found' };
};

//POST method
//Replace function name handler_create_a_room by handler --> export const handler = async(event) => {
//function to insert a room
export const handler_create_a_room = async(event) => {
    if (event.room === undefined || event === null || event.length === 0 || event === ''){
        return { success: false, message: 'Must provide the room info to save it.' };
    }

    let room = rooms.filter(item => item.room === event.room);
    if (room.length > 0){
        return { success: false, message: 'The room is already stored. Specify another one.' };
    }

    let newRoom = {
        room: event.room,
        capacity: parseInt(event.capacity),
        isBusy: false,
        start: null,
        end: null
    };
    rooms.push(newRoom);
    return rooms;
};


//PATCH method
//Replace function name handler_update_a_room by handler --> export const handler = async(event) => {
//funtion for updating a room
export const handler_update_a_room = async(event) => {
    if (event.room === undefined || event === null || event.length === 0 || event === ''){
        return { success: false, message: 'Must provide the room info to save it.' };
    }

    const index = rooms.findIndex(x => x.room === event.room);
    if (index === undefined || index === -1){
        return { success: false, message: 'The room does not exist. Specify a room that is already stored.' };
    }
    rooms.splice(index, 1);

    let newRoom = {
        room: event.room,
        capacity: parseInt(event.capacity),
        isBusy: event.isBusy,
        start: event.start,
        end: event.end
    };
    rooms.push(newRoom);
    return rooms;
};


//DELETE method
//Replace function name handler_delete_a_room by handler --> export const handler = async(event) => {
//function for deleting a room
export const handler = async(event) => {
    if (event.roomName === undefined || event.roomName === null || event.roomName.length === 0){
        return { success: false, message: 'Must provide the room to delete it.' };
    }

    const index = rooms.findIndex(x => x.room === event.roomName);
    if (index === undefined || index === -1){
        return { success: false, message: 'The room does not exist. Specify a room that is already stored.' };
    }
    rooms.splice(index, 1);
    return {sucess:true, message: 'Room has been deleted successfully.', room: event.roomName};
};


//UPDATE Method
//Replace function name handler_update_rooms by handler --> export const handler = async(event) => {
//function fo updating rooms
export const handler_update_rooms = async(event) => {
    if (event === undefined || event === null || event.length === 0 || event === ''){
        return { success: false, message: 'Must provide the rooms info to save them.' };
    }

    let tempRooms=[];
    event.forEach(element => {
        let newRoom = {
            room: element.room,
            capacity: parseInt(element.capacity),
            isBusy: element.isBusy,
            start: element.start,
            end: element.end
        };    
        tempRooms.push(newRoom);
    });
    
    rooms.splice(0, rooms.length);
    tempRooms.forEach(element => {
        rooms.push(element);
    });
    return rooms;
};