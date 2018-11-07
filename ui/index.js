import React, { Component } from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'

import MhyBox from './MhyBox'

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
			active: newActiveEl ? newIndex : (event.shift ? processesKeys.length - 1 : 0)
		})
	}

	componentWillMount() {
		const { screen, processes } = this.props
		screen.key(['S-tab', 'tab'], this.handleTab)
		screen.key(['escape', 'q', 'C-c'], async () => {
			for (const proc of Object.values(processes)) {
				await proc.clean()
			}
			process.exit(0)
		})
	}

	render() {
		const { active } = this.state
		const { processes, screen } = this.props
		const entries = Object.entries(processes)
		return (
			<element>
				{entries.map(([k, process], i) =>
					<MhyBox key={k}
							name={k}
							index={i}
							isActive={i===active}
							total={entries.length}
							process={process}
							screen={screen}
							{...this.props}/>
				)}
			</element>
		);
	}
}

export default (processes) => {
	const screen = blessed.screen({
		autoPadding: true,
		smartCSR: true,
		title: 'MHY Dev'
	});
	render(<Dashboard processes={processes} screen={screen} />, screen);
}
