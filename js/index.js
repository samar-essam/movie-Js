// $(document).ready(function(){
//     nvWidth = $(".menu").width() - 10;
//     // $(".header").animate({marginLeft : `-${ menuWidth}`},0 )
//     $(".strip-header-nav").animate({left : `-0`},0 )
// })
// nvWidth = $(".menu").width() - 10;

// $(".strip-toggel-menu").click(function () {
//     // if(menuWidth=0){
//         $(".menu").addClass("open").removeClass("close"),
//         // $(".header").animate({marginLeft : `0`},500 ),
//         $(".strip-header-nav").css("left", menuWidth ),
//         $(".fa-align-justify").toggleClass("fa-times")
//     // }
// })

///////////////////////////// Header ///////////////////////////////

$(document).ready(function () {
  let menueWidth = $(".menu").outerWidth();
  $(".header").animate({ marginLeft: `-${menueWidth}` }, 0);
  $(".strip-header-nav").animate({ left: `0` }, 0);
});

$(".strip-toggel-menu").click(function () {
  let menueWidth = $(".menu").outerWidth();

  if ($(".header").css("marginLeft") == "0px") {
    $(".header").animate({ marginLeft: `-${menueWidth}` }, 1000);
    $(".strip-header-nav").animate({ left: `0` },150);
    $(".fa-align-justify").toggleClass("fa-times");
    $(".menu li").animate({ opacity: "0", paddingTop: "500px" }, 1000);
  }
   else {
    $(".header").animate({ marginLeft: `0` }, 1000);
    $(".strip-header-nav").animate({ left: `${menueWidth}`},450);
    $(".fa-align-justify").toggleClass("fa-times");
    $(".menu .item1").animate({ opacity: "1", paddingTop: "25px" }, 1000),
      $(".menu .item2").animate({ opacity: "1", paddingTop: "25px" }, 1200),
      $(".menu .item3").animate({ opacity: "1", paddingTop: "25px" }, 1400),
      $(".menu .item4").animate({ opacity: "1", paddingTop: "25px" }, 1600),
      $(".menu .item5").animate({ opacity: "1", paddingTop: "25px" }, 1800),
      $(".menu .item6").animate({ opacity: "1", paddingTop: "25px" }, 2000);
  }
});

////////////////////////////////////////////////////////////////////////

///////////////////////////// Regex ////////////////////////////////////

let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userPhone = document.getElementById("phone");
let userAge = document.getElementById("age");
let userPassword = document.getElementById("password");
let userRePassword = document.getElementById("rePassword");
let userNameAlert = document.getElementById("namealert");
let userEmailAlert = document.getElementById("emailalert");
let userPhoneAlert = document.getElementById("phonealert");
let userAgeAlert = document.getElementById("agealert");
let userpasswordAlert = document.getElementById("passwordalert");
let userRepasswordAlert = document.getElementById("repasswordalert");

function userNameValid() {
  let nameRegx = /^[a-zA-Z0-9]+$/;

  if (!nameRegx.test(userName.value)) {
    userNameAlert.style.display = "block";
  } 
  else {
    userNameAlert.style.display = "none";
  }
//   return 1 == nameRegx.test(userName.value);
}
function userEmailValid() {
  let emailRegx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!emailRegx.test(userEmail.value)) {
    userEmailAlert.style.display = "block";
    return 1;
  } else {
    userEmailAlert.style.display = "none";
  }
  return 1 == emailRegx.test(userEmail.value);
}
function userPhoneValid() {
  let phoneRegx = /^01[0125][0-9]{8}$/;
  if (!phoneRegx.test(userPhone.value)) {
    userPhoneAlert.style.display = "block";
    return 1;
  } else {
    userPhoneAlert.style.display = "none";
  }
}
function userAgeValid() {
  let ageRegx = /^([1-9][0-9]|100)$/;
  if (!ageRegx.test(userAge.value)) {
    userAgeAlert.style.display = "block";
    return 1;
  } else {
    userAgeAlert.style.display = "none";
  }
}
function userPasswordValid() {
  let passwordRegx = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/;
  if (!passwordRegx.test(userPassword.value)) {
    userpasswordAlert.style.display = "block";
    return 1;
  } else {
    userpasswordAlert.style.display = "none";
  }
}
function userRePasswordValid() {
  if (userPassword.value == userRePassword.value) {
    userRepasswordAlert.style.display = "none";
  } else {
    userRepasswordAlert.style.display = "block";
  }
}

userName.addEventListener("keyup", userNameValid);
userEmail.addEventListener("keyup", userEmailValid);
userPhone.addEventListener("keyup", userPhoneValid);
userAge.addEventListener("keyup", userAgeValid);
userAge.addEventListener("keyup", userAgeValid);
userPassword.addEventListener("keyup", userPasswordValid);
userRePassword.addEventListener("keyup", userRePasswordValid);

////////////////////////////// Movies ////////////////////////////

var searchURL =
  "https://api.themoviedb.org/3/search/movie?query=mad&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false";
var trendingURL =
  "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let latestURL =
  "https://api.themoviedb.org/3/movie/latest?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let popularURL =
  "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
var topratedURL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
var upcomingURL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
var NowURL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
var URL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44";


function getMovies() {
        var myHttp = new XMLHttpRequest();
        myHttp.open("get",`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k `),
        myHttp.send(),
        myHttp.addEventListener("readystatechange" , function(){
            if(myHttp.readyState && 200 == myHttp.status)
            {
                allMovies = (allMovies = JSON.parse(myHttp.response)).results;
                // console.log(allMovies)
                displayMovies()
            }
      });
        
            
      }
      getMovies()
    function displayMovies() {
        let cartona = ``;
      for ( i = 0; i < allMovies.length; i++)
        cartona +=`<div class="col-md-6 col-lg-4 my-3  shadow">
        <div class="movie shadow rounded position-relative overflow-hidden">
          <div class="post">
            <img
              src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}"
              class="img-fluid rounded"/>
            <div class="layer d-flex align-items-center">
              <div class="info p-0">
                <h2>' +${allMovies[i].original_title } + "</h2>
                <p>" +${allMovies[i].overview}  + "</p>
                <p>rate: " +${allMovies[i].vote_average}  + "</p>
                <p>" +${ allMovies[i].release_date} + "</p>
              </div>
            </div>
          </div>
        </div>
      </div>`
     document.getElementById("rowData").innerHTML = cartona;
}



let search_bar = document.getElementById("word");
search_bar.onkeyup = function () {
    cartonaa=``
    let term = search_bar.value;
    for (var i = 0; i < allMovies.length; i++){
        if (allMovies[i].original_title.toLowerCase().includes(term.toLowerCase()) == true){
            cartonaa +=`<div class="col-md-6 col-lg-4 my-3  shadow">
        <div class="movie shadow rounded position-relative overflow-hidden">
          <div class="post">
            <img
              src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}"
              class="img-fluid rounded"/>
            <div class="layer d-flex align-items-center">
              <div class="info p-0">
                <h2>' +${allMovies[i].original_title } + "</h2>
                <p>" +${allMovies[i].overview}  + "</p>
                <p>rate: " +${allMovies[i].vote_average}  + "</p>
                <p>" +${ allMovies[i].release_date} + "</p>
              </div>
            </div>
          </div>
        </div>
      </div>`
        }

    }
    document.getElementById("res").innerHTML = cartonaa;
  };




  let search = document.getElementById("allMovies");
  function getMoviesByWord(e) {
    var myHttp1 = new XMLHttpRequest();
        myHttp1.open("get","https://api.themoviedb.org/3/search/movie?query="+e+"&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false");
        myHttp1.send();
        myHttp1.addEventListener("readystatechange" , function(){
            if(myHttp1.readyState && 200 == myHttp1.status)
            {
                allMovies = JSON.parse(myHttp1.response).results;
                console.log(allMovies)
                displayMovies()
            }
      });
  }
  search.onkeyup = function(){
    getMoviesByWord(search.value)
  }







// Items
$(".item1").click(function() {
    let myHttpItem1 = new XMLHttpRequest();
    myHttpItem1.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    myHttpItem1.send(),
    myHttpItem1.addEventListener("readystatechange",function() {
        if (myHttpItem1.readyState == 4 && myHttpItem1.status == 200) {
            allMovies = JSON.parse(myHttpItem1.response).results;
            displayMovies()   
        }
    })
})

$(".item2").click(function() {
    let myHttpItem2 = new XMLHttpRequest();
    myHttpItem2.open("GET","https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    myHttpItem2.send(),
    myHttpItem2.addEventListener("readystatechange",function() {
        if (myHttpItem2.readyState == 4 && myHttpItem2.status == 200) {
            allMovies = JSON.parse(myHttpItem2.response).results;
            displayMovies()   
        }
    })
})

$(".item3").click(function() {
    let myHttpItem3 = new XMLHttpRequest();
    myHttpItem3.open("GET","https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    myHttpItem3.send(),
    myHttpItem3.addEventListener("readystatechange",function() {
        if (myHttpItem3.readyState == 4 && myHttpItem3.status == 200) {
            allMovies = JSON.parse(myHttpItem3.response).results;
            displayMovies()   
        }
    })
})


$(".item4").click(function() {
    let myHttpItem4 = new XMLHttpRequest();
    myHttpItem4.open("GET","https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    myHttpItem4.send(),
    myHttpItem4.addEventListener("readystatechange",function() {
        if (myHttpItem4.readyState == 4 && myHttpItem4.status == 200) {
            allMovies = JSON.parse(myHttpItem4.response).results;
            displayMovies()   
        }
    })
})

$(".item5").click(function() {
    let myHttpItem5 = new XMLHttpRequest();
    myHttpItem5.open("GET","https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    myHttpItem5.send(),
    myHttpItem5.addEventListener("readystatechange",function() {
        if (myHttpItem5.readyState == 4 && myHttpItem5.status == 200) {
            allMovies = JSON.parse(myHttpItem5.response).results;
            displayMovies()   
        }
    })
})
// End Items