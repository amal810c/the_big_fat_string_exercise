"use strict";

//setting up
window.addEventListener("load", start);

function start() {
  console.log("start");
  clickGenerate();
}

function clickGenerate() {
  console.log("click generate");
  document.querySelector("#generate").addEventListener("click", readDropdown);
}

function readInputField() {
  console.log("readInputField");
  //read first input
  const firstInput = document.querySelector("#input").value;
  return firstInput;
}

function readDropdown() {
  console.log("clicked");
  const firstInputString = readInputField();
  const dropdown = document.querySelector("#dropdown").value;

  if (dropdown == "1") {
    option1(firstInputString);
  } else if (dropdown == "2") {
    option2(firstInputString);
  } else if (dropdown == "3") {
    option3(firstInputString);
  } else if (dropdown == "4") {
    option4(firstInputString);
  } else if (dropdown == "5") {
    option5(firstInputString);
  } else if (dropdown == "6") {
    option6(firstInputString);
  } else if (dropdown == "7") {
    option7(firstInputString);
  } else if (dropdown == "8") {
    option8(firstInputString);
  }
}

function option1(firstInputString) {
  //If input is a first name: Make the first character in a name uppercase, and the rest lowercase
  const first = firstInputString.substring(0, 1).toUpperCase();
  const rest = firstInputString.substring(1).toLowerCase();
  const result = first + rest;
  console.log(result);
  writeResultInOutputField(result);
}

function option2(firstInputString) {
  //If input is a full name: Find the first name
  const result = firstInputString.split(" ", 1);
  writeResultInOutputField(result);
}

function option3(firstInputString) {
  //If input is a full name: Find the length of the first name
  const result = firstInputString.split(" ", 1);
  console.log(result[0].length);
  writeResultInOutputField(result[0].length);
}

function option4(firstInputString) {
  //If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string
  const firstSpace = firstInputString.indexOf(" ");
  const lastSpace = firstInputString.lastIndexOf(" ");
  const middleName = firstInputString.substring(firstSpace + 1, lastSpace);
  const result =
    "The middlename is " +
    middleName +
    " it starts at index " +
    (firstSpace + 1) +
    " and ends at index " +
    (lastSpace - 1);
  writeResultInOutputField(result);
}

function option5(firstInputString) {
  //If input is a filename: Check if a filename is .png or .jpg
  const jpg = "This is a jpg";
  const png = "This is a png";

  if (firstInputString.endsWith(".jpg") == true) {
    writeResultInOutputField(jpg);
    console.log(jpg);
  } else if (firstInputString.endsWith(".png") == true) {
    writeResultInOutputField(png);
    console.log(png);
  } else {
    writeResultInOutputField("This is not a filename");
  }
}

function option6(firstInputString) {
  //If input is a password: Hide a password with the correct number of *s
  const result = firstInputString.replaceAll(/./g, "*");
  console.log(result);
  writeResultInOutputField(result);
}

function option7(firstInputString) {
  //With any input: Make the third character uppercase
  const randominput = firstInputString;
  //Turn randominput into lowercase
  const lowercasename = randominput.toLowerCase();
  const oneuppercase = lowercasename.substring(2, 3).toUpperCase();
  const result =
    lowercasename.substring(0, 2) + oneuppercase + lowercasename.substring(3);
  console.log(result);
  writeResultInOutputField(result);
}

function option8(firstInputString) {
  //With any input: Make a character uppercase, if it follows a space or a hyphen
  const indexspace = firstInputString.indexOf(" ");
  const indexhyphen = firstInputString.indexOf("-");
  let result = "";

  let firstpart = "";
  let secondpart = "";
  let test = "";

  if (indexspace != -1) {
    firstpart = firstInputString.substring(0, indexspace + 1);
    secondpart = firstInputString.substring(indexspace + 2);
    test = firstInputString
      .substring(indexspace + 1, indexspace + 2)
      .toUpperCase();
    result = firstpart + test + secondpart;
  } else if (indexhyphen != -1) {
    firstpart = firstInputString.substring(0, indexhyphen + 1);
    secondpart = firstInputString.substring(indexhyphen + 2);
    test = firstInputString
      .substring(indexhyphen + 1, indexhyphen + 2)
      .toUpperCase();
    result = firstpart + test + secondpart;
  } else {
    result = firstInputString;
  }

  console.log(firstpart + test + secondpart);

  writeResultInOutputField(result);
}

function writeResultInOutputField(result) {
  document.querySelector("#output").value = result;
}
