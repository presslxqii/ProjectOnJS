var currentDate = new Date();
 
global.date = currentDate;
 
module.exports.getMessage = function(){
    var hour = currentDate.getHours();
    if(hour >16)
        return "Добрый вечер, " + test123;
    else if(hour >10)
        return "Добрый день, " + test123;
    else
        return "Доброе утро, " + test123;
}