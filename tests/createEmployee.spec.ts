import { test, expect} from '../fixtures/webApp.fixture'
import { employee } from '../tests/testData'
import { PimAPI } from '../page-object/pimAPI'

test('Create employee', async ({  request, page }) => {

    const pimapi = new PimAPI( request )

    console.log(`The employee ${employee.Name} ${employee.LastName} of id ${employee.Id} is not yet added to OrangeHrm.`)
    
    const newEmployee = await pimapi.createEmployee()

    expect (newEmployee.ok()).toBeTruthy()

    // GET employee list

    const employeesList = await pimapi.getBody()

    console.log(employeesList)

    const lastItem = await employeesList[employeesList.length - 1]

    console.log(lastItem)

    console.log(`The employee ${employee.Name} ${employee.LastName} of id ${employee.Id} is added to OrangeHrm.`)

})