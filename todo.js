taches=document.querySelector('.taches')
input = document.querySelector('#input')
btnAdd = document.querySelector('.add span')
btnOk = document.querySelector('.add .ok')
a=true;


// ##############################
// Creer une tache
// ##############################

function createTache(tacheName){
    inputAll=document.querySelectorAll('.taches input');
    a=true;
    verifTacheExiste=true
    tache=document.createElement('div');

    inputAll.forEach(element => {
        if(element.value==input.value){
            alert('cette tache existe deja')
          verifTacheExiste= false
        }
    });
    if(verifTacheExiste==true){

        tache.innerHTML=`<input type="text" value=${tacheName} readonly> 
        <div class="options">
        <input type="checkbox" onclick="if(a==false)this.checked=false">
        <img class="modify" src="./img/modify.jpg" alt="MODIFIER" height=30>
        <img  class="delete" src="./img/delete.jpg" alt="DELETE" height=30></div>`
        taches.appendChild(tache)
    }
// console.log(inputAll);
  
}
// ##############################
// Additionner une tache
// ##############################

btnAdd.addEventListener('click',()=>{
    if(a==true){

        createTache(input.value)
        
        checkTache()
        modifyTache()
        deleteTache()

    }
    console.log(a);

}) 

// ##############################
// Checked une tache
// ##############################
function checkTache(){
    a=true
    
    checkboxs=document.querySelectorAll('input[type="checkbox"]')
    checkboxs.forEach(checkbox => {
        
        checkbox.addEventListener('click',()=>{
            parent=checkbox.parentElement
            // prev=parent.previousSibling
            prev=parent.parentElement
            first=prev.children
            if(checkbox.checked){
                first[0].style.textDecoration='line-through'
                first[0].style.fontStyle='italic'
                // console.log(parent);
                // console.log(prev);
                // console.log(first);
            }else{
                first[0].style.textDecoration='none'
                
            }
            // console.log(a);
            // console.log(checkbox);
        })
    });
    
}
// ##############################
// Modifier une tache
// ##############################

function modifyTache(){
    
    a=false;

    modifys=document.querySelectorAll('.modify')
    
    modifys.forEach(modify => {
        
        modify.addEventListener('click',()=>{
            btnAdd.style.display='none'
            btnOk.style.visibility='visible'
            a=false
            parent=modify.parentElement
            prev=parent.parentElement
            first=prev.children
            console.log(first[0]);
            if(modify.click){
                input.value=first[0].value
            }
           btnOk.addEventListener('click',()=>{
               a=true
ok(first[0].value)
           })
            console.log(a);
        })
    });

}
// ##############################
// supprimer une tache
// ##############################
function deleteTache(){
a=true;
    deletes=document.querySelectorAll('.delete')

    deletes.forEach(elt => {
        
        elt.addEventListener('click',()=>{
            parent=elt.parentElement
            div=parent.parentElement
            first=div.children

                if(parent.children[0].checked){

                    div.remove()
                    console.log(a);
                }
            
        })
    });

}
function ok(valueInput){
    btnOk.style.visibility='hidden'
    btnAdd.style.display='inline-block'
    inputAll=document.querySelectorAll('.taches input');
    inputAll.forEach(element => {
        if(element.value==valueInput)[
            element.value=input.value
        ]
    });
}