(function()
{
	var helpers = require("./helpers");
	var ACTIONS_FOLDER = "./actions/";
    var ACTIONS_CONFIG_FILE = "actions.json";
    var PORT = 8080;

	var AWS_CONFIG_FILE = "./config.json";


	var init = function(AWS) {
						var actionsConfig = helpers.readJSONFile(ACTIONS_CONFIG_FILE);
						var actionsConfiguration = {aws:AWS};
            actionsConfig.forEach(function(elem){
	            if(elem.action && elem.path){
		            if(!elem.action.template){
			            elem.action = require(ACTIONS_FOLDER + elem.action).action(actionsConfiguration);
		            }
	            }else {
		            console.log("unknown configuration: " + JSON.stringify(elem));
	            }
            });


        var service = require("webs-weeia").http(actionsConfig);

        service(PORT);
	}


	require("./awshelpers").initAWS(init, AWS_CONFIG_FILE);


})();
