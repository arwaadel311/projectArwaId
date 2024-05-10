const baseURL = 'http://localhost:5000'
// start Display data
const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'authorization': `Hamada__${localStorage.getItem("access_Token")}`
}

function getDataPatient() {
    axios({
        method: 'get',
        url: `${baseURL}/doctor/getPatients`,
        headers
    }).then(function (response) {
        const {  patientDocID } = response.data
        showDataPatient(patientDocID)
    }).catch(function (error) {
        console.log(error);
    });
}


function showDataPatient(patientDocID = []) {
    let table = ``
    
    console.log({ patientDocID });
    for (let index = 0; index < patientDocID.length; index++) {
        
        table += `  <tr>
        <td >${patientDocID[index].firstName}</td>
        <td > <button onclick='information("${patientDocID[index]._id}")' class="btn btn-danger">info</button></td>

        </tr>`
        
    }
    document.getElementById('patients').innerHTML = table
}


getDataPatient()


function information(id) {
    localStorage.setItem("patientId", id)
    window.location.href = 'patientInformation.html';

}