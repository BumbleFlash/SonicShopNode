var product=(q,con,res)=>{
	con.query("Select * from product where category= '"+ q.cat+"'",function(err,rows,fields){
		if (err) throw err;
		else{
			res.send(JSON.stringify(rows));
		}
	});
};
module.exports.product=product;