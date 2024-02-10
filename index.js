const btns = document.querySelectorAll(".btn")

const allCase = document.querySelectorAll(".grid")
const allCase_reverse = Array.from(allCase).reverse()

const gridcol1 = document.querySelectorAll(".grid.col1")
const coll1 = Array.from(gridcol1)
const col1 = coll1.reverse()

const gridcol2 = document.querySelectorAll(".grid.col2")
const coll2 = Array.from(gridcol2)
const col2 = coll2.reverse()

const gridcol3 = document.querySelectorAll(".grid.col3")
const coll3 = Array.from(gridcol3)
const col3 = coll3.reverse()

const gridcol4 = document.querySelectorAll(".grid.col4")
const coll4 = Array.from(gridcol4)
const col4 = coll4.reverse()

const gridcol5 = document.querySelectorAll(".grid.col5")
const coll5 = Array.from(gridcol5)
const col5 = coll5.reverse()

const gridcol6 = document.querySelectorAll(".grid.col6")
const coll6 = Array.from(gridcol6)
const col6 = coll6.reverse()

const gridcol7 = document.querySelectorAll(".grid.col7")
const coll7 = Array.from(gridcol7)
const col7 = coll7.reverse()

const matrice = [col1,col2,col3,col4,col5,col6,col7]

let lastCheck = true;



function colChoice(col){
        let i = 0
    while(col[i].style.background != "" && i < col.length){
        i++
    }
    if(col[i].style.background == ""){
        if(lastCheck){
            col[i].style.background = "yellow"    
        }else{
            col[i].style.background = "red"
        }
        lastCheck = !lastCheck   
    } 
}


btns_reverse = Array.from(btns).reverse()
for (let index = 0; index < btns_reverse.length; index++) {
    let btn = btns_reverse[index];
    btn.addEventListener("click", () => {
        colChoice(matrice[index])
    })
}

/*let victoire = 0;
function check(){
    for (let i = 0; i < allCase_reverse.length; i++) {
        console.log("allCase_reverse[i].style.background")
        if(allCase_reverse[i].style.background != undefined && (allCase_reverse[i].style.background == allCase_reverse[i+1].style.background) 
        && (allCase_reverse[i].style.background == allCase_reverse[i+2].style.background) 
        && (allCase_reverse[i+2].style.background == allCase_reverse[i+3].style.background)){
            console.log("victory")
        }
    }
}*/






