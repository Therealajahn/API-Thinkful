let codeBird = new Codebird;
let apiKey = 'ZG9d3jOIVO6Z921CAqqemuwLr';
let apiSecret = '4WEg0hB4KHhAyub5dkz5v4SrVjdnPXveynppQ8gNywUvP1YYR5';
let access = '1191434112457949185-xW2RoxjmKpV85clIdAjeuixq9MSbDC';
let accessSecret = '6EhMJBy1f4NnRXr4LXZ1PoPfLmj3uZaAZtymFwFYkm4pJ';   


codeBird.setConsumerKey(apiKey,apiSecret);

codeBird.setToken(access, accessSecret)


let  params = {
  status: "new thing"
};
codeBird.__call("statuses_update", params, function(reply,rate,err) {
  console.log(reply);
  console.log(rate);
  console.log(err);    
});

                  
            