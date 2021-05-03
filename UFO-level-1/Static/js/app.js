// from data.js
 let ufoSitings = data;

// YOUR CODE HERE!

//select input form and and button
let button = d3.select("#filter-btn")
let form = d3.select(".form-control")

//event handlers
button.on("click", runEnter);
form.on("change", runEnter);

//event handler function
function runEnter(){
    // prevent from refreshing
    d3.event.preventDefault();

    //obtaining user input date
    let inputElement=d3.select(".form-control");
    let inputValue=inputElement.property("value");
    console.log(inputValue);

    //filtering
    let filterSitings = ufoSitings.filter((siting)=> {
        return siting.datetime === inputValue
    })

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

