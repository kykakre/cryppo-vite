import React from 'react'


export default function Subtitle({ children, ...props }) {
    return (
        <p {...props}>
            {children}
            <span >{props.gradient}</span>
        </p>
    )
}
