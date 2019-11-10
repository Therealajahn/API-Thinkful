//get reply from api-call
//render to page
function renderTweet(reply) {
  let tweet = reply.statuses[0].text;
    $("body").append(
     `<p>${tweet}</p>`
    )
};

function renderLanding() {
    return(
    `<section class="js-landing-page landing-page">
        
           <p class="js-short-story short-story">
           ${shortStory}</p>

           <p class="js-explantion explanation">
           ${explantion}</p>

           <button class="js-start start">Start<button

    </section>`)
}

function handleLandingStart() {
    $(".js-landing-page").on("submit",(e) => {
        e.preventDefault();
        scrollWindow();
        STORE.scroll += window.innerHeight; 
    })
}

