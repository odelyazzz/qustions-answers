import React from 'react';
import { Layout, Typography } from 'antd';
import { useSurveyStorage } from '../../hooks/useSurveyStorage';
import { ConnectionEditor } from '../../components';

const { Content } = Layout;
const { Title } = Typography;

export const EditorPage: React.FC = () => {
    const { survey, setSurvey } = useSurveyStorage();

    return (
        <Layout className="min-h-screen">
            <Title level={3} className="text-center py-4">
                Редактор связей опроса
            </Title>
            <Content>
                <ConnectionEditor survey={survey} onSurveyChange={setSurvey} />
            </Content>
        </Layout>
    );
};