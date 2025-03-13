import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import { Layout, Menu } from 'antd';
import { EditorPage, SurveyPage } from './pages';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header className="bg-white! p-0">
          <Menu mode="horizontal" className="w-full">
            <Menu.Item key="editor">
              <Link to="/">Редактор связей</Link>
            </Menu.Item>
            <Menu.Item key="survey">
              <Link to="/survey">Пройти опрос</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<EditorPage />} />
            <Route path="/survey" element={<SurveyPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
