//render the three main sections
//TODO: make all the parts smaller to fit the price and the update button
fucntion renderSections(){
    
};

function renderParts() {
    store.partBoxes[0].forEach(part => {
    $(".section-a").append(`<section class="part ${part}">
            <div class="check ${part}">
                <div class="x-rect1 ${part}"></div>
                <div class="x-rect2 ${part}"></div>
            </div>
            <div class="delete ${part}">
                <h1 class="delete-text ${part}">
                    Delete    
                </h1>
            </div>
        
            <div class='submit-left ${part}'>
                     <h1 class='submit-left-text ${part}'>Submit</h1>
                  </div>
                  <div class='submit-right ${part}'>
                     <h1 class='submit-right-text ${part}'>Submit</h1>
                  </div>
            <form>
                <input type="text" name="name" class="name ${part}"
         placeholder="NAME"><br>
                <input type="text" name="price" class="price ${part}"
        placeholder="PRICE">
                <br>
                <input type="text" name="link" class="link ${part}"
        placeholder="LINK">
            </form>
            <div class="stars ${part}"></div>
        </section>`)
    });
}

//when submit button is pressed, if the part is selected,  
function submitPressed() {
       
};

//when a parts check box is clicked, the x appears in that check box, dissapearing from
//the others
function checkClicked() {
    
};

//sum all the parts in the store.selectedPart object to get price
function upDateTotal() {
    
};

//render price at bottom of page


$(renderParts());