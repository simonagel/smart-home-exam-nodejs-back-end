const query = require("./query");
const {
    Room,
    Device
} = require("../models");

createRoom = async (req, res) => {
    try {
        await query.createRoomQuery(req.body);
        res.status(200).send("Room created!");
    } catch (error) {
        res.status(500).send(error.message);
    };
};

getRoomWithDevices = async (req, res) => {
    roomId = req.params.roomId;
    
    try {
        const result = await query.getRoomWithDevicesQuery(roomId);
        const dbRoom = result[0];
        if (dbRoom) {
            let room = new Room(dbRoom.RoomName, dbRoom.Windows, dbRoom.Doors);
            let devices = result.map(x => {
                if (x.DeviceName != null) {
                    return new Device(x.DeviceName, x.CreatedOn, x.IsActive);
                }
                return null;
            });
            room.devices = devices[0] ? devices : [];
            res.status(200).send(room);
        } else {
            res.status(400).send("Room not found!");
        }
    } catch (error) {
        res.status(500).send(error.message);
    };
}

module.exports = {
    createRoom,
    getRoomWithDevices
}