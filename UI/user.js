    //renders section element
    //calls functions that render the guts
function renderSection(){
 let section = `<section class='section'>
                ${renderPart()}
                </section>`
 $("body").html(section);
};

function renderPart(){
    let part = `<section class='part'>
                ${renderCheck()}
                ${renderDeleteButton()}
                ${renderForm()}
                ${renderStars()}
                </section>`
    return part;
}

function renderCheck(){
    let check = `<div class="check">
                </div>`;
    return check;
};

//function addPriceToTotal(){
//    
//};

function renderDeleteButton(){
    let deleteButton = `<div class="delete">
                </div>`;
    return deleteButton;
};

function renderForm(){
    let form = `<form>
                <input type="text" name="name" class="name"
         placeholder="NAME"><br>
                <input type="text" name="price" class="price"
        placeholder="PRICE">
                <br>
                <input type="text" name="link" class="link"
        placeholder="LINK">
                </form>`
    return form;
};

function renderStars(){
    let stars = `<div class="stars"></div>`;
    return stars;
};

//
//
//function starHoverResponse(){
//    
//};
//
//function starClick(){
//    
//};
//
//function saveToSpreadSheet(){
//    
//};

$(renderSection());

