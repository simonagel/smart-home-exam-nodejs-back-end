const con = require("../database/database");

createDeviceQuery = (device, roomId) => {
    let query = "INSERT INTO Device (Name, CreatedOn, IsActive, DeviceTypeId, RoomId, ActionId) VALUES (?, NOW(), ?, ?, ?, ?)";
    return new Promise((resolve, reject) => {
        con.query(query, [device.Name, device.IsActive, device.DeviceTypeId, roomId, device.ActionId], (error, results, fields) => {
            if (error) {
                // here you can check error number for mor specific error message
                // (Ex. errno==1452 is for failed foreign key constraint)
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

getAllDevicesQuery = () => {
    let query = "SELECT * FROM Device";
    return new Promise((resolve, reject) => {
        con.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

getSpecificDeviceQuery = (deviceId) => {
    let query = `SELECT Device.Name as Name, Device.CreatedOn, Device.IsActive, Room.Name as Room, DeviceType.Name as DeviceType FROM Device
                JOIN Room ON device.RoomId = room.Id
                JOIN devicetype ON device.deviceTypeId = devicetype.Id 
                WHERE Device.Id = ?;`
    return new Promise((resolve, reject) => {
        con.query(query, [deviceId], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

updateDeviceActionQuery = (deviceId, actionId) => {
    let query = "UPDATE Device SET ActionId = ? WHERE Id = ?";
    return new Promise((resolve, reject) => {
        con.query(query, [actionId, deviceId], (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve(results);
            }
        });
    });
}

updateDeviceQuery = (deviceId, device) => {
    let query = "UPDATE Device SET Name = ?, RoomId = ?, DeviceTypeId = ? WHERE Id = ?";
    return new Promise((resolve, reject) => {
        con.query(query, [device.Name, device.RoomId, device.DeviceTypeId, deviceId], (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    createDeviceQuery,
    getAllDevicesQuery,
    getSpecificDeviceQuery,
    updateDeviceActionQuery,
    updateDeviceQuery
}