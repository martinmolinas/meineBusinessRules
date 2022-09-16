/*===== export metadata =====
{
  "contextId" : "GL",
  "workspaceId" : "Approved"
}
*/
/*===== business rule definition =====
{
  "id" : "BusinessAction01",
  "type" : "BusinessAction",
  "setupGroups" : [ "BusinessRules" ],
  "name" : "BusinessAction01",
  "description" : null,
  "scope" : "Global",
  "validObjectTypes" : [ ],
  "allObjectTypesValid" : true,
  "runPrivileged" : false,
  "onApprove" : "Never",
  "dependencies" : [ ]
}
*/
/*===== business rule plugin definition =====
{
  "pluginId" : "JavaScriptBusinessActionWithBinds",
  "binds" : [ {
    "contract" : "ManagerBindContract",
    "alias" : "manager",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  }, {
    "contract" : "LoggerBindContract",
    "alias" : "logger",
    "parameterClass" : "null",
    "value" : null,
    "description" : null
  } ],
  "messages" : [ ],
  "pluginType" : "Operation"
}
*/
exports.operation1 = function (manager,logger) {
    var product = manager.getProductHome().getProductByID("LTASalesItem_105130");
    var attribute = manager.getAttributeHome().getAttributeByID("LTAConsumerShortDescription");
    if (attribute == null) {
        logger.info("Attribute not found");
    }
    if (product == null) {
        logger.info("Product not found");
    } else {
        var value = product.getValue(attribute.getID());
        value.setSimpleValue("100");
    }
}