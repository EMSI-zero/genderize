
const basicURL = 'https://api.genderize.io/'

window.onload = function(){
    updateSavedResultsBox()
    showMessage('info', 'Welcome to Genderize!')
}


function OnSubmit(button){
    form = document.getElementById("submission-form")
    
    console.log(button.name + " button")
    updateResultsBox(form["name"].value)
    showMessage('info', 'Name submitted')
    resetForm(form)
}

function OnSave(button){
    form = document.getElementById("submission-form")
    name = form["name"].value
    gender = form["gender"].value
    console.log(button.name + " button")
    saveRecordToLocalStorage(name, gender)
    showMessage('info', 'Name saved')
    resetForm(form)
    updateSavedResultsBox()
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

function saveRecordToLocalStorage(name, gender, probability) {
    localStorage.setItem("previous_name", `{"name": "${name}" , "gender" :"${gender}", "probability":"${probability}"}`)
}

function getSavedResult(){
    saved = localStorage.getItem("previous_name")
    if ( saved === undefined) {
        return "No Results"
    } 

    lsobj = JSON.parse(saved)
    return lsobj
}

function updateSavedResultsBox(){
    prevRes = getSavedResult()
    res = `${prevRes.name} : ${prevRes.gender}`
    document.getElementById('saved-results-box').innerHTML = res
}

function updateResultsBox(name){
    prevRes = getSavedResult()

    if (prevRes.name === name){
        document.getElementById('result-gender').innerHTML = prevRes.gender
        document.getElementById('result-probability').innerHTML = prevRes.probability
    }

    getDataFromAPI(name)
        .then(data =>{
            if (data.gender === 'male'){
                document.getElementById('result-gender').innerHTML =  'Male'
                document.getElementById('result-probability').innerHTML = data.probability
            }else{
                document.getElementById('result-gender').innerHTML =  'Female'
                document.getElementById('result-probability').innerHTML = data.probability
            }
            
    })
    
}

function getDataFromAPI(name){
    return fetch(basicURL+ `?name=${name}`, {
        method: 'GET',
    }).then(res => {
        if (!res.ok){
            error = res.json()
            throw new Error(`Error: API response was not ok!, ${error.error}`)
        }

        return res.json()
    }).catch(error => {
        showMessage('error', error.Error)
    })
    
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