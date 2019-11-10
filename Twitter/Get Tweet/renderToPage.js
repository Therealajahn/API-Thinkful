function renderTweet(reply) {
   
    let tweet = reply.statuses[0].text;
    $("body").append(
     `<p>${tweet}</p>`
    )
}

