/** @jsx jsx */
import React from 'react'
import { Layout } from 'antd'
import { jsx } from "@emotion/core";
import logoImage from './assets/unilogo.png'
import Services from './screens/Services'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Header css={{ color: '#fff' }}>
          <div css={{ float: 'left' }}>
            <img src={logoImage} alt='Logo' css={{ width: '90px' }} />
          </div>
          <h2 css={{ color: '#fff' }}>Client Notifications</h2>
        </Header>
      </Layout>
      <Layout>
        <Content css={{ padding: '35px', minHeight: '500px' }}>
          <Services />
        </Content>
        <Footer>
          <Footer css={{ textAlign: 'center' }}>MQ Soft ©2020</Footer>
        </Footer>
      </Layout>
    </React.Fragment>
  )
}

export default App
