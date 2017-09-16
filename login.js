var login =(q,con,res)=>{
	var msg="";
	con.query("Select * from users where uemail='"+q.uemail+"' and upassword='"+q.upass+"'",function(err,rows,fields){
          if (err) throw err;
          else{
          	if(rows.length>0)
             msg= {msg:'Thanks,login info is correct'}
            else
             msg= {msg:'Wrong credentials'}

         res.json(msg);

          }
	});

};
module.exports.login=login