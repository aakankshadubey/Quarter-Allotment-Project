
$(() => {
    console.log('Script Loaded')
    let list = $('#list')

    $.get('/applicantList/getList', (resultList) => {
        console.log(resultList)
        for (let user of resultList) {
            list.append($(

            `<tr>
            <td>${user.employeeId}</td>
            <td>${user.name}</td>
            <td>${user.department}</td>
            <td>${user.designation}</td>
            <td><button id="${user.name}" onclick="clickFun(this.id)" class="verify">Verify</button>  </td>
           </tr>`
            )
            )

        }

        $('#script').html(
            `<script>
            function clickFun(userName) {
                $.post('/verify', {name : userName}, (obj) => {
                    if(obj.success) {
                        alert(userName + " Verified")
                        document.location.reload()
                    }                    
                })
            }
            </script>
            `
        )
    })
})