/** @jsx jsx */
import React, { useState } from 'react'
import { Drawer, Alert } from 'antd'
import { jsx } from "@emotion/core";
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <React.Fragment>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: '26px 0px',
        }}>
        {serviceData.map(({ name, details, status }) => (
          <ServiceCard
            name={name}
            details={details}
            status={status}
            showDrawer={showDrawer}
            key={name}
          />
        ))}
      </div>
      <Drawer
        title='Service #56481 Log'
        width='45%'
        placement='right'
        onClose={onClose}
        visible={visible}>
        <div css={{ display: 'grid', gridGap: '20px' }}>
          <Alert
            message='Started 11m ago bd6de8fe-0c8a-11eb-adc1-0242ac120002'
            type='success'
            showIcon
          />
          <Alert
            message='Started 28m ago bd6de8fe-0c8a-11eb-adc1-0242ac120002'
            type='success'
            showIcon
          />
          <Alert
            message='Started 2h19m ago bd6de8fe-0c8a-11eb-adc1-0242ac120002'
            type='success'
            showIcon
          />
          <Alert
            message='Started 4h07m ago bd6de8fe-0c8a-11eb-adc1-0242ac120002'
            type='error'
            showIcon
          />
          <Alert
            message='Started 7h16m ago bd6de8fe-0c8a-11eb-adc1-0242ac120002'
            type='success'
            showIcon
          />
        </div>
      </Drawer>
    </React.Fragment>
  )
}

const serviceData = [
  {
    name: 'Service #56481',
    details: 'Service details',
    status: 'success',
  },
  {
    name: 'Service #564787',
    details: 'Service details',
    status: 'success',
  },
  {
    name: 'Service #65657',
    details: 'Service details',
    status: 'error',
  },
  {
    name: 'Service #565265',
    details: 'Service details',
    status: 'stoped',
  },
  {
    name: 'Service #781888',
    details: 'Service details',
    status: 'success',
  },
  {
    name: 'Service #8929',
    details: 'Service details',
    status: 'error',
  },
  {
    name: 'Service #77548',
    details: 'Service details',
    status: 'success',
  },
]
