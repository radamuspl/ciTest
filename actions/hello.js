
var task =    function(request, callback, configuration){
        var template = "helloParamterized.ejs";
        var AWS = configuration.aws;
        var S3 = new AWS.S3();
        S3.listBuckets(function(err, data) {
  if (err) {console.log(err, err.stack); // an error occurred
      callback(null, {template: template, params:{info:"An error occured!"}});}
  else     {callback(null, {template: template, params:{info:"Hello World from code!", buckets: data.Buckets}});}
});
        
    }



exports.action = task;
