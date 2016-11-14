var task = function(configuration){
    return function(request, callback){
        var template = "helloParamterized.ejs";
        var aws = configuration.aws;

        callback(null, {template: template, params:{info:"Hello World from code!"}});
    }
}


exports.action = task;
