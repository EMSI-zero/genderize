window.onload = function(){
    document.getElementById('saved-results-box').innerHTML = 'No Results'
}


function OnSubmit(form){
    console.log(form.name + " button")
}

function OnSave(form){
    console.log(form.name + " button")
}

function ResetSavedResults(){
    document.getElementById('saved-results-box').innerHTML = 'No Results'
}

function validateName(form){
    
    return 0
}