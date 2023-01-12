javascript:(
function(){

let ready = document.getElementById('userreportsquizusers_scroller_alert');
if (ready) {
     let students = document.getElementsByTagName('tr');
     let data = 'netid,firstname,lastname,junk,junk,score\n';
     for (let i = 1; i< students.length; i++) {
         netid = students[i].id.split('_')[3];
         if (netid) {
             netid = '"' + netid + '"';
             name = students[i].getElementsByTagName('a')[0].textContent.replace(/^[\n ]*/gm,'').trimEnd();
             fname = name.split(' ')[0];
             lname = '"' + name.split(fname + ' ')[1] + '"';
             fname = '"'+ fname + '"';
             score = '"' + students[i].getElementsByTagName('td')[2].textContent.replace(/[ %\n]/gm,'') + '"';
             data = data + [netid,fname,lname,'"x"','"x"',score].join(',') + '\n';
          }
     }
     const type = "text/plain";
     const blob = new Blob([data],{type});
     const clippy = [new ClipboardItem({ [type]: blob})];
     navigator.clipboard.write(clippy).then(
        () => {
        alert("Data written to clipboard!");
        },
        () => {
        alert("Data NOT written to clipboard!");
        }
    );

} else {
    endlessScrollersPrototype.loadNextPage('userreportsquizusers');
}
})();