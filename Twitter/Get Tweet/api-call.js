///API call

let codeBird = new Codebird;
let apiKey = 'Y6e9thld76UKz3z5mgedmHwhT';
let apiSecret = 'SggAOYjxd3RcNAsmToPtrKStA1dL7b0SWfWN1xZDitBDuxhspP';
let access = '1191434112457949185-Wn0ROqkmLZLHtBLCBEEyPhWufzWILz';
let accessSecret = '4vrJ6Dd8Unx5PgVLktxNcoEn91m53qWTmtszbFZT6W1qu';   




//function searchTweets() {
//    codeBird.setConsumerKey(apiKey,apiSecret);
//    codeBird.setToken(access, accessSecret)
//    
//    let  params = {
//        q: "#twitter.exercises.make"
//    };
//    codeBird.__call("search_tweets", params, function(reply,rate,err) {
//      console.log(reply.text);
//      console.log(rate);
//      console.log(err); 
//      STORE.reply = reply.statuses[0].text
//      STORE.user = 
//      reply.statuses[0].user.screen_name 
//      twitterLoaded();
//    },
//    true               
//    );

//};

    
 
     codeBird.setConsumerKey(apiKey,apiSecret);
    codeBird.setToken(access, accessSecret)
    
    let  params = {
        status: 'newTweet'
    };
    codeBird.__call("statuses_update", params, function(reply,rate,err) {
      console.log(reply);
      console.log(rate);
      console.log(err); 

      twitterLoaded();
    },
    true               
    );











                  
            