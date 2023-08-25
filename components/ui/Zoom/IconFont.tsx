import React from 'react'
import Icon from '@ant-design/icons'

const iconComponentMap: { [key: string]: any } = {}
interface IconFontProps {
    type: string
    style?: any
}
export const IconFont = (props: IconFontProps) => {
    const { type, style } = props
    const component = iconComponentMap[type]
    return component ? (
        <Icon component={component} style={{ ...(style || {}) }} />
    ) : null
}
