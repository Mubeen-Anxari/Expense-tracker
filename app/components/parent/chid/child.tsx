import { buttonProps } from '@/app/types/components'
import React from 'react'

export default function Child(props:buttonProps) {
  return (
    <div>
        <h1>This is a child components</h1>
        <h1>this is {props.name}</h1>
    </div>
  )
}
