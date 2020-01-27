class Room {
    constructor(name, windows, doors, devices) {
        this.name = name;
        this.windows = windows;
        this.doors = doors;
        this.devices = devices
    }
}

class Device {
    constructor(name, createdOn, isActive) {
        this.name = name;
        this.createdOn = createdOn;
        this.isActive = isActive;
    }
}

module.exports = {
    Room,
    Device
};
