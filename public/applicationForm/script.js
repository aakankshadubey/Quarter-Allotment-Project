$(() => {

    console.log("script Loaded")
    let maritalStatus = 0

    $('#married').on('click change', function (e) {
        console.log('married')
        maritalStatus = 1

    })
    $('#submit').click((e) => {

        console.log('clicked')

        if($('#maritalStatus').val() == "Married") {
            maritalStatus = 1
            console.log('married')
        }

        $.post('/applicationForm', {
                name: $('#name').val(),
                employeeId: $('#employeeId').val(),
                department: $('#department').val(),
                sex: $('#sex').val(),
                fatherName: $('#fatherName').val(),
                motherName: $('#motherName').val(),
                dob: $('#dob').val(),
                address: $('#address').val(),
                state : $('#state').val(),
                zip : $('#zip').val(),
                contactNumber: $('#contactNumber').val(),
                emailId: $('#emailId').val(),
                aadhaarNumber: $('#aadhaarNumber').val(),
                panNumber: $('#panNumber').val(),
                designation: $('#designation').val(),
                fatherContactNumber: $('#fatherContactNumber').val(),
                fatherOccupation: $('#fatherOccupation').val(),
                motherContactNumber: $('#motherContactNumber').val(),
                motherOccupation: $('#motherOccupation').val(),
                maritalStatus: maritalStatus,
                spouseName: $('#spouseName').val()
            },
            (objVal) => {
                window.location = objVal.redirect
            })

    })

})


