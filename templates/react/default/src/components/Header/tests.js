import React from 'react'
import { Header } from '@/components'

test('render a header', () => {
    const wrapper = shallow(
        <Header>Hello Jest!</Header>
    )
    expect(wrapper).toMatchSnapshot()
})

test('render a small header2', () => {
    const wrapper = shallow(
        <Header small>Hello Jest!</Header>
    )
    expect(wrapper).toMatchSnapshot()
})

test('render a grayish header', () => {
    const wrapper = shallow(
        <Header light>Hello Jest!</Header>
    )
    expect(wrapper).toMatchSnapshot()
})

test('new test', () => {
    const wrapper = shallow(
        <Header light>Hello Jest!</Header>
    )
    expect(wrapper).toMatchSnapshot()
})