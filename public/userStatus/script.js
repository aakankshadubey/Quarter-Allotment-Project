$(() => {
    console.log('scrpit loaded')
    $.get('/userStatus/getStatus', (obj) => {
        let status = "Allotted Quarter Number " +  obj.status

        if(obj.status == -1) {
             status = "Pending"
        }

        if(obj.status == 0) {
            status = "Verified"
       }

        $('#content').html(`
        <h4> Name : ${obj.name}</h4>
        <h4> Employee Id : ${obj.employeeId}</h4>
        <h4> Department : ${obj.department}</h4>
        <h4> Status : ${status} </h4>
        
        `)
    })
})


