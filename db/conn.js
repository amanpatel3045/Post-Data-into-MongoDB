const mongoose = require("mongoose");

const DB = process.env.DATABASE;
// const DB_PASS = process.env.DB_PASS
// console.log(DB, " URL CHECK ");
async function connection() {
  await mongoose.connect(DB);
  console.log(" Connection successful DB Connected ");
  // await mongoose.connect('mongodb://127.0.0.1:27017/address')
}

// export default connection
module.exports = { connection };

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     // useCreateIndex: true,
//     useUnifiedTopology: true,
//     // useFindAndModify: false,
//   })
//   .then(() => {
//     console.log(`connection successfull`);
//   })
//   .catch((err) => console.log(`no connection ${err}`));
