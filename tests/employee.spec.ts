import { test, expect} from '../fixtures/webApp.fixture'
import { employee } from '../tests/testData'

test('Create employee', async ({  request, page }) => {

    // POST employee

    console.log(`The employee is ${employee.Name} ${employee.LastName} of id ${employee.Id}.`)

    const createEmploteeRequest = await request.post('http://localhost:8080/web/index.php/api/v2/pim/employees',{
        data:{
            "firstName":employee.Name,"middleName":"","lastName":employee.LastName,"empPicture":null,"employeeId":employee.Id
        }
    })

    const createdEmployee = await createEmploteeRequest.json()
    
    console.log(createdEmployee)

    // GET employee list

    const getEmployeeList = await request.get('http://localhost:8080/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.empNumber&sortOrder=ASC')

    const body = await getEmployeeList.json()

    const bodyData = await body.data

    const lastItem = await bodyData[bodyData.length - 1]

    console.log(lastItem.employeeId)

    expect(lastItem.employeeId).toEqual(String(employee.Id))



})

test('Update employee', async ({ request }) =>{

     const createEmploteeRequest = await request.post('http://localhost:8080/web/index.php/api/v2/pim/employees',{
        data:{
            "firstName":employee.Name,"middleName":"","lastName":employee.LastName,"empPicture":null,"employeeId":employee.Id
        }
    })

    const createdEmployee = await createEmploteeRequest.json()

    console.log(createdEmployee)

    const getBody = await request.get('http://localhost:8080/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.empNumber&sortOrder=ASC')

    const body = await getBody.json()

    const bodyData = await body.data

    const employeEmpNumber = await bodyData[bodyData.length - 1].empNumber

    console.log(employeEmpNumber)

    const getEmployee = await request.put(`http://localhost:8080/web/index.php/api/v2/pim/employees/${employeEmpNumber}/personal-details`, {
        data:{
            "lastName":employee.newLastName,"firstName":employee.newName,"middleName":employee.MiddleName,"employeeId":employee.Id,"otherId":employee.OtherId,"drivingLicenseNo":employee.drivingLicenseNo,"drivingLicenseExpiredDate":null,"gender":null,"birthday":null,"nickname":employee.nickname,"smoker":false,"militaryService":""
        }
    })

    const updatedEmployee = await getEmployee.json()

    console.log(updatedEmployee)

})

test('Delete employee', async ({ request}) =>{

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

test('Get body', async ({  request }) => {

    const getBody = await request.get('http://localhost:8080/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.empNumber&sortOrder=ASC')

    const body = await getBody.json()

    const bodyData = await body.data

    const lastItem = await bodyData[bodyData.length - 1].empNumber

    console.log(lastItem)

    console.log(bodyData)

   

})
