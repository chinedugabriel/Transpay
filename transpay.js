// all veriable are listed here

let copyRightDate = document.getElementById('Copyright-date');

// the code below helps to update the year of the copyright by itself
{
let date = new Date();

copyRightDate.innerHTML = date.getFullYear();
}