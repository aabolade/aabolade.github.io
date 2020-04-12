import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'; 

function App() {
  return (
<div>
    <Layout>
        <Header className="header-color" title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <Link to="/aboutMe">About Me</Link>
                <a href={process.env.PUBLIC_URL + '/resumeCopy.pdf'}>Resume</a>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
