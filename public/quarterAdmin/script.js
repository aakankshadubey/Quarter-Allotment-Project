$(() => {
    let list = $('#list')

    $.get('/quarterAdmin/getList', (resultList) => {
        for (let user of resultList) {
            list.append($(`
            <tr>
            <td>${user.employeeId}</td>
            <td>${user.name}</td>
            <td>${user.department}</td>
            <td>${user.designation}</td>
            <td>  <button id="${user.name}" onclick="clickFun(this.id)" class="confirm">Confirm Quarter</button> </td>
           </tr>

            </li>`))
        }

        $('#script').html(
            `<script>
            function clickFun(userName) {

                let qno = prompt("Enter Quarter Number")
                $.post('/confirm', {name : userName,qno : qno}, (obj) => {
                    if(obj.success) {
                        alert(userName + " Has Been Confirmed")
                        document.location.reload()

                    }                    
                })
            }
            </script>
            `
        )
    })


})