import { test, expect, APIRequestContext, request} from '@playwright/test';
import { employee } from '../tests/testData'

export class PimAPI {

    request: APIRequestContext
    getEmployeesURL = 'http://localhost:8080/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.empNumber&sortOrder=ASC'
    createEmployeeUrl = 'http://localhost:8080/web/index.php/api/v2/pim/employees'

    constructor (request: APIRequestContext){
        this.request = request  
        
    }

     async getBody() {

        const response = await this.request.get(this.getEmployeesURL)

        expect(response).toBeOK()

        const responseBody = await response.json()

        const body = await responseBody.data

        return body
        

    }

    async createEmployee(){

        const response = await this.request.post(this.createEmployeeUrl, {
            data: {
                "firstName":employee.Name,"middleName":"","lastName":employee.LastName,"empPicture":null,"employeeId":employee.Id
            }
        })

        return response

    }

    // async updateEmployee(){



    //     const updateEmployee = await this.request.put(`http://localhost:8080/web/index.php/api/v2/pim/employees/${employeEmpNumber}/personal-details`, {
    //     data:{
    //         "lastName":employee.newLastName,"firstName":employee.newName,"middleName":employee.MiddleName,"employeeId":employee.Id,"otherId":employee.OtherId,"drivingLicenseNo":employee.drivingLicenseNo,"drivingLicenseExpiredDate":null,"gender":null,"birthday":null,"nickname":employee.nickname,"smoker":false,"militaryService":""
    //     }
    // })

    // }

}