// Defintion of Business Rule as function operation1
var operation1 = function (manager,logger) {
    var product = manager.getProductHome().getProductByID("LTASalesItem_105130");
    var attribut = manager.getAttributeHome().getAttributeByID("LTAConsumerShortDescription");
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

// Definition of test function
var test = function(manager) {
    // Definition of needed parameters for execution of operation1 function as objects
    var logger = new Object()
    // If the execution of the function / Business Action was not successful return error message, else return "Success"
    try {
         operation1(manager, logger)
    } catch (e) {
        return e.message;
    }
    return "Success" // muss also immer einen return-Wert geben!
}

// Execution of test function
test(manager)
