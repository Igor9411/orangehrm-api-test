import { faker } from '@faker-js/faker'

export const employee = {
    Name: faker.person.firstName(),
    LastName: faker.person.lastName(),
    Id: String(faker.number.int({ max: 10000 })),
    MiddleName: faker.person.middleName(),
    OtherId: String(faker.number.int( {min: 1000, max: 2000} )),
    drivingLicenseNo: faker.string.alphanumeric({length: {min: 8, max: 11}}),
    nickname: faker.internet.username(),
    newName: faker.person.firstName(),
    newLastName: faker.person.lastName()
}

