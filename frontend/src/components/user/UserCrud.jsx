import React, { Component } from 'react'
import Main from '../templates/Main'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User registration: Include, Read, Update and Delete!'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                User Registration
            </Main>
        )
    }
}