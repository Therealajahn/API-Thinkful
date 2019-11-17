//get reply from api-call
//render to page


//function twitterLoaded(reply) {
//    $(renderTweet(reply.text));
//    console.log(reply)
//};


function buttonClicked(button) {

    let tweet = $("#ex1").val();
    makeTweet(tweet,button);
      
}
function renderTweet(tweet,button){
   console.log("renderTweet");
   console.log(tweet);
   console.log(button);    
    $(button).append(`
    <p>${tweet}</p>
    `)  
}

function submitClicked() {
    $('.form1').submit((e) =>{
      e.preventDefault();    
buttonClicked('.premise1');  
    })
    $('.form2').submit((e) =>{
      e.preventDefault();    
renderTweet('.premise2');  
    })
     $('.form3').submit((e) =>{
      e.preventDefault();    
renderTweet('.premise3');  
    })
     $('.form4').submit((e) =>{
      e.preventDefault();    
renderTweet('.premise4');  
    })
    
}

$(submitClicked());