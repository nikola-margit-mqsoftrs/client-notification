import React from 'react'
import { Layout } from 'antd'
import logoImage from './assets/unilogo.png'
import Services from './screens/Services'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <>
      <Layout>
        <Header style={{ color: '#fff' }}>
          <div style={{ float: 'left' }}>
            <img src={logoImage} alt='Logo' style={{ width: '90px' }} />
          </div>
          <h2 style={{ color: '#fff' }}>Client Notifications</h2>
        </Header>
      </Layout>
      <Layout>
        <Content style={{ padding: '35px', minHeight: '500px' }}>
          <Services />
        </Content>
        <Footer>
          <Footer style={{ textAlign: 'center' }}>MQ Soft ©2020</Footer>
        </Footer>
      </Layout>
    </>
  )
}

export default App
