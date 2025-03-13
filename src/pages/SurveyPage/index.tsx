import React from 'react';
import { Layout, Typography } from 'antd';
import { useSurveyStorage } from '../../hooks/useSurveyStorage';
import { SurveyFlow } from '../../components/SurveyFlow';

const { Content } = Layout;
const { Title } = Typography;

export const SurveyPage: React.FC = () => {
    const { survey } = useSurveyStorage();

    return (
        <Layout className="min-h-screen">
            <Title level={3} className="text-center py-4">
                Прохождение опроса
            </Title>
            <Content className="p-4">
                <SurveyFlow survey={survey} />
            </Content>
        </Layout>
    );
};