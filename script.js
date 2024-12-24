 let userName=document.getElementById("username")
 let phoneNumber=document.getElementById("phonenumber")
 let emailId=document.getElementById("email")
 let addButton=document.getElementById("add")
 let resetButton= document.getElementById("reset")
 let saveButton=document.getElementById("save")
 let UserElement=document.getElementById("userInfo")
 
 let tableInfo=document.getElementById("tableInfo")
 let count=0
 function addContactDetails(){
    count=count+1

    let createRowElement=document.createElement("tr")
    createRowElement.id="row"+count

    let createUserNameElement=document.createElement("td")
    createUserNameElement.id="UserName"+count
    if(userName.value!=""){
        createUserNameElement.textContent=userName.value
    }
    else{
        alert("Please enter User Name")
    }

    let phoneNumberNameElement=document.createElement("td")
    phoneNumberNameElement.id="phoneNumber"+count
    if(phoneNumber.value!=""){
        phoneNumberNameElement.textContent=phoneNumber.value
    }
    else{
        phoneNumberNameElement.textContent="-";
    }

    let emailIdElement=document.createElement("td")
    emailIdElement.id="emailId"+count
    if(phoneNumber.value!=""){
        emailIdElement.textContent=emailId.value
    }
    else{
        emailIdElement.textContent="-";
    }

    createRowElement.appendChild(createUserNameElement)
    createRowElement.appendChild(phoneNumberNameElement)
    createRowElement.appendChild(emailIdElement)
    tableInfo.appendChild(createRowElement)

    userName.value="";
    phoneNumber.value="";
    emailId.value="";
}

function resetContactDetails(){
    userName.value="";
    phoneNumber.value="";
    emailId.value="";

}

function saveContactDetails(){
    localStorage.setItem(createRowElement,createRowElement)
}