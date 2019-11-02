function renderBoxes() {
    $(".section-a").html(`<section class="part one-a">
            <div class="check one-a">
                <div class="x-rect1 one-a"></div>
                <div class="x-rect2 one-a"></div>
            </div>
            <div class="delete one-a">
                <h1 class="delete-text one-a">
                    Delete    
                </h1>
            </div>
        
            <div class='submit-left one-a'>
                     <h1 class='submit-left-text one-a'>Submit</h1>
                  </div>
                  <div class='submit-right one-a'>
                     <h1 class='submit-right-text one-a'>Submit</h1>
                  </div>
            <form>
                <input type="text" name="name" class="name one-a"
         placeholder="NAME"><br>
                <input type="text" name="price" class="price one-a"
        placeholder="PRICE">
                <br>
                <input type="text" name="link" class="link one-a"
        placeholder="LINK">
            </form>
            <div class="stars one-a"></div>
        </section>`)
}


$(renderBoxes());