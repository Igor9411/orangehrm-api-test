import { test, expect} from '../fixtures/webApp.fixture'
import { PimAPI } from '../page-object/pimAPI'

test('Get employees list', async ({  request }) => {

    const pimapi = new PimAPI( request )

    const employeesList = await pimapi.getBody()

    console.log(employeesList)

    const lastItem = await employeesList[employeesList.length - 1]

    console.log(lastItem)
    
    expect(lastItem.empNumber).toEqual(35)
 
})
