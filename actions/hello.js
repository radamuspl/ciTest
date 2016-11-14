var task = function(aws){
    return function(request, callback){
        var template = "helloParamterized";

        callback(null, {template: template, params:{info:"Hello World from code!"}});
    }
}


exports.action = task;
