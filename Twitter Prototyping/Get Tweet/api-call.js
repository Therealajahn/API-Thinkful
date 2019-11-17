///API call

let codeBird = new Codebird;
let apiKey = 'Y6e9thld76UKz3z5mgedmHwhT';
let apiSecret = 'SggAOYjxd3RcNAsmToPtrKStA1dL7b0SWfWN1xZDitBDuxhspP';
let access = '1191434112457949185-Wn0ROqkmLZLHtBLCBEEyPhWufzWILz';
let accessSecret = '4vrJ6Dd8Unx5PgVLktxNcoEn91m53qWTmtszbFZT6W1qu';   




function searchTweets(tweet,button) {
    codeBird.setConsumerKey(apiKey,apiSecret);
    codeBird.setToken(access, accessSecret)
    
    let  params = {
        q: "#twitter.exercises.make.random"
    };
    codeBird.__call("search_tweets", params, function(reply,rate,err) {
      console.log("Search Tweet:",
      reply.statuses[0].text);
      console.log(err); 
    }               
    );
    return true
};

    
 
function makeTweet(tweet, button) {     codeBird.setConsumerKey(apiKey,apiSecret);
    codeBird.setToken(access, accessSecret)
    
    let  params = {
        status: tweet
    };
    codeBird.__call("statuses_update", params, 
    );
    searchTweets(tweet);       renderTweet(tweet,button);                
};













                  
            