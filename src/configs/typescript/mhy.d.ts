declare module '*.css' {
    const content: any
    export default content
}

declare module '*.scss' {
    const content: any
    export default content
}

interface SvgrComponent extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
    const content: any
    export const ReactComponent: SvgrComponent
    export default content
}

declare module '*.svgx' {
    const content: any
    export default content
}

declare module '*.md' {
    const content: any
    export default content
}

declare module '*.txt' {
    const content: any
    export default content
}

declare module '*.html' {
    const content: any
    export default content
}

declare module '*.jpg' {
    const content: any
    export default content
}

declare module '*.gif' {
    const content: any
    export default content
}

declare module '*.png' {
    const content: any
    export default content
}

declare const shallow: any
declare const render: any
declare const mount: any

declare const mhy: {
    [key: string]: any
    defaultIndexHtml: string
    srcFolder: string
    distFolder: string
    buildFolder: string
    defaultIgnoreList: string[]
    defaultAliases: {
        [key: string]: string
    }
}
