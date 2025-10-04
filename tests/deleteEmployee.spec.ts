import { test, expect} from '../fixtures/webApp.fixture'
import { employee } from '../tests/testData'
import { PimAPI } from '../page-object/pimAPI'


test('Delete employee', async ({ request}) =>{

    const pimapi = new PimAPI( request )

    const getBody = await request.get('http://localhost:8080/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.empNumber&sortOrder=ASC')

    const body = await getBody.json()

    const bodyData = await body.data

    const lastItem = await bodyData[bodyData.length - 1].empNumber

    const deleteRequest = await request.delete('http://localhost:8080/web/index.php/api/v2/pim/employees',{
        data:{
            "ids":[lastItem]
        }
    })

})
