function getAmazonPage(){

let url = "https://www.amazon.com/Wander-Sneakers-Fashion-Lightweight-Athletic/dp/B07MXTMSXG?pf_rd_p=ca7593d6-e5ab-48e7-9133-65a8a08a432e&pd_rd_wg=z41I6&pf_rd_r=777YRRJ03YSFZ2Y8Z7Z6&ref_=pd_gw_srecs_l2ra&pd_rd_w=blMpS&pd_rd_r=194ea976-0a6c-4893-a72d-d242636c4c05"    
    $(".link").on("click",()=>{
    console.log("link clicked")
    $.getJSON(url, result => {
        console.log(result)
    });
})
}

$(getAmazonPage);