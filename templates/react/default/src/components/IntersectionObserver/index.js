import React, { PureComponent } from 'react'
import { func, node } from 'prop-types'

const defaultCb = () => {}

export class IntersectionObserver extends PureComponent {
    indicator = React.createRef()

    componentDidMount() {
        this.attachIntersectionObserver()
    }

    componentDidUpdate() {
        this.attachIntersectionObserver()
    }

    componentWillUnmount() {
        this.detachIntersectionObserver()
    }

    attachIntersectionObserver() {
        const element = this.indicator.current
        const { onIn, onOut } = this.props

        this.detachIntersectionObserver()

        if (!element) {
            return
        }

        this.observer = new window.IntersectionObserver(entries => {
            entries.forEach(({ intersectionRatio }) => (intersectionRatio > 0 ? onIn(this) : onOut(this)))
        })
        this.observer.observe(element)
    }

    detachIntersectionObserver() {
        if (this.observer) {
            this.observer.disconnect()
            this.observer = null
        }
    }

    render() {
        const { children } = this.props
        return (
            <>
                <span ref={this.indicator} />
                {children}
            </>
        )
    }
}

IntersectionObserver.propTypes = {
    onIn: func,
    onOut: func,
    children: node
}

IntersectionObserver.defaultProps = {
    onIn: defaultCb,
    onOut: defaultCb,
    children: null
}

export default IntersectionObserver
