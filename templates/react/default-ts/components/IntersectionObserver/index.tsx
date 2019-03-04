import React, { PureComponent, createRef } from 'react'

interface IIntersectionObserverProps {
    onIn?: (IntersectionObserver?) => void
    onOut?: (IntersectionObserver?) => void
}

const defaultFn = () => {}

export class IntersectionObserverComponent extends PureComponent<IIntersectionObserverProps> {
    private indicator = createRef<HTMLSpanElement>()

    private observer: IntersectionObserver | null = null

    public componentDidMount() {
        this.attachIntersectionObserver()
    }

    public componentDidUpdate() {
        this.attachIntersectionObserver()
    }

    public componentWillUnmount() {
        this.detachIntersectionObserver()
    }

    private attachIntersectionObserver() {
        const element = this.indicator.current
        const { onIn = defaultFn, onOut = defaultFn } = this.props

        this.detachIntersectionObserver()

        if (!element) {
            return
        }

        this.observer = new IntersectionObserver(entries => {
            entries.forEach(({ intersectionRatio }) => (intersectionRatio > 0 ? onIn(this) : onOut(this)))
        })
        // @ts-ignore
        this.observer.observe(element)
    }

    private detachIntersectionObserver() {
        if (this.observer) {
            this.observer.disconnect()
            this.observer = null
        }
    }

    public render() {
        const { children } = this.props
        return (
            <>
                <span ref={this.indicator} />
                {children}
            </>
        )
    }
}

export default IntersectionObserverComponent
