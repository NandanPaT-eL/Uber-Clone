const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ fullname, email, password, vehicle }) => {
    if (
        !fullname?.firstname || !fullname?.lastname ||
        !email || !password ||
        !vehicle?.color || !vehicle?.plate || !vehicle?.capacity || !vehicle?.vehicleType
    ) {
        throw new Error("All fields are mandatory");
    }

    const captain = await captainModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        }
    });

    return captain;
};
