import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

class Gift extends Component {

    constructor() {
        super()

        this.state = {
            person: '',
            present: ''
        }
    }

    render() {
        const { removeGift, gift } = this.props
        return (
            <div>
                <Form>
                    <FormGroup>
                        {/* <ControlLabel>Person</ControlLabel> */}
                        <FormControl 
                            className="input-person"
                            onChange={event => this.setState({ person: event.target.value })} 
                        />
                    </FormGroup>
                    <FormGroup>
                        {/* <ControlLabel>Present</ControlLabel> */}
                        <FormControl
                            className="input-present"
                            onChange={event => this.setState({ present: event.target.value })}
                        />
                    </FormGroup>
                </Form>
                <Button className="btn-remove" onClick={() => removeGift(gift.id)}>Remove Gift</Button>
            </div>
        )
    }
}

export default Gift