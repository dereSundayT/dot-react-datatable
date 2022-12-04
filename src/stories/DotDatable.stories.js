import React from "react";
import {storiesOf} from "@storybook/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DotDatatable} from "../";


const stories = storiesOf('App Test', module)
const data = [
    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },    {
        id: '1',
        name: 'John Doe',
        account_number: '123456789',
        email: 'johndoe@gmail.com',
        phone_number: '09023234545',
        requested_by: 'customer'
    },
]

const cols = [
    {data: 'id'},
    {data: 'name'},
    {data: 'account_number'},
    {data: 'email'},
    {data: 'phone_number'},
    {data: 'requested_by'},
    {
        data: (a) => {
            return `<small class='badge badge-success'>approved</small>`
        }
    },
    {
        data: function (a) {
            return (`
                            <a href="#0"
                               data-id="${a.id}"
                                class="action-icon test"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#savingsDetails"
                                aria-controls="savingsDetails">
                                <i class="fa fa-eye"></i>
                            </a>`
            )
        },
    }
]
//
stories.add('App', () => {
    return (<DotDatatable
        tableId={'table_id_internet_banking_request'}
        tableClassNames={['table table-striped']}
        tableHeaderNames={['S/N', 'Name', 'Account Number', 'Email', 'Phone Number', 'customer', 'status', 'action']}
        data={data}
        tableColumns={cols}
        otherTableConfig={
            {
                isLandScape : false,
                exportOptionsIndex : [0,1],
                exportTitle: 'Test here'
            }
        }
    />)
})