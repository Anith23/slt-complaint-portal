const mongoose =
require("mongoose");

const bcrypt =
require("bcryptjs");

require("dotenv").config();

const Admin =
require("./models/Admin");

/* CONNECT DB */

mongoose.connect(

  process.env.MONGO_URI

).then(() => {

  console.log(
    "MongoDB Connected"
  );

});

/* CREATE ADMIN */

const createAdmin = async () => {

  try {

    const hashedPassword =
      await bcrypt.hash(

        "admin123",

        10

      );

    const admin =
      new Admin({

        name:
          "System Admin",

        email:
          "aniththaaniththa149@gmail.com",

        password:
          hashedPassword

      });

    await admin.save();

    console.log(
      "Admin Created Successfully"
    );

    process.exit();

  }

  catch (error) {

    console.log(error);

    process.exit();

  }

};

createAdmin();