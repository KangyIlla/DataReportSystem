import React from 'react'
import { CssReset } from '@dhis2/ui-core'
import { DataProvider } from '@dhis2/app-runtime'
import { HeaderBar } from '@dhis2/ui-widgets'
import { Main } from '../Main'
import { Interests } from '../Interests'
import 'typeface-roboto'
import './style.css'

const baseUrl = process.env.REACT_APP_DHIS2_BASE_URL
const apiVersion = process.env.REACT_APP_DHIS2_API_VERSION

export const App = () => {
  return(
  <>
      <CssReset />
      <DataProvider baseUrl={baseUrl} apiVersion={apiVersion}>
          <HeaderBar appName={"Report"} className="headerbar" />
          <Main>
              <Interests />
          </Main>
      </DataProvider>
  </>
  )
}
