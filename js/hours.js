// created this script myself to highlight what day of the week it is when the user is browsing 
var days = document.getElementById("today").getElementsByTagName("li");
    var d = new Date();
    var dayOfWeek = d.getDay();
    // ?6 : ternary operator: if day of week = 0, return 6, else then remove 1
    dayOfWeek = dayOfWeek == 0? 6: dayOfWeek - 1;
    days[dayOfWeek].classList.remove('default');
    days[dayOfWeek].classList.add("selected");
