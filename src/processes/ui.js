import React, { Component } from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'
const readline = require('readline')

let screen

const renderProcesses = (processes = {}) => {
    screen = blessed.screen({
        autoPadding: true,
        //smartCSR: true,
        fastCSR: true,
        title: 'MHY Dev'
    })
    render(
        <ErrorBoundary>
            <Dashboard processes={processes} screen={screen} />
        </ErrorBoundary>,
        screen
    )
}

export default renderProcesses

const uiLog = (...args) => {
    console.log(...args)
    screen.destroy()
    return null
}

class ErrorBoundary extends Component {
    state = { hasError: false }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    render() {
        if (this.state.hasError) {
            console.error(this.state.error)
            screen.destroy()
            process.exit(0)
        }
        return this.props.children
    }
}

class Dashboard extends Component {
    state = {
        active: 0
    }

    handleTab = (char, event) => {
        const { processes } = this.props
        const newIndex = event.shift ? --this.state.active : ++this.state.active
        const processesKeys = Object.keys(processes)
        const newActiveEl = processesKeys[newIndex]
        this.setState({
            active: newActiveEl ? newIndex : event.shift ? processesKeys.length - 1 : 0
        })
    }

    handleResize = () => {
        this.forceUpdate()
    }

    componentDidMount() {
        const { screen, processes } = this.props
        screen.on('resize', this.handleResize)
        screen.key(['S-tab', 'tab'], this.handleTab)
        screen.key(['escape', 'C-c'], async () => {
            const all = Object.values(processes)
            let length = all.length
            for (const proc of all) {
                this.setState({ shutDownProgress: length-- })
                if (proc.clean) {
                    await proc.clean()
                }
            }
            process.exit(0)
        })
    }

    render() {
        const { active, shutDownProgress } = this.state
        const { processes = {}, screen } = this.props
        const entries = Object.entries(processes)
        return shutDownProgress ? (
            `Shutting down, please wait! ${shutDownProgress} process left...`
        ) : (
            <element>
                {entries.map(([k, process], i) => (
                    <MhyBox
                        key={k}
                        name={k}
                        index={i}
                        isActive={i === active}
                        total={entries.length}
                        process={process}
                        screen={screen}
                        {...this.props}
                    />
                ))}
            </element>
        )
    }
}

class MhyBox extends Component {
    get stylesheet() {
        const { isActive } = this.props
        return {
            bordered: {
                border: {
                    type: 'line'
                },
                style: {
                    border: {
                        fg: isActive ? 'green' : 'blue'
                    },
                    scrollbar: {
                        bg: 'blue'
                    }
                },
                focus: {
                    border: {
                        fg: 'red'
                    }
                }
            }
        }
    }

    state = {
        hasRows: false
    }

    componentWillReceiveProps({ isActive }) {
        if (isActive) {
            this.refs.log.focus()
        }
    }

    componentDidMount() {
        process.env.MHY_UI_SUCCESS = true
        const { process: proc, index } = this.props
        const { hasRows } = this.state
        proc.on('action', action => {
            if (action === 'clear') {
                this.refs.log.setContent('')
            }
        })
        proc.on('data', d => {
            if (!this.refs.log) return
            this.refs.log.add(d)

            if (!hasRows) {
                this.setState({
                    hasRows: true
                })
            }
        })
        if (index === 0) {
            this.refs.log.focus()
        }
    }

    render() {
        const { hasRows } = this.state
        const { name, total, index, isActive, screen, process } = this.props
        const { bordered } = this.stylesheet
        return [
            <log
                key="list"
                keys={true}
                tags={true}
                ref="log"
                label={name}
                class={bordered}
                width={`${100 / total}%`}
                left={`${(100 / total) * index}%`}
                scrollable={true}
                height="100%-3"
            >
                {!hasRows && <Loading />}
            </log>,
            <Actions
                key="actions"
                isListActive={isActive}
                name={name}
                total={total}
                screen={screen}
                index={index}
                process={process}
            />
        ]
    }
}

class Loading extends Component {
    state = {
        position: 0,
        toRight: true
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let { position, toRight } = this.state
            toRight = position === (toRight ? 60 : 0) ? !toRight : toRight
            position = toRight ? ++position : --position

            this.setState({
                position,
                toRight
            })
        }, 1000 / 60)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { position } = this.state

        return <box top="center" left={`${position}%`} width="40%" height="10%+1" style={{ bg: 'cyan' }} />
    }
}

class Actions extends Component {
    state = {
        selectedIndex: 0
    }
    componentDidMount() {
        this.props.screen.key(['left', 'right', 'enter'], this.handleKeys)
    }
    stylesheet(index) {
        const { isListActive } = this.props
        const { selectedIndex } = this.state
        const isFocused = index === selectedIndex
        const color = !isListActive ? 'transparent' : isFocused ? 'green' : 'transparent'
        return {
            style: {
                bg: color
            }
        }
    }
    get filteredActions() {
        return this.props.process.actions.filter(({ label }) => label)
    }
    handleEnter = index => {
        const { isListActive, process } = this.props
        const { name } = this.filteredActions[index]
        isListActive && name && process.run(name)
    }
    handleKeys = (e, { name }) => {
        const { length } = this.filteredActions
        let { selectedIndex } = this.state
        switch (name) {
            case 'left':
                --selectedIndex < 0 && (selectedIndex = length - 1)
                this.setState({ selectedIndex })
                break
            case 'right':
                ++selectedIndex === length && (selectedIndex = 0)
                this.setState({ selectedIndex })
                break
            case 'enter':
                this.handleEnter(selectedIndex)
                break
        }
    }
    render() {
        const { total, index } = this.props
        const { length } = this.filteredActions
        return [
            <box
                key="actions"
                width={`${100 / total}%`}
                left={`${(100 / total) * index}%`}
                top="100%-3"
                height="0%+3"
                draggable={false}
            >
                {this.filteredActions.map(({ label }, i) => (
                    <button
                        key={i}
                        tags={true}
                        width={`${Math.ceil(100 / length)}%`}
                        left={`${Math.ceil((100 / length) * i)}%`}
                        name="cancel"
                        align="center"
                        valign="middle"
                        content={label}
                        class={this.stylesheet(i)}
                    />
                ))}
            </box>
        ]
    }
}
