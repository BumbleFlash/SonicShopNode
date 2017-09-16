var cart=(data,con,res)=>{
	var msg="";
	
	con.query("Select * from carts where ProductName='"+data.ProductName+"'and order_history=0 and user='"+data.uemail+"'",function(err,rows,fields){
		var q= data.Quantity;
		console.log("Select * from carts where ProductName='"+data.ProductName+"'and order_history=0 and uemail='"+data.uemail+"')");
		if (err) throw err;
		else
			if(rows.length!=0){
            q=q+rows[0].Quantity;
            console.log(q);
            con.query("Update carts set quantity="+q+" where ProductName='"+data.ProductName+"' and user='"+data.uemail+"'",function(err,result){
            	if (err) throw err;
            	else
            	{
            		msg= {msg:'Added to cart'}
            	}
            });

		}
		else
		{
	        con.query("Insert into carts values('"+data.ProductName+"','',"+data.Price+","+q+",'JUST_ADDED',0,'"+data.uemail+"')",function(err,result){
    	    if (err) throw err;
    	    else{
    		    msg= {msg:'Added to cart'}
    	    }
    	    
            });
	    }
	    res.json(msg);  
});

};
module.exports.cart=cart;
