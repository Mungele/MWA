//Fix the slow function to be asynchronous/non-blocking

function slow(callback){
	console.log("In slow ");
    setTimeout(function(){
        if(Math.random() > 0.5){
            return callback("Error", null);
        }
        callback(null, {id:12345})
    }, 500);
	
}

function exec(fn){
    //My Code
    
    fn((err, data) => err == null?done(data):fail(err));
    function done(data){};
    function fail(err){};
    return{
        done:function(func){done=func; return this;},
        fail:function(func){fail=func; return this;}
    }
}

//Test Code
exec(slow).done(function(data){console.log(data);})
          .fail(function(err){console.log("Error: " + err);});