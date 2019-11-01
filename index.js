var db = firebase.firestore()


function submitResponse() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var ageRange = document.getElementById("ageRange").value;
    var childrenPresent = document.getElementById("childrenPresent").value;
    var numberOfChildren = document.getElementById("numberOfChildren").value;
    var medicalAttention = document.getElementById("medicalAttention").value;
    var patientReturnPossability = document.getElementById("patientReturnPossability").value;
    var streetSleptOnNightBefore = document.getElementById("streetSleptOnNightBefore").value;
    var seekingEmployment = document.getElementById("seekingEmployment").value;
    var jobTypesSeeking = document.getElementById("jobTypesSeeking").value;

    if(firstName.length && lastName.length && ageRange.length && childrenPresent.length
        && medicalAttention.length && patientReturnPossability.length 
        && streetSleptOnNightBefore.length && seekingEmployment.length && jobTypesSeeking.length != 0) {
            db.collection("HomelessInitiative").doc().set({
                First_Name:firstName,
                Last_Name:lastName,
                Age_Range:ageRange,
                Children_Present:childrenPresent,
                Number_Of_Children:numberOfChildren,
                Medical_Attention:medicalAttention,
                Patient_Return_Possibility:patientReturnPossability,
                Street_Slept_On_Night_Before:streetSleptOnNightBefore,
                Seeking_Employment:seekingEmployment,
                Job_Types_Seeking:jobTypesSeeking
            }).then(function(docRef) {
                window.alert("Check In Successful.");
                clearAllFields();
            })
        }
        else {
            window.alert("All fields with asterics are required.")
        }
    }

function clearAllFields() {
    document.getElementById("firstName").value = ' ';;
    document.getElementById("lastName").value = ' ';;
    document.getElementById("ageRange").value = ' ';;
    document.getElementById("childrenPresent").value = ' ';;
    document.getElementById("numberOfChildren").value = ' ';;
    document.getElementById("medicalAttention").value = ' ';;
    document.getElementById("patientReturnPossability").value = ' ';;
    document.getElementById("streetSleptOnNightBefore").value = ' ';;
    document.getElementById("seekingEmployment").value = ' ';;
    document.getElementById("jobTypesSeeking").value = ' ';;

    const listAllResponses = document.querySelector("listAllResponses");

    db.collection("SHPENationalBlueAndWhite").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            listAllResponses.innerHTML += "<div class='list'><h3>" + doc.data().name + "\n" + doc.data().cin + "</h3></div>"
        });
    });

}