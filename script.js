//add code for window load event
window.addEventListener("load", function()  {

//GET request using fetch
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response)   {
        response.json().then(function(json){
            const astro = document.getElementById("container");
            let display = '';
//add each astronaut to the webpage
//loop through each index in array to display
            for (let i = 0; i < json.length; i++)   {
                display += 
                `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `
            }
            astro.innerHTML = display;

        })
    })

})