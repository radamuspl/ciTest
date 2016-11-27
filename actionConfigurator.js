module.exports.configurator = function(action, configuration) {
    return function(err, callback){
        action(err, callback, configuration);
    }
}