javascript:(
function(){

function logResponse() {
    content = JSON.parse(this.responseText).content[0];
    row = document.querySelector(content.target);
    row.innerHTML = content.content;
    console.log(this.responseText);
}

function extendPage() {
    let ready = document.getElementById('userreportsquizusers_scroller_alert');
    if (ready === null) {
    endlessScrollersPrototype.loadNextPage('userreportsquizusers');
    setTimeout(extendPage,4000);
    } else { deleteStudents()}
}

function reloadPage() {location.reload()}

function deleteStudent(urls) {
    url = urls.shift();
    console.log(String(urls.length) + ' remaining to delete...');
    let req = new XMLHttpRequest();
    req.addEventListener("load",logResponse);
    req.open('GET',url);
    req.send();
    if (urls.length > 0) {
       setTimeout(deleteStudent, 375, urls);
    } else {setTimeout(reloadPage,375)}
}

function deleteStudents() {
  alert('Deleting all students!');
  let students = document.getElementsByTagName('tr');
  let urls = [];
  for (let i = 1; i< students.length; i++) {
       if (students[i].getElementsByClassName('removeAttempts').length) {
         url = students[i].getElementsByClassName('removeAttempts')[0].href;
         url = url.split('&retakeAllowed')[0];
         url = url.replace('-remove-attempts-dialog','-delete-attempts');
         url = url + '&delete_all=1&format=ajax';
         urls = urls.concat([url]);
       }
  }
  deleteStudent(urls);
}

let ready = document.getElementById('userreportsquizusers_scroller_alert');
if (ready === null) {
    endlessScrollersPrototype.loadNextPage('userreportsquizusers');
    setTimeout(extendPage,4000);
} else { deleteStudents()}
})();