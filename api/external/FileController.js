const csv = require('csvtojson');
const { storeToDb } = require('../../deo/BillDeo');
const validateCSVFile =require('../../middleware/ValidateCsv');
const multer  = require('multer');
const router = require('express').Router();
const upload = multer({ dest: 'upload/csv/' });

const uploadCSVFile = async (req,res)=>{
 try{
	console.log(req.file);
	const createdData = await storeToDb(req.tasksFromCSV);
	res.status(200).json(createdData);

 }catch(err){
	console.log(err);
	return res.status(401).json({message:err});
 }
}
router.post('/uploadcsv',upload.single('file'),validateCSVFile,uploadCSVFile);

module.exports = router;
