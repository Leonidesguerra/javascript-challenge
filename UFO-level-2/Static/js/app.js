// from data.js
let ufoSitings = data;

// YOUR CODE HERE!

//select input form and and button
let button = d3.select("#filter-btn");
let form = d3.select(".form-control");

//selecting from dropdown menu
let datetime = d3.select("#datetime");
let city = d3.select("#city");
let state = d3.select("#state");
let country = d3.select("#country");
let shape = d3.select("#shape");


//event handlers for input form
button.on("click", runEnter);
form.on("change", runEnter);
let selection="no selection yet";
d3.select("span").text(selection)


// event handlers for dropdwon menu
datetime.on("click", function(){
   d3.select("span").text("Date");
   return(selection="datetime");
});

city.on("click", function(){
    d3.select("span").text("City");
    return(selection="city");
});

state.on("click", function(){
    d3.select("span").text("State");
    return(selection="state");
});


country.on("click", function(){
    d3.select("span").text("Country");
    return(selection="country");
});


shape.on("click", function(){
    d3.select("span").text("Shape");
    return(selection="shape");
});


//event handler function
function runEnter(){
    // prevent from refreshing
    d3.event.preventDefault();
    console.log(selection);
    //obtaining user input date
    let inputElement=d3.select(".form-control");
    let inputValue=inputElement.property("value");
    
    //console.log(inputValue);

    //filtering
    if (selection === "datetime"){
        filterSitings = ufoSitings.filter((siting)=> {
            return siting.datetime === inputValue;
        })

    } else if(selection=== "city"){
        filterSitings = ufoSitings.filter((siting)=> {
            return siting.city === inputValue;
        })
    } else if(selection=== "state"){
        filterSitings = ufoSitings.filter((siting)=> {
            return siting.state === inputValue;
        }) 
    } else if(selection=== "country"){
        filterSitings = ufoSitings.filter((siting)=> {
            return siting.country === inputValue;
        })

    } else if(selection=== "shape"){
        filterSitings = ufoSitings.filter((siting)=> {
            return siting.shape === inputValue;
        })
    }  



    

    let tbody= d3.select("tbody");
    tbody.html("");
    filterSitings.forEach((siting)=>{
        let newtr=tbody.append("tr");
        newtr.append("td").text(`${siting.date}`)
        newtr.append("td").text(`${siting.city}`)
        newtr.append("td").text(`${siting.state}`)
        newtr.append("td").text(`${siting.country}`)
        newtr.append("td").text(`${siting.shape}`)
        newtr.append("td").text(`${siting.duration}`)
        newtr.append("td").text(`${siting.comments}`)
    })
    


}

