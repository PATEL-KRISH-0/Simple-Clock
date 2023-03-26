// REPEATING THIS CODE EVERY SECOND FOR ACCURATE TIME
setInterval(() => {

    // VARIABLE DECLARATION 
    let d = document

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;    // + 1 BECAUSE THIS FUNCTION COUNT THE MONTH FROM 0
    let year = date.getFullYear();
    let hours = date.getHours();
    let minit = date.getMinutes();
    let second = date.getSeconds();

    // GETTING ELEMENTS FROM HTNL
    let h_day = d.querySelector(".day");
    let h_month = d.querySelector(".month");
    let h_year = d.querySelector(".year");
    let h_hours = d.querySelector(".hours");
    let h_minit = d.querySelector(".minit");
    let h_second = d.querySelector(".second");

    // PUTTING VALUES INTO AN HTML ELEMENT
    h_day.innerHTML = day
    h_month.innerHTML = month
    h_year.innerHTML = year
    h_hours.innerHTML = hours
    h_minit.innerHTML = minit
    h_second.innerHTML = second
}, 1000);

