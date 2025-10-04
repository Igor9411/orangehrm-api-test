import { test as setup, expect} from '../fixtures/webApp.fixture.ts'

setup('API test', async ({  webApp }) => {

    await expect(webApp.getByRole('heading', { name: 'Dashboard' })).toBeVisible()

    await webApp.context().storageState({ path: '.auth/login.json'})

})