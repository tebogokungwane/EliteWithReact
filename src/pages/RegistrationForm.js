import React from 'react'
import {Form, Button, Input} from 'antd';

function RegistrationForm() {
    return (
        <div className='App-header'>
            <Form>

                <Form.Item name='fullName' label='Full Name'></Form.Item>
                <Input placeholder='type your name'/>
            </Form>
            
        </div>
    )
}

export default RegistrationForm;