
// Todo App

    let btn = document.querySelector("button");
    let ul = document.querySelector("ul");
    let inp = document.querySelector("input");
   
    btn.addEventListener("click", function () {
      let item = document.createElement("li");
      item.innerText = inp.value;

      let delBtn = document.createElement("button");
      delBtn.innerText = "delete";
      delBtn.classList.add("btn", "btn-success","delete");

      item.appendChild(delBtn);
      ul.appendChild(item);
      inp.value = "";
    });

    ul.addEventListener("click", function (event) {
        if (event.target.nodeName== "BUTTON") {
          let listItem = event.target.parentElement;
          listItem.remove();
          console.log("deleted");
        }
      });

    
// THIS WILL NOT WORK AS IN THIS, NOT SELECTED FOR PARENT ELEMENT (UL OR LI)
        //     let delbtns = document.querySelectorAll(".delete");
        //     for(delbtn of delbtns){
        //         delbtn.addEventListener("click", function(event){
        //             let parent =this.parentElement;
        //            parent.remove();
        
        //     });
        // }
    
   
   

