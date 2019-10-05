import React, { useEffect, useState } from 'react'
import { get, put } from '../../api.js'
import { Button, InputField, ButtonStrip, Help } from '@dhis2/ui-core'
import { ConfirmModal } from '../ConfirmModal'

export const Interests = () => {
    const [displayName, setDisplayName] = useState('')
    const [interests, setInterests] = useState('')
    const [loading, setLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [error, setError] = useState(false)

    const [user, setUser] = useState({
        displayName: '',
        interests: '',
        education: '',
        introduction: '',
        email: '',
    })

    useEffect(() => {
        const getInterests = async () => {
            const response = await get(
                'me?fields=interests,displayName,email,education,introduction'
            )
            setDisplayName(response.displayName)
            setInterests(response.interests)
            setUser(response)
            setLoading(false)
        }
        getInterests()
    }, [])

    const onSubmit = async () => {
        setLoading(true)
        setOpenModal(false)

        try {
            await put('me', { interests })
            setError(false)
        } catch (e) {
            console.log(e)
            setError(true)
        } finally {
            setLoading(false)
        }
    }
    const onChange = event => setInterests(event.target.value)

    const onClear = () => setInterests('')

    return (
        <article className="interests-section">
            {openModal && (
                <ConfirmModal
                    onConfirm={onSubmit}
                    onCancel={() => setOpenModal(false)}
                />
            )}

            <h1>{user.displayName}</h1>
            <p>{user.email}</p>
            <InputField
                value={interests}
                onChange={onChange}
                name="interests"
                label="interests"
                loading={loading}
                initialFocus
            />
            {error && !loading && <Help error> Failed to set interests </Help>}
            <ButtonStrip className="button-strip" end>
                <Button primary onClick={() => setOpenModal(true)}>
                    Submit
                </Button>
                <Button onClick={onClear}>Clear</Button>
            </ButtonStrip>
        </article>
    )
}
