var signup=(q,con,res)=>{
	var uid="";
	con.query("Select * from users",function(err,rows,fields){
		uid= rows.length+1;
	
	console.log("Insert into users values("+uid+",'"+q.uname+"','"+q.uemail+"','"+q.upass+"')");
	con.query("Insert into users values("+uid+",'"+q.uname+"','"+q.uemail+"','"+q.upass+"')",function(err,result){
        if (err) throw err;
        else{
        	msg={msg:"Sent"}
        }
        res.json(msg);
	});
});
};
module.exports.signup=signup;