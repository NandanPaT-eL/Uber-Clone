const userModel = require('../models/user.model');

module.exports.createUser = async ({
                                       firstname, lastname, email, password
                                   }) => {
    if (!firstname || !email || !password) {
        throw new Error("All these are mandatory fields");
    }

    console.log("fullname:", firstname, lastname);
    console.log("email:", email);
    console.log("password:", password);

    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });
    await user.save();
    return user;
};
