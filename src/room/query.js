const con = require('../database/database');

createRoomQuery = (room) => {
    const query = "INSERT INTO room (Name, Doors, Windows) VALUES (?, ?, ?)";
    return new Promise((resolve, reject) => {
        con.query(query, [room.Name, room.Doors, room.Windows], (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            };
        });
    });
};

getRoomWithDevicesQuery = (roomId) => {
    let query = `SELECT Room.Name as RoomName, Room.Windows, Room.Doors, Device.Name as DeviceName, Device.CreatedOn, Device.IsActive
     FROM Room LEFT JOIN Device ON Room.Id = Device.RoomId WHERE Room.Id = ?`;
    return new Promise((resolve, reject) => {
        con.query(query, [roomId], (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            };
        });
    });
};

module.exports = {
    createRoomQuery,
    getRoomWithDevicesQuery
};