/* Returns an object if valid json is inputted

   @parameter {String} json
   @return {Object} parsed or {Boolean} false 
*/

module.exports = function isValidJson(json) {
    try {
        return JSON.parse(json);
    } catch (e) {
        return false;
    }
};
