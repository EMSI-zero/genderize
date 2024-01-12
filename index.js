window.onload = function(){
    document.getElementById('saved-results-box').innerHTML = 'No Results'
    showMessage()
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

function showMessage(type){
    var messageBox = document.getElementById('bottom-message-box')
    messageBox.className = 'info-box'
    messageBox.innerHTML = 'Welcome to the Genderize!'
    setTimeout(() => {
        messageBox.setAttribute('hidden', 'true')
        messageBox.style.opacity = 0
    }, 3000);
}