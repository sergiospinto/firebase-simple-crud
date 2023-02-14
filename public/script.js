var textInput = document.getElementById("text-input");
var submitButton = document.getElementById("submit-button");
var table = document.getElementById("table");

submitButton.addEventListener("click", function () {
    var db = firebase.firestore();
    var text = textInput.value;
    textInput.value = '';
    db.collection("Comments").add({
        Comment: text,
        Timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then(function () {
            console.log("Comment added successfully");
        })
        .catch(function (error) {
            console.error("Error adding comment: ", error);
        });
    generateTable();

});

window.addEventListener("load", generateTable);

function generateTable() {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    var db = firebase.firestore();
    db.collection("Comments").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = doc.data().Comment;
            var buttonGroup = document.createElement("div");
            buttonGroup.classList.add("btn-group");

            var deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete";
            deleteButton.classList.add("btn", "btn-danger");
            deleteButton.addEventListener("click", function () {
                db.collection("Comments").doc(doc.id).delete().then(function () {
                    console.log("Comment deleted successfully");
                    row.remove();
                }).catch(function (error) {
                    console.error("Error deleting comment: ", error);
                });
            });
            buttonGroup.appendChild(deleteButton);

            var editButton = document.createElement("button");
            editButton.innerHTML = "Edit";
            editButton.classList.add("btn", "btn-primary");
            editButton.addEventListener("click", function () {
                cell1.contentEditable = true;
                cell1.focus();
                cell1.addEventListener("blur", function () {
                    db.collection("Comments").doc(doc.id).update({
                        Comment: cell1.innerHTML
                    }).then(function () {
                        console.log("Comment updated successfully");
                        cell1.contentEditable = false;
                    }).catch(function (error) {
                        console.error("Error updating Comment: ", error);
                    });
                });
            });
            buttonGroup.appendChild(editButton);
            cell2.appendChild(buttonGroup);
        });
    });
}
