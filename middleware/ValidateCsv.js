const csv = require("csvtojson");


const validateCSVFile = async (req, res, next) => {
  try {
    const jsonData = await csv().fromFile(req.file.path);
       let allTasks = [];
    jsonData.forEach((element) => {
      let lable = element.lable.trim();
      let amount = element.amount.trim();
    const extractedTask = {
        lable,
        amount,
      };
      allTasks.push(extractedTask);
    });
    req.tasksFromCSV = allTasks;
    return next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = validateCSVFile;
