import { test, expect, request } from '@playwright/test'

test('API test', async ({  page, request }) => {

    await page.goto('http://localhost:8080/web/index.php/auth/login')

    await page.getByRole('textbox', { name: 'Username' }).fill('Litvin')

    await page.getByRole('textbox', { name: 'Password' }).fill('RemoteTesting12#')

    await page.getByRole('button', { name: 'Login' }).click()

    const response = await request.get('http://localhost:8080/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC')

    const responseObject = await response.json()

    console.log(responseObject)

    expect (responseObject.data[0].lastName).toEqual('API')

    const pResponse = await request.post('http://localhost:8080/web/index.php/api/v2/pim/employees', {
        data:{
            "firstName":"Marek","middleName":"Henryk","lastName":"Ciężarek","empPicture":null,"employeeId":"0143"
        }
    })

    const responsePost = await pResponse.json()
    console.log(responsePost)

    const putResponse = await request.put('http://localhost:8080/web/index.php/api/v2/pim/employees/8/personal-details',{
        data:{
            "lastName":"Czitos","firstName":"Marianosz","middleName":"Wieteska","employeeId":"0143","otherId":"69","drivingLicenseNo":"","drivingLicenseExpiredDate":null,"gender":null,"birthday":null,"nickname":"","smoker":false,"militaryService":""
        }
    })

    const responsePut = await putResponse.json()
    console.log(responsePut)

    
})