const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('g7Qsnak9hP', uuidlib.v4());
	}

module.exports = generateId
