// BELAJAR JAVASCRIPT//
// tipe data js :
// number = angka
// string = karakter
// boolean = ttur/false

// key_word nama_variabel = value
// var
// let
// const

// var myName ="Dwiky";

// let myAge = 25;
// console.log("My Age : ", myAge);
// myAge = 27;
// console.log("My Age 2 : ", myAge);

// const myHome ="Palembang";
// console.log("My Home : ", myHome);

function getData() {
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let number = document.getElementById("numberInput").value;
    let subject = document.getElementById("subjectInput").value;
    let message = document.getElementById("messageInput").value;

    console.log(name);
    console.log(email);
    console.log(number);
    console.log(subject);
    console.log(message);

    document.getElementById("nameInput").value = "" ;
    document.getElementById("emailInput").value = "" ;
    document.getElementById("numberInput").value = "" ;
    document.getElementById("subjectInput").value = "" ;
    document.getElementById("messageInput").value = "" ;

}