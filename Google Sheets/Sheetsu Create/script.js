document.querySelector(
    "#myForm")
    .addEventListener(
    "submit",
    (e)=>{
        e.preventDefault();
        saveData();
    });

function saveData(){
    
    let first_name =  document
    .getElementsByName(
            "first_name")[0]
        .value;
    let score = document
    .getElementsByName("score")[0]
        .value;
    let data = {
        name: first_name,
        score: score
    };
    Sheetsu.write("https://sheetsu.com/apis/v1.0dw/020b2c0f/",
    data,
    {},
    (result) => {
        console.log(result);
    })
}