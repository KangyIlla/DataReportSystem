import React from 'react'
import { Card } from '@dhis2/ui-core'
import './style.css'

export const Main = ({ children }) => (
    <main id="main">
        <Card className="padded-card">{children}</Card>
    </main>
)
