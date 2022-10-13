1==> create Schema --> bill tracker schema 
error--->
1-->   throw new Error(msg);
        ^
    Error: Route.post() requires a callback function but got a [object Undefined] 
solution--->



//post---> add data
//get ---> add data
// put--> update data
// delete--> delete data 
//search data ---> by lable, date
//short_id--> unique id


2.0--pending work-->
update --> deo change
pagination--> work
csv --> work
middleware
helper
comment on code 
  

fronted-->
1--> pagination
2--> table header part
<!-- const addBill = async (req, res) => {
	try {
		const { lable, amount, short_id } = req.body;
		const createdBill = await impFromDeo.createBill(lable, amount, short_id);
		res.status(201).json(createdBill);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}; -->

<!-- const createBill = async (lable, amount, short_id) => {
	return await BillModel.create({
		lable: lable,
		amount: amount,
		short_id: short_id
	});
}; -->