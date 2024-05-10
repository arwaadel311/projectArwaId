
//approve doctor data from Admin
function getDataUsers() {
    axios({
        method: 'get',
        url: `${baseURL}/admin/allDoctor`,
        headers
    }).then(function (response) {
        const { doctors} = response.data
        console.log({ doctors});
        showDataDo(doctors)
    }).catch(function (error) {
        console.log(error);
    });
}


function showDataDo(doctors=[]) {
    let table = ``
    console.log({ doctors});
    for (let index = 0; index < doctors.length; index++) {
        
        table += `  <tr>
        <td id="DoctorId">${doctors[index]._id}</td>
        
        <td id="DoctorId">${doctors[index].firstName}</td>
        
        <td id="DoctorId">${doctors[index].lastName}</td>
        
        <td id="DoctorId">${doctors[index].email}</td> 
        
       
        <td id="emailDoctor">${doctors[index].phone_one}</td>
         
        <td id="emailDoctor">${doctors[index].role}</td>
       
            <td>
            <button onclick='deleteDoctor("${doctors[index]._id}")' class="btn btn-danger">Delete</button>
             
              </td>
         
        </tr>`
        
    }
    document.getElementById('Doctors').innerHTML = table
}


getDataUsers()

//approve doctor data from Admin
function getDataPatients() {
    axios({
        method: 'get',
        url: `${baseURL}/admin/allPatient`,
        headers
    }).then(function (response) {
        const { patients} = response.data
     //   console.log({ patients});
        showDataPa(patients)
    }).catch(function (error) {
        console.log(error);
    });
}


function showDataPa(patients=[]) {
    let table = ``
    console.log({ patients});
    for (let index = 0; index < patients.length; index++) {
        
        table += `  <tr>
        <td id="DoctorId">${patients[index]._id}</td>
        
        <td id="DoctorId">${patients[index].firstName}</td>
        
        <td id="DoctorId">${patients[index].lastName}</td>
        
        <td id="DoctorId">${patients[index].email}</td> 
        
       
        <td id="emailDoctor">${patients[index].phone_one}</td>
         
        <td id="emailDoctor">${patients[index].role}</td>
       
            <td>
            <button onclick='deletePatient("${patients[index]._id}")' class="btn btn-danger">Delete</button>
             
              </td>
         
        </tr>`
        
    }
    document.getElementById('Patients').innerHTML = table
}


getDataPatients()



//approve doctor data from Admin
function getDataGuardian() {
    axios({
        method: 'get',
        url: `${baseURL}/admin/allGuardian`,
        headers
    }).then(function (response) {
        const { guardians} = response.data
     //   console.log({ patients});
        showDataGu(guardians)
    }).catch(function (error) {
        console.log(error);
    });
}


function showDataGu(guardians=[]) {
    let table = ``
    console.log({ guardians});
    for (let index = 0; index < guardians.length; index++) {
        
        table += `  <tr>
        <td id="DoctorId">${guardians[index]._id}</td>
        
        <td id="DoctorId">${guardians[index].firstName}</td>
        
        <td id="DoctorId">${guardians[index].lastName}</td>
        
        <td id="DoctorId">${guardians[index].email}</td> 
        
       
        <td id="emailDoctor">${guardians[index].phone_one}</td>
         
        <td id="emailDoctor">${guardians[index].role}</td>
       
            <td>
            <button onclick='deleteGuardian("${guardians[index]._id}")' class="btn btn-danger">Delete</button>
             
              </td>
         
        </tr>`
        
    }
    document.getElementById('Guardians').innerHTML = table
}


getDataGuardian()
// End Display data



//approved admin


function deleteDoctor(doctorId) {

    axios({
        method: 'delete',
        url: `${baseURL}/admin/${doctorId}`,
        headers
    })
    getDataUsers()
}



function deleteGuardian(guardianId) {

    axios({
        method: 'delete',
        url: `${baseURL}/admin/del/${guardianId}`,
        headers
    })
    getDataGuardian()
}




function deletePatient(patientId) {

    axios({
        method: 'delete',
        url: `${baseURL}/admin/delete/${patientId}`,
        headers
    })
    getDataPatients()
}





// $("#reject").click(() => {
//     const data = {
//         title: $('#title').val(),
//         }
//     axios({
//         method: 'put',
//         url: `${baseURL}/admin/approve/adminTrue/:doctorId`,
//         data:data,
//         headers
//     }).then(function (response) {
//         console.log(response.data);
//         const { message } = response.data
//         if (message == "Done Approved") {
//             alert("approved successfully")
            
//         } else {
//             alert("Fail to approvied your note")
//         }
//     }).catch(function (error) {
//         console.log(error);
//     });
// })


