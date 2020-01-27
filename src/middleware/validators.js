validateRoom = (req, res, next) => {
    const windows = req.body.Windows;
    const doors = req.body.Doors;

    if (windows == 0 || doors == 0) {
        var error = new Error("Windows or doors can not be zero!");
        error.status = 400;
        next(error)
    }

    if (windows < doors) {
        var error = new Error("Number of windows must be greater than doors!");
        error.status = 400;
        next(error);
    }

    next();
};

validateIsActiveDevice = (req, res, next) => {
    if (!req.body.IsActive) {
        var error = new Error("Device must be active!");
        error.status = 400;
        next(error);
    }

    next();
}

validateDevice = (req, res, next) => {
    let deviceName = req.body.Name;

    if (deviceName.length > 20) {
        var error = new Error("Device name length must be less than 20 chars!");
        error.status = 400;
        next(error);
    }

    newDeviceName = deviceName.replace(/\s+/g, '-');
    const lettersAndDashes = /^[A-Za-z-]+$/;

    if (!newDeviceName.match(lettersAndDashes)) {
        var error = new Error("Device name must contains only letters and dashes!");
        error.status = 400;
        next(error);
    }
    
    req.body.Name = newDeviceName;
    next();
}

module.exports = {
    validateRoom,
    validateIsActiveDevice,
    validateDevice
}