import { test, expect} from '../fixtures/webApp.fixture'
import { employee } from '../tests/testData'
import { PimAPI } from '../page-object/pimAPI'

test('Update employee', async ({ request }) =>{

    const pimapi = new PimAPI( request )

    const newEmployee = await pimapi.createEmployee()

    expect (newEmployee.ok()).toBeTruthy()

    console.log(`${employee.Name} ${employee.LastName} is added.`)

    const body = await pimapi.getBody()

    const lastItemEmpNumber = await body[body.length-1].empNumber

    console.log(lastItemEmpNumber)

    const getEmployee = await request.put(`http://localhost:8080/web/index.php/api/v2/pim/employees/${lastItemEmpNumber}/personal-details`, {
        data:{
            "lastName":employee.newLastName,"firstName":employee.newName,"middleName":employee.MiddleName,"employeeId":employee.Id,"otherId":employee.OtherId,"drivingLicenseNo":employee.drivingLicenseNo,"drivingLicenseExpiredDate":null,"gender":null,"birthday":null,"nickname":employee.nickname,"smoker":false,"militaryService":""
        }
    })

    console.log(`${employee.Name} ${employee.LastName} is now ${employee.newName} ${employee.newLastName}.`)

})