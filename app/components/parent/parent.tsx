import React from 'react'
import Child from './chid/child'
import { buttonProps } from '@/app/types/components'

export default function Parent(props:buttonProps) {
  return (
    <div>
        <Child name={props.name}/>
    </div>
  )
}
