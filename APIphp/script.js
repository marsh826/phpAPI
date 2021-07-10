window.onload = function() {
    checkLoginStatus();
    localStorage.setItem('profileImage', 'none');
    localStorage.setItem('backgroundImage', 'none');
    localStorage.setItem('font', 'default');
    localStorage.setItem('backgroundColour', 'default');
}

function checkLoginStatus() {
    fetch('api.php?action=loginstatus',{
        method: 'GET',
        credentials: "include",
    }).then(function(response){
        if(response.status == 202){
            console.log('Status: Logged In');
            localStorage.setItem('userStatus', 'logged in');
            openProfile();
            postDisplayProfile();
        }
        if(response.status == 401) {
            console.log('Status: Logged Out');
            localStorage.setItem('userStatus', 'logged out');
            openLogin();
        }
    })
}
function openRegister() {
    document.getElementById("mainpage").style.display = 'none';
    document.getElementById("indexpage").style.display = 'none';
    document.getElementById("registerpage").style.display = 'block';
    document.getElementById("updatepage").style.display = 'none';
    document.getElementById("moviepage").style.display = 'none';
    document.getElementById("favouritelistpage").style.display = 'none';
    document.getElementById("moviesessionpage").style.display = 'none';
    document.getElementById("seatspage").style.display = 'none';
    document.getElementById("ticketpage").style.display = 'none';
    document.getElementById("updateticketpage").style.display = 'none';
    document.getElementById("updateseatpage").style.display = 'none';
}

function openLogin() {
    document.getElementById("mainpage").style.display = 'none';
    document.getElementById("indexpage").style.display = 'block';
    document.getElementById("registerpage").style.display = 'none';
    document.getElementById("updatepage").style.display = 'none';
    document.getElementById("moviepage").style.display = 'none';
    document.getElementById("favouritelistpage").style.display = 'none';
    document.getElementById("moviesessionpage").style.display = 'none';
    document.getElementById("seatspage").style.display = 'none';
    document.getElementById("ticketpage").style.display = 'none';
    document.getElementById("updateticketpage").style.display = 'none';
    document.getElementById("updateseatpage").style.display = 'none';
}

function openUpdate() {
    document.getElementById("mainpage").style.display = 'none';
    document.getElementById("indexpage").style.display = 'none';
    document.getElementById("registerpage").style.display = 'none';
    document.getElementById("updatepage").style.display = 'block';
    document.getElementById("moviepage").style.display = 'none';
    document.getElementById("favouritelistpage").style.display = 'none';
    document.getElementById("moviesessionpage").style.display = 'none';
    document.getElementById("seatspage").style.display = 'none';
    document.getElementById("ticketpage").style.display = 'none';
    document.getElementById("updateticketpage").style.display = 'none';
    document.getElementById("updateseatpage").style.display = 'none';
}

function openProfile() {
    document.getElementById("mainpage").style.display = 'block';
    document.getElementById("indexpage").style.display = 'none';
    document.getElementById("registerpage").style.display = 'none';
    document.getElementById("updatepage").style.display = 'none';
    document.getElementById("moviepage").style.display = 'none';
    document.getElementById("favouritelistpage").style.display = 'none';
    document.getElementById("moviesessionpage").style.display = 'none';
    document.getElementById("seatspage").style.display = 'none';
    document.getElementById("ticketpage").style.display = 'none';
    document.getElementById("updateticketpage").style.display = 'none';
    document.getElementById("updateseatpage").style.display = 'none';
}

function openMovies() {
    document.getElementById("mainpage").style.display = 'none';
    document.getElementById("indexpage").style.display = 'none';
    document.getElementById("registerpage").style.display = 'none';
    document.getElementById("updatepage").style.display = 'none';
    document.getElementById("moviepage").style.display = 'block';
    document.getElementById("favouritelistpage").style.display = 'none';
    document.getElementById("moviesessionpage").style.display = 'none';
    document.getElementById("seatspage").style.display = 'none';
    document.getElementById("ticketpage").style.display = 'none';
    document.getElementById("updateticketpage").style.display = 'none';
    document.getElementById("updateseatpage").style.display = 'none';
}

function openFavourites() {
    document.getElementById("mainpage").style.display = 'none';
    document.getElementById("indexpage").style.display = 'none';
    document.getElementById("registerpage").style.display = 'none';
    document.getElementById("updatepage").style.display = 'none';
    document.getElementById("moviepage").style.display = 'none';
    document.getElementById("favouritelistpage").style.display = 'block';
    document.getElementById("moviesessionpage").style.display = 'none';
    document.getElementById("seatspage").style.display = 'none';
    document.getElementById("ticketpage").style.display = 'none';
    document.getElementById("updateticketpage").style.display = 'none';
    document.getElementById("updateseatpage").style.display = 'none';
}

function openSessions() {
    document.getElementById("mainpage").style.display = 'none';
    document.getElementById("indexpage").style.display = 'none';
    document.getElementById("registerpage").style.display = 'none';
    document.getElementById("updatepage").style.display = 'none';
    document.getElementById("moviepage").style.display = 'none';
    document.getElementById("favouritelistpage").style.display = 'none';
    document.getElementById("moviesessionpage").style.display = 'block';
    document.getElementById("seatspage").style.display = 'none';
    document.getElementById("ticketpage").style.display = 'none';
    document.getElementById("updateticketpage").style.display = 'none';
    document.getElementById("updateseatpage").style.display = 'none';
}

function openSeats() {
    document.getElementById("mainpage").style.display = 'none';
    document.getElementById("indexpage").style.display = 'none';
    document.getElementById("registerpage").style.display = 'none';
    document.getElementById("updatepage").style.display = 'none';
    document.getElementById("moviepage").style.display = 'none';
    document.getElementById("favouritelistpage").style.display = 'none';
    document.getElementById("moviesessionpage").style.display = 'none';
    document.getElementById("seatspage").style.display = 'block';
    document.getElementById("ticketpage").style.display = 'none';
    document.getElementById("updateticketpage").style.display = 'none';
    document.getElementById("updateseatpage").style.display = 'none';
}

function openYourTicket() {
    document.getElementById("mainpage").style.display = 'none';
    document.getElementById("indexpage").style.display = 'none';
    document.getElementById("registerpage").style.display = 'none';
    document.getElementById("updatepage").style.display = 'none';
    document.getElementById("moviepage").style.display = 'none';
    document.getElementById("favouritelistpage").style.display = 'none';
    document.getElementById("moviesessionpage").style.display = 'none';
    document.getElementById("seatspage").style.display = 'none';
    document.getElementById("ticketpage").style.display = 'block';
    document.getElementById("updateticketpage").style.display = 'none';
    document.getElementById("updateseatpage").style.display = 'none';
}

function openUpdateTicket() {
    document.getElementById("mainpage").style.display = 'none';
    document.getElementById("indexpage").style.display = 'none';
    document.getElementById("registerpage").style.display = 'none';
    document.getElementById("updatepage").style.display = 'none';
    document.getElementById("moviepage").style.display = 'none';
    document.getElementById("favouritelistpage").style.display = 'none';
    document.getElementById("moviesessionpage").style.display = 'none';
    document.getElementById("seatspage").style.display = 'none';
    document.getElementById("ticketpage").style.display = 'none';
    document.getElementById("updateticketpage").style.display = 'block';
    document.getElementById("updateseatpage").style.display = 'none';
}

function openSeatsUpdt() {
    document.getElementById("mainpage").style.display = 'none';
    document.getElementById("indexpage").style.display = 'none';
    document.getElementById("registerpage").style.display = 'none';
    document.getElementById("updatepage").style.display = 'none';
    document.getElementById("moviepage").style.display = 'none';
    document.getElementById("favouritelistpage").style.display = 'none';
    document.getElementById("moviesessionpage").style.display = 'none';
    document.getElementById("seatspage").style.display = 'none';
    document.getElementById("ticketpage").style.display = 'none';
    document.getElementById("updateticketpage").style.display = 'none';
    document.getElementById("updateseatpage").style.display = 'block';
}
// ------------------------------------------------------LOGIN FUNCTION--------------------------------------------------
function postLogin() {
    var authentication = {
        'username': document.getElementById("username").value,
        'password': document.getElementById("password").value
    }
    fetch('api.php?action=login',{
        method: "POST",
        body: JSON.stringify(authentication),
        credentials: 'include',
    })
    .then(function(response){    
        if(response.status === 403) {
            console.log('forbidden');
            return;
        }
        if(response.status === 202) {
            console.log('success');
            document.getElementById('mainpage').style.display = 'block';
            document.getElementById('indexpage').style.display = 'none';
            localStorage.setItem('userStatus', 'logged in');
            console.log('Status: Logged In');
            // document.getElementById('login-form').reset();
            postDisplayProfile();
            return;
        }
        // Send back error into console log
        response.text().then((text) => {
            console.log(text)
        })
    })
    return false;
}
// -----------------------------------------------------LOGOUT FUNCTION--------------------------------------------------------------------------------------------------------
function postLogOut() {
    fetch('api.php?action=logout',{
        method: "POST",
        credentials: 'include'
    })
    .then(function(response){    
        if(response.status === 202) {
            console.log('success');      
            localStorage.setItem('userStatus', 'logged out');
            console.log('Status: Logged Out');
            document.getElementById('mainpage').style.display = 'none';
            document.getElementById('indexpage').style.display = 'block';
            return;
        }
    })
    return false;
}
// -------------------------------------------postRegister------------------------------------------------------------------------------------
function postRegister() {
    var registration = {
        // Retrieving inserted value from Registartion form
        'UsernameReg': document.getElementById("UsernameReg").value,
        'PasswordReg': document.getElementById("PasswordReg").value,
        'FirstName': document.getElementById("FirstName").value,
        'LastName': document.getElementById("LastName").value,
        'DateOfBirth': document.getElementById("DateOfBirth").value,
        'Email': document.getElementById("Email").value,
        'Phone': document.getElementById("Phone").value
    }
    fetch('api.php?action=register',{
        method: "POST",
        body: JSON.stringify(registration),
        credentials: 'include',
    })
    .then(function(response) {
        // If the form was not fully filled in 
        if(response.status === 406){
            console.log('unaccepted');
            console.log('Form not fully filled');
            return;
        }
        if(response.status === 202) {
        // If the form was fully filled in and data was successfully inserted
            console.log('success');
            document.getElementById('registerform').reset();
            document.getElementById('registerpage').style.display = 'none';
            document.getElementById('indexpage').style.display = 'none';
            document.getElementById('mainpage').style.display = 'block';
            postDisplayProfile();
            return;
        }
        // Send back error into console log
        response.text().then((text) => {
            console.log(text)
        });
    })
    return false;
}
// --------------------------------------------User Display---------------------------------------------------------------------------------
function postDisplayProfile() {
    // Prepare the output
    var output = '';
    var output2 = '';
    fetch('api.php?action=displayprofile',{
        method: "GET",
        credentials: "include"
    })
    .then(function(response) {
        response.json().then(function(data) {
            console.log(data)
            // Display data as output
            data.forEach(row => {
            // User Profile JSON Output
                output =
                    `<div><h3>UserName<h3></div>` + row.UserName +
                    `<div><br><h3>First Name<h3></div>` + row.FirstName +
                    `<div><br><h3>Last Name<h3></div>` + row.LastName +
                    `<div><br><h3>Date Of Birth<h3></div>` + row.DateOfBirth +
                    `<div><br><h3>Email<h3></div>` + row.Email +
                    `<div><br><h3>Phone<h3></div>` + row.Phone +
                    `<div></div>`

                output2 = 
                    `<div>
                        <button type="button" onclick="postDeleteProfile(`+ row.UserID +`)">Delete Account</button>
                    </div>`
            })
            document.getElementById('profilesection').innerHTML = output;
            document.getElementById('delete-profile').innerHTML = output2;
        })
    })
    return false;
}
// -------------------------------------DELETE PROFILE FUNCTION-----------------------------------------------------------------------------
function postDeleteProfile(id) {
    var IDuser = {
        'userid' : id
    }
    fetch('api.php?action=deleteprofile',{
        // The function applies DELETE method. It will delete the users account along with all its details from the database.
        method: "POST",
        body: JSON.stringify(IDuser),
        credentials: 'include'
    })
    .then(function(response) {    
        // if display, the user will receive the error message
        console.log(response)
        if(response.status == 501){
            console.log('not implemented');
            return;
        }
        if(response.status == 202) {
            // if success, local storage items will be removed and user will be sent back to the index page
            console.log('success');
            localStorage.removeItem('profileImage');
            localStorage.removeItem('backgroundImage');
            localStorage.removeItem('font');
            localStorage.removeItem('backgroundColour');          
            document.getElementById('mainpage').style.display = 'none';
            document.getElementById('indexpage').style.display = 'block';
            return;
        }
    })
    // Send back error into console log
    response.text().then((text) => {
        console.log(text)
    });
    return false;
}
// -------------------------------------UPDATE PROFILE FUNCTION-------------------------------------------------------------------------------------
function postUpdateProfile() {
    var profileUpdate = {
        'UsernameUpd': document.getElementById("UsernameUpd").value,
        'PasswordUpd': document.getElementById("PasswordUpd").value,
        'FirstNameUpd': document.getElementById("FirstNameUpd").value,
        'LastNameUpd': document.getElementById("LastNameUpd").value,
        'DateOfBirthUpd':document.getElementById("DateOfBirthUpd").value,
        'EmailUpd': document.getElementById("EmailUpd").value,
        'PhoneUpd': document.getElementById("PhoneUpd").value
    }    
    fetch('api.php?action=updateprofile',{
        method: "POST",
        body: JSON.stringify(profileUpdate),
        credentials: 'include'
    })
    .then(function(response){
        if(response.status == 406) {
            // Will not accept the new update information if they are not filled fully or correctly
            console.log('unaccepted');
            return;
        } 
        if(response.status == 202) {
            console.log('success');
            // Upon successful update, the profile page will be refreshed by reusing the display profile function
            postDisplayProfile();
            openProfile();
            return;
        } 
        // Send back error into console log
        response.text().then((text) => {
            console.log(text)
        })
    })
    return false;
}
// -----------------------------------------------------------Display Movies-----------------------------------------------------------------
function postDisplayMovies() {
    var output = '';
    fetch('api.php?action=displaymovies',{
        method: "GET",
        credentials: 'include'
    })
    .then(function(response){    
        response.json().then(function(data){
            console.log(data);
            data.forEach(row => {
            // Show all movies from Database that will be output into JSON
            output += 
                `<div class = "movietitle">`+ row.MovieName +`</div>
                <div class = "moviedescription">`+ row.MovieDescription +`</div>
                <button type ="button" onclick = "postAddFavouriteMovie(`+ row.MovieID +`)">Favourite</button>
                <button type ="button" onclick = "openSessions();postDisplaySession(`+ row.MovieID +`)">Tickets</button>
                <div></div>`
            })
            // Data ouput at Movie HTML Page section
            document.getElementById('moviecontents').innerHTML = output;
            document.getElementById('ticketupdate').innerHTML = output;
        })  
    })
    return false;
}
// ---------------------------------------------------------Add Movie to Favourite-----------------------
function postAddFavouriteMovie(id) {
    var favouritemovie = {
        "movieid": id
    }
    fetch('api.php?action=addfavouritemovie',{
        method: "POST",
        body: JSON.stringify(favouritemovie),
        credentials: "include"
    })
    .then(function(response){
        console.log(response);
        if(response.status == 202) {
            console.log('success');
        }
        if(response.status == 403) {
            console.log('forbidden');
        }
    })
    return false;
}
// ------------------------------------------------------Display Favourite Movie list--------------------
function postDisplayFavouriteMovie() {
    var output = ''

    fetch('api.php?action=displayfavouritelist',{
        method: "GET",
        credentials: 'include'
    })
    .then(function(response){
        response.json().then(function(data) {
            console.log(data)
            data.forEach(row => {
                output +=
                    `<div class="movietitle">`+ row.MovieName +`</div>
                    <div class="moviedescription">`+ row.MovieDescription +`</div>
                    <button type="button" onclick="postRemoveFavourite(`+ row.FavouriteMovieID +`)">Remove</button>
                    <button type="button" onclick="openSessions();postDisplaySession(`+ row.MovieID +`)">Tickets</button>
                    <div></div>`
            })
            document.getElementById('favourite-list').innerHTML = output;
        })
    })
    return false;
}
// --------------------------------------------------Delete Movie Sessions------------------------------------------------------------------
function postRemoveFavourite(id) {
    var favouritelist = {
        'favouritelist' : id
    }
    fetch('api.php?action=removefavouritemovie',{
        method: "POST",
        body: JSON.stringify(favouritelist),
        credentials: 'include'
    })
    .then(function(response){
        console.log(response);
        // Successfully removing Movie from Favourite list
        if(response.status == 202) {
            console.log('success');
            postDisplayFavouriteMovie();
        }
        // Unsuccessfully removing Movie From Favourite list
        if(response.status == 501) {
            console.log('not implemented');
        }
    })
    // Send back error into console log
    response.text().then((text) => {
        console.log(text)
    })
    return false;
}
// -------------------------------------------------Display Movie Sessions---------------------------------------------------------------------
function postDisplaySession(id) {
    var movie = {
        'movieid' : id
    }
    var output = ''
    fetch('api.php?action=displaymoviesession',{
        method: "POST",
        body: JSON.stringify(movie),
        credentials: 'include'
    })
    .then(function(response){
        response.json().then(function(data){
            console.log(data);
            data.forEach(row => {
                output += 
                `<div></div>` + row.SessionDate +
                `<div></div>` + row.TimeStart +
                `<button type="button" onclick="openSeats();postDisplaySeats(`+ row.MovieSessionID +`);postTicketTypes()">Reserve</button>`
            })
            document.getElementById("sessioncontents").innerHTML = output;
        })
    })
}
// -------------------------------------------------Display Theatre Seats----------------------------------------------------------------------
function postDisplaySeats(id) {
    var moviesession = {
        'moviesessionid' : id
    }
    var output = ''
    fetch('api.php?action=displayseats',{
        method: "POST",
        body: JSON.stringify(moviesession),
        credentials: 'include'
    })
    .then(function(response){
        response.json().then(function(data){
            console.log(data);
            data.forEach(row => {
                output +=
                `<button id="seatID" type="button" onclick = "transferSeatValue(`+ row.SeatBySessionID +`)">`+ row.SeatNumber +`</button>`
            });
            document.getElementById("seatlist").innerHTML = output;
        })
    })
}
// -------------------------------------------------------Display Ticket Type--------------------------------------------------------------------
function postTicketTypes() {
    var output = '';
    var output2 = '';
    fetch('api.php?action=displaytickettype',{
        method: "GET",
        credentials: "include"
    })
    .then(function(response) {    
        response.json().then(function(data) {
            console.log(data);
            data.forEach(row => {
            // Show all movies from Database that will be output into JSON
            output += 
                `<input name="ticketType" type="radio" class="tickettypeOpts"  value="`+ row.TicketTypeID + `"
                onclick="transferTicketTypeValue(this.value)">
                <label for="ticketType">`+ row.Name +` = $`+ row.Price +`</label><br>`
            })
            output2 = 
                `<h5>
                    If you choose the Student ticket, you are required to present your Student ID before entering the cinema room 
                </h5>`
            // Data ouput at Ticket Type HTML Page section
            document.getElementById('tickettype').innerHTML = output;
            document.getElementById('ticket-note').innerHTML = output2;
        })
    })
    return false;
}
// ---------------------------------------------Storing Ticket Values into Hidden Input Form-------------------------------------------------------------------
function transferTicketTypeValue(id) {
    var TicketTypeValue = document.getElementById("ticket-type").value;
    TicketTypeValue = id;
    document.getElementById("ticket-type").value = TicketTypeValue;
}

function transferSeatValue(id) {
    var SeatValue = document.getElementById("seat-id").value;
    SeatValue = id;
    document.getElementById("seat-id").value = SeatValue;
}

function transferSeatValueUpdt(id) {
    var SeatValueUpdt = document.getElementById("seat-id-update").value;
    SeatValueUpdt = id;
    document.getElementById("seat-id-update").value = SeatValueUpdt;
}

function transferTicketID(id) {
    var TicketIDValue = document.getElementById("ticket-id").value;
    TicketIDValue = id;
    document.getElementById("ticket-id").value = TicketIDValue;
}

document.getElementById("ticket-type").readOnly = true;
document.getElementById("seat-id").readOnly = true;
document.getElementById("seat-id-update").readOnly = true;
document.getElementById("ticket-id").readOnly = true;
// ------------------------------------------------Seat Booking--------------------------------------------------------------------------------
function postSeatBooking() {
    var seatbookinginfo = {
        'seatbysessionid': document.getElementById("seat-id").value,
        'tickettypeid': document.getElementById("ticket-type").value
    }
    fetch('api.php?action=seatreserve',{
        method: "POST",
        body: JSON.stringify(seatbookinginfo),
        credentials: "include"
    })
    .then(function(response) {
        // If the seat booking process was successful
        if(response.status == 202) {
            console.log('success');
            return;    
        }
        // If the seat booking process was unsuccessful
        if(response.status == 406) {
            console.log('unaccepted');
            return;
        }
        // Send back error into console log
        response.text().then((text) => {
            console.log(text);
        })
    })
    return false;
}
// ---------------------------------------------------------Display Booked Tickets------------------------------------------------------------------
function postDisplayTicket() {
    var output = '';
    fetch('api.php?action=displayticket',{
        method: "GET",
        credentials: "include"
    })
    .then(function(response) {    
        response.json().then(function(data) {
            console.log(data);
            data.forEach(row => {
            // Show all user's booked ticket from Database that will be output into JSON
            output += 
                `<fieldset>
                    <legend>Ticket</legend>
                    <div></div> Movie: `+ row.MovieName +`
                    <div></div> Date: `+ row.SessionDate +`
                    <div></div> Time: `+ row.TimeStart +`
                    <div></div> Ticket Type: `+ row.Name +`
                    <div></div> Seat Number: `+ row.SeatNumber +`
                    <div></div> Theatre Room: `+ row.TheatreNumber +`
                    <button type="button" onclick="openUpdateTicket();postDisplayMoviesUpdt();transferTicketID(`+ row.TicketID +`)">Update Ticket</button>
                    <button type="button" onclick="postDeleteTicket(`+ row.TicketID +`)">Delete Ticket</button>
                </fieldset>`
            })
            // Data ouput at User's Booked Ticket HTML Page section
            document.getElementById('ticketcontent').innerHTML = output;
        })
    })
    return false;
}
// --------------------------------------------Display Movie for Updating Ticket------------------------------
function postDisplayMoviesUpdt() {
    var output = '';
    fetch('api.php?action=displaymoviesupdt',{
        method: "GET",
        credentials: 'include'
    })
    .then(function(response){    
        response.json().then(function(data){
            console.log(data);
            data.forEach(row => {
            // Show all movies from Database that will be output into JSON
            output += 
                `<div class = "movietitle">`+ row.MovieName +`</div>
                <div class = "moviedescription">`+ row.MovieDescription +`</div>
                <button type ="button" onclick = "openSessions();postDisplaySessionUpdt(`+ row.MovieID +`)">Tickets</button>
                <div></div>`
            })
            // Data ouput at Movie HTML Page section
            document.getElementById('moviecontents').innerHTML = output;
            document.getElementById('ticketupdate').innerHTML = output;
        })
        
    })
    return false;
} 
// -------------------------------------------Display Sessions for Updating Ticket----------------------------
function postDisplaySessionUpdt(id) {
    var movie = {
        'movieid' : id
    }
    var output = ''
    fetch('api.php?action=displaymoviesessionupdt',{
        method: "POST",
        body: JSON.stringify(movie),
        credentials: 'include'
    })
    .then(function(response){
        response.json().then(function(data){
            console.log(data);
            data.forEach(row => {
                output += 
                `<div></div>` + row.SessionDate +
                `<div></div>` + row.TimeStart +
                `<button type="button" onclick="openSeatsUpdt();postDisplaySeatsUpdt(`+ row.MovieSessionID +`)">Reserve</button>`
            })
            document.getElementById("sessioncontents").innerHTML = output;
        })
    })
}
// -----------------------------------------Display Seats for Updating Ticket-----------------------------------
function postDisplaySeatsUpdt(id) {
    var moviesession = {
        'moviesessionid' : id
    }
    var output = ''
    fetch('api.php?action=displayseatsupdt',{
        method: "POST",
        body: JSON.stringify(moviesession),
        credentials: 'include'
    })
    .then(function(response){
        response.json().then(function(data){
            console.log(data);
            data.forEach(row => {
                output +=
                `<button id="seatID" type="button" onclick = "transferSeatValueUpdt(`+ row.SeatBySessionID +`)">`+ row.SeatNumber +`</button>`
            });
            document.getElementById("seatlist-updt").innerHTML = output;
        })
    })
}
// ------------------------------------------Update Ticket---------------------------------------------------
function postUpdateTicket() {
    var ticketupdateinfo = {
        'seatinfoUPDT': document.getElementById("seat-id-update").value,
        'ticketid': document.getElementById("ticket-id").value
    }
    fetch('api.php?action=updateticket',{
        method: "POST",
        body: JSON.stringify(ticketupdateinfo),
        credentials: "include"
    })
    .then(function(response) {
        // If the seat booking process was successful
        if(response.status == 202) {
            console.log('success');
            openYourTicket();
            postDisplayTicket();
            return;    
        }
        // If the seat booking process was unsuccessful
        if(response.status == 406) {
            console.log('unaccepted');
            return;
        }
        // Send back error into console log
        response.text().then((text) => {
            console.log(text);
        })
    })
    return false;
}
// ------------------------------------------------------DELETE TICKET--------------------------------------
function postDeleteTicket(id) {
    var IDticket= {
        'ticketid' : id
    }
    fetch('api.php?action=deleteticket',{
        method: 'POST',
        body: JSON.stringify(IDticket),
        credentials: "include"
    }).then(function(response) {
        if(response.status == 202) {
            console.log('success');
            return;
        } 
        if(response.status == 501) {
            console.log('not implemented');
            return;
        }
    })
    // Send back error into console log
    response.text().then((text) => {
        console.log(text)
    })
    return false;
}