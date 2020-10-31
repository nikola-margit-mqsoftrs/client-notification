/** @jsx jsx */
import React from 'react'
import { jsx } from "@emotion/core";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  UnorderedListOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { Card } from 'antd'

const { Meta } = Card

export default function ServiceCard({ name, description, status, showDrawer }) {
  const color =
    status === 'success'
      ? '#00C851'
      : status === 'error'
      ? '#ff4444'
      : '#ffbb33'

  const Icon =
    status === 'success'
      ? CheckCircleOutlined
      : status === 'error'
      ? ExclamationCircleOutlined
      : QuestionCircleOutlined

  return (
    <Card
      css={{ width: 300, margin: 'auto' }}
      actions={[
        <React.Fragment>
          <PlayCircleOutlined key='setting' />
          Start service
        </React.Fragment>,
        <React.Fragment>
          <PauseCircleOutlined key='edit' />
          Stop service
        </React.Fragment>,
        <div onClick={showDrawer}>
          <UnorderedListOutlined key='edit' />
          <br />
          Service Log
        </div>,
      ]}
      bodyStyle={{ backgroundColor: color }}>
      <Meta
        avatar={
          <Icon
            css={{ color: '#fff', fontSize: '1.6rem', opacity: '0.95' }}
          />
        }
        title={name}
        description={description}
      />
    </Card>
  )
}
