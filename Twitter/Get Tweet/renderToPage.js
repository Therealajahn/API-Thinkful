//get reply from api-call
//render to page
function renderTweet(reply) {
  return reply.statuses[0].text;
};

function renderLanding(shortStory,explanation) {
    console.log("renderLanding")  
    return(
    `<section class="js-landing-page landing-page">
        
           <p class="js-short-story short-story">
           ${shortStory}</p>

           <p class="js-explantion explanation">
           ${explantion}</p>

           <button class="js-start start">Start<button

    </section>`
    handleLandingStart();
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

