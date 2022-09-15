var step = require("../business-rules-testability/step.js");
// var businessRuleModule = require("../meineBusinessRules/meineAction.js"); // var businessRuleModule = require("../meineBusinessRules/BusinessAction01.js");
var businessRuleModule = require("../meineBusinessRules/BusinessAction01.js");

/*
// als beide noch im selben Ordner waren bei /business-rules-testability/examples
var step = require("../step.js");
var businessRuleModule = require("./BusinessAction01.js");
*/

console.log("--------------------------------\n");
console.log(">>>>> BusinessAction01Test >>>>>\n");
console.log("--------------------------------\n");
step.test(function (manager) {
    var product = manager.getProductHome().getProductByID("LTASalesItem_105130"); //LTASalesItem_105130 100002
    var attribute = manager.getAttributeHome().getAttributeByID("LTAConsumerShortDescription"); // 
    var logger = new Object();
    var oldValue = product.getValue(attribute.getID()).getSimpleValue();
    if (oldValue != "0") {
        return "Failure, couldn't prepare test case";
    }

    businessRuleModule.operation1(manager,logger);

    var newValue = product.getValue(attribute.getID()).getSimpleValue();
    if (newValue == "100") {
        return "Success\n";
    } else {
        return "Failure (returned value: \"" + value + "\")\n";
    }
}, ["businessRuleModule", businessRuleModule], []);
