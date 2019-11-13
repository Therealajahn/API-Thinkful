//get reply from api-call
//render to page
function getTweet() {
  console.log("getTweet");
  return STORE.reply
};

function twitterLoaded() {
    $(renderPage());
    console.log(STORE.reply)
};


function renderPage() {
    
    
    
    $("body").append(
    `${renderLanding()}
    <div class='yes'></div>
    ` 

    );
    handleLandingStart();
}

function renderLanding() {
    console.log("renderLanding") 
    let shortStory = getTweet();
    let explanation = STORE.explanation;
    let userName = STORE.user;
    console.log(userName);
    return(
    `<section class="js-landing-page landing-page">
       <form> 
           <p class="js-short-story short-story">
           ${shortStory}</p>

           <p class="js-user-name user-name">
           ${userName}</p>

           <p class="js-explantion explanation">
           ${explanation}</p>

           <button class="js-start start">Start</button>
       </form>
    </section>`
    )
}

function handleLandingStart() {
    console.log("handleLanding Start");
    $(".js-landing-page").on("submit",(e) => {
        e.preventDefault();
        scrollWindow();
        
    })
}

function scrollWindow(){
    console.log("scrollWindow");
   STORE.scroll += window.innerHeight; 
   window.scroll({
       top:STORE.scroll,
       left:0,
       behavior:"smooth"
   })    
}



