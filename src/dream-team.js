module.exports = function createDreamTeam(members) {  
  // remove line with error and write your code here
  if (Array.isArray(members)) {
    let result = "";
    members = members.filter(item => typeof item == "string").map(item => item.trim().toUpperCase()).sort();
    for (let item of members) {
      result+=item[0];
    }
    return result;
  } else return false;
};