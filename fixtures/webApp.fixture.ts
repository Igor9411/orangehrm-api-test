import { test as base, Page} from '@playwright/test'
import { UiHelpers } from '../page-object/helpers/uiHelpers'

export { expect, request } from '@playwright/test'

const USERNAME = 'Litvin'
const PASSWORD = 'RemoteTesting12#'

type myFixtures = {

    webApp: Page
    uiHelpers: UiHelpers

}

export const test = base.extend < myFixtures > ({

     webApp: async ({ page, uiHelpers }, use:(fixture: any) => Promise<void>) => {

            await page.goto('')
    
            await uiHelpers.gettingInputByIndex(0).fill(USERNAME)
    
            await uiHelpers.gettingInputByIndex(1).fill(PASSWORD)
    
            await page.getByRole('button', { name: 'Login' }).click()
    
            await use(page)

        },
    
    uiHelpers: async ({ page }, use: (fixture: UiHelpers) => Promise<void>) => {

            await use( new UiHelpers ( page ))

        },

})