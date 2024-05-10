const baseURL = 'http://localhost:5000'
// start Display data
const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'authorization': `Hamada__${localStorage.getItem("access_Token")}`
}
function informationPatient(id) {

    axios({
        method: 'get',
        url: `${baseURL}/doctor/getOnePatient/${id}`,
        headers
    }).then(function (response) {
        console.log({ response });
        const { message } = response.data
        if (message == "Done") {
           // window.location.href = 'patientInformation.html';
            showDataOnePatient({OnePatientDocID})
         } else {
                console.log("Fail to signup");
                alert(message)
            }
        }).catch(function (error) {
            console.log(error);
        });

}

// //
// // redirect to reply complaint page
// function reply(id) {
//     localStorage.setItem("complaintId", id)
//     window.location.href = 'replyComplaint.html';

// }



function showDataOnePatient(OnePatientDocID = []) {
    let table = ``
    
    console.log({ OnePatientDocID });
    for (let index = 0; index < OnePatientDocID.length; index++) {
        
        table += `  <tr>
        <td >${OnePatientDocID[index].firstName}</td>
     
        <td >${OnePatientDocID[index].phone_one}</td>
        
        <td >${OnePatientDocID[index].gender}</td>
        </tr>`
        
    }
    document.getElementById('OnePatient').innerHTML = table
}

