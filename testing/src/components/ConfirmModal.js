import React from 'react'
import { Modal, ButtonStrip, Button } from '@dhis2/ui-core'

export const ConfirmModal = ({ onConfirm, onCancel }) => {
    return (
        <Modal open small>
            <Modal.Title> Set interests </Modal.Title>
            <Modal.Content>
                <p> Are you sure you want to set interests? </p>
            </Modal.Content>
            <Modal.Actions>
                <ButtonStrip end>
                    <Button onClick={onCancel} secondary>
                        Cancel
                    </Button>
                    <Button onClick={onConfirm} primary>
                        Submit
                    </Button>
                </ButtonStrip>
            </Modal.Actions>
        </Modal>
    )
}
