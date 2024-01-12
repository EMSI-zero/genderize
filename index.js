window.onload = function(){
    document.getElementById('saved-results-box').innerHTML = 'No Results'
    showMessage('info', 'Welcome to Genderize!')
}


function OnSubmit(button){
    form = document.getElementById("submission-form")
    console.log(button.name + " button")
    showMessage('info', 'Name submitted')
    resetForm(form)
}

function OnSave(button){
    form = document.getElementById("submission-form")
    console.log(button.name + " button")
    showMessage('info', 'Name saved')
    resetForm(form)

}

function resetForm(form){
    form.reset()
}

function ResetSavedResults(){
    document.getElementById('saved-results-box').innerHTML = 'No Results'
    showMessage('warn', 'Saved name cleared')
}

function validateName(form){
    
    return 0
}

function showMessage(type, msg){
    var messageBox = document.getElementById('bottom-message-box')
    var msgStyle
    if (type === 'info'){
        msgStyle = 'info-box'
    }else if(type === 'warn'){
        msgStyle = 'error-box'
    }
    messageBox.className = msgStyle
    messageBox.innerHTML = msg
    messageBox.style.opacity = 100
    messageBox.setAttribute('hidden', 'false')
    setTimeout(() => {
        messageBox.style.opacity = 0
    }, 5000);
}