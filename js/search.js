const search = document.getElementById("search");
const form = document.getElementById('widget-container');
const userSearch = document.getElementById('userField');
const messageUser = document.getElementById('messageField');


search.addEventListener("keyup", filter);
function filter() {
  const searchValue = search.value.toLowerCase();
  const chart = document.querySelectorAll(".chart");
  for (let i = 0; i < chart.length; i++) {
    const heading = document.querySelectorAll(".chart-heading");
    for (let i = 0; i < heading.length; i++) {
      const headingValue = heading[i].innerHTML.toLowerCase();
      if (headingValue.indexOf(searchValue) > -1) {
        chart[i].style.display = "grid";
      } else {
        chart[i].style.display = "none";
      }
    }
  }
}

//alert for user messages//

form.addEventListener('submit', (e) => {
e.preventDefault();
if(userSearch.value ==='' && messageUser.value === ''){
  swal({
  title: "Error!",
  text: "Please fill out user and message field before sending",
  icon: "error",
});
} else if (userSearch.value === ''){
  swal({
  title: "Error!",
  text: "Please fill out user field before sending!",
  icon: "error",
});
} else if (messageUser.value === ''){
  swal({
  title: "Error!",
  text: "Please fill out message field before sending!",
  icon: "error",
});
} else {
  swal({
  title: "Success!",
  text: "Your message has been successfully sent!",
  icon: "success",
});
  userSearch.value = '';
  messageUser.value = '';
}
});

//settings local storage//
const settings = document.querySelector('.settings');
const emailCheckBox = document.querySelector('#email-notification');
const publicCheckBox = document.querySelector('#profile-to-public');
const selectClass = document.getElementById('select').value;
const saveBtn = document.querySelector('#save');
const cancelBtn = document.querySelector('#cancel');

document.addEventListener('DOMContentLoaded', function(){
saveBtn.addEventListener('click', save);
function save () {
  localStorage.setItem('select-time-zone', selectClass);
  localStorage.setItem('emailCheckBox', emailCheckBox.checked);
  localStorage.setItem('profile-to-public', publicCheckBox.checked);

}
})

// var checked = JSON.parse(localStorage.getItem('emailCheckBox'));
