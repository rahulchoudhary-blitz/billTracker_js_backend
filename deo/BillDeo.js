const BillModel = require("../model/BillModel");

//post function for create and store the data
const createBill = async (lable, amount) => {
  return await BillModel.create({
    lable: lable,
    amount: amount,
  });
};
//GET all data from backend-->
const getAllData = async (page, limit) => {
  const skip = page * limit;
  return await BillModel.find({ isDeleted: false }).limit(limit).skip(skip);
};
//find the id 
const getDataById = async (id) => {
  return await BillModel.findById(id);
};
//Delete data
const findAndDelete = async (id) => {
  return await BillModel.findByIdAndUpdate(id, { isDeleted: true });
};
//search data
// search by text
const searchByText = async (lable) => {
  return await BillModel.find({ lable }).lean();
};
//search by date
const searchByDate = async (from, to) => {
  const result = await BillModel.find({
    createdAt: {
      $gte: from,
      $lte: to,
    },
  });
  return result;
};
//Update Bill fields
//store the old without updated data for history
const oldData = async (id) => {
	const oldBillData = await BillModel.findById(id);
	oldBillData.history = undefined;
	return oldBillData;
  };
  
  const updateBillById = async (data, id) => {
	const oldBillData = await oldData(id);
	const updateBill = await BillModel.findByIdAndUpdate(id, data, {
	  new: true,
	});
	updateBill.history.push(oldBillData);
	await updateBill.save();
	return { oldBillData, updateBill };
  };
//store the csv file
const storeToDb = async (data) => {
  return (storedData = await BillModel.create(data));
};

module.exports = {
  createBill,
  getAllData,
  updateBillById,
  getDataById,
  findAndDelete,
  searchByText,
  searchByDate,
  storeToDb,
};
