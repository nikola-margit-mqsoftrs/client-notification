/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  UnorderedListOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { Card } from 'antd'
import ServiceCardButton from './ServiceCardButton'

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
        <ServiceCardButton title='Start service'>
          <PlayCircleOutlined key='setting' />
        </ServiceCardButton>,
        <ServiceCardButton title='Stop service'>
          <PauseCircleOutlined key='edit' />
        </ServiceCardButton>,
        <ServiceCardButton title='Service log' onClick={showDrawer}>
          <UnorderedListOutlined key='edit' />
        </ServiceCardButton>,
      ]}
      bodyStyle={{ backgroundColor: color }}>
      <Meta
        avatar={
          <Icon css={{ color: '#fff', fontSize: '1.6rem', opacity: '0.95' }} />
        }
        title={name}
        description={description}
      />
    </Card>
  )
}
