let currentTime = () => {
    let dd = new Date();
    

    let dayInWeek  = dd.getDay();
    let year = dd.getFullYear();
    let month = dd.getMonth();
    let day = dd.getDate();
    let hours = dd.getHours();
    let minutes = dd.getMinutes();
    let seconds = dd.getSeconds();
    
    switch (month) {
        case 0:
            month = "January"
            break;
        case 1:
            month = "Febuary"
            break;
        case 2:
            month = "March"
            break;        
        case 3:
            month = "April"
            break;            
        case 4:
            month = "May"
            break;                 
        case 5:
            month = "June"
            break;                      
        case 6:
            month = "July"
            break;                          
        case 7:
            month = "August"
                break;                             
        case 8:
            month = "September"
            break;                                 
        case 9:
            month = "October"
            break;
        case 10:
            month = "November"
            break;
        case 11:
            month = "December"
            break;              
        // default:
        //     break;
    }
    switch (dayInWeek) {
        case 0:
            dayInWeek = "Sun"
            break;
        case 1:
            dayInWeek = "Mon"
            break;
        case 2:
            dayInWeek = "Tue"
            break;
        case 3:
            dayInWeek = "Wed"             
            break;
        case 4:
            dayInWeek = "Thur"
            break;  
        case 5:     
            dayInWeek = "Fri"
            break;
        case 6:     
            dayInWeek = "Sat"
            break;
        // default:
        //     break;
    }
    let Period = "AM";
    if (hours == 12) {
        Period = "PM";
    }

    if (hours > 12) {
        hours = hours%12;
        Period = "PM";
    }
    
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    
    document.getElementById('clock').innerHTML = hours + ":" + minutes +":" +seconds+" "+ Period;
    document.getElementById('day').innerHTML = " " + dayInWeek + "";
    document.getElementById('date').innerHTML = month+ ", " +day+ "  " +year;
}

setInterval(currentTime, 1000);