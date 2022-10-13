const impFromDeo = require('../../deo/BillDeo');
const router = require('express').Router();
const Bill = require('../../model/BillModel')

//add all data to backend
const addTask = async (req, res) => {
	try {
		const { lable, amount } = req.body;
		const createdBill = await impFromDeo.createBill(lable, amount);
		res.status(201).json(createdBill);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
//get all data from backend
const getData = async (req, res) => {
	try {
		let { page, limit } = req.query;
		const paginatedData = await impFromDeo.getAllData(page, limit);
		res.status(200).json(paginatedData);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
//update bill -->
//get all the fields
const getAllFields = async (req, res) => {
	try {
	const fieldsData = await impFromDeo.getDataById(req.params.id);
	  res.status(200).json({
			success: true,
			fieldsData
		});
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};
//update bill-->
const updateWithId = async (req, res) => {
	try {
		const { id } = req.params;
       const { oldBillData, updatedBill } = await impFromDeo.updateBillById (
			req.body,
			id
		);
    res.status(200).json({ success: true, oldBillData, updatedBill });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
};
//search api
//1-->search by text
const searchText = async (req, res) => {
	try {
		const searchData = await impFromDeo.searchByText(req.params.lable);
		res.status(200).json({ success: true, searchData });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
};
//search by date-->
const searchByDate = async (req, res) => {
	try {
		console.log(req.params);

		const searchData = await impFromDeo.searchByDate(
			req.params.from,
			req.params.to
		);
		res.status(200).json({ success: true, searchData });
	} catch (error) {
		console.log(error);
		res.status(400).json(error);
	}
};
// delete all Data-->
const deleteAll = async (req, res) => {
    const deleted = await Bill.deleteMany();
    res.status(200).json({
      meaasge: "all deleted",
    });
  };
//delete data from backend
const deleteBill = async (req, res) => {
	try {
		const deleteData = await impFromDeo.findAndDelete(req.params.id);
		console.log(deleteData);
		res.status(200).json(deleteData);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

router.post('/addtask', addTask);
router.get('/getdata', getData);
router.get('/getDataById/:id', getAllFields);
router.get('/serach/:lable', searchText);
router.get('/serachbydate/:from/:to', searchByDate);
router.put('/update/:id', updateWithId);
router.delete('/delete/:id', deleteBill);
router.delete('/deleteall', deleteAll);

module.exports = router;


 