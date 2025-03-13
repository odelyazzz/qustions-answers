import React, { useState } from 'react';
import { Card, Radio, Space, Typography } from 'antd';
import { Survey } from '../../types';

const { Title, Text } = Typography;

interface SurveyFlowProps {
    survey: Survey;
}

export const SurveyFlow: React.FC<SurveyFlowProps> = ({ survey }) => {
    const [currentQuestionId, setCurrentQuestionId] = useState<string>(survey.questions[0].id);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [finished, setFinished] = useState(false);

    const currentQuestion = survey.questions.find(q => q.id === currentQuestionId);

    const handleAnswer = (answerId: string) => {
        setAnswers(prev => ({ ...prev, [currentQuestionId]: answerId }));

        const specificConnection = survey.connections.find(
            conn => conn.fromQuestionId === currentQuestionId && conn.fromAnswerId === answerId
        );

        const generalConnection = survey.connections.find(
            conn => conn.fromQuestionId === currentQuestionId && !conn.fromAnswerId
        );

        const nextConnection = specificConnection || generalConnection;

        if (nextConnection) {
            setCurrentQuestionId(nextConnection.toQuestionId);
        } else {
            setFinished(true);
        }
    };

    if (finished) {
        return (
            <Card className="max-w-2xl mx-auto mt-8">
                <Title level={3}>Опрос завершен!</Title>
                <Space direction="vertical">
                    <Text>Ваши ответы:</Text>
                    {Object.entries(answers).map(([questionId, answerId]) => {
                        const question = survey.questions.find(q => q.id === questionId);
                        const answer = question?.answers.find(a => a.id === answerId);
                        return (
                            <div key={questionId}>
                                <Text strong>{question?.text}</Text>
                                <br />
                                <Text>{answer?.text}</Text>
                            </div>
                        );
                    })}
                </Space>
            </Card>
        );
    }

    if (!currentQuestion) {
        return <Text>Ошибка: вопрос не найден</Text>;
    }

    return (
        <Card className="max-w-2xl mx-auto mt-8">
            <Title level={3}>{currentQuestion.text}</Title>
            <Radio.Group
                onChange={(e) => handleAnswer(e.target.value)}
                className="w-full"
            >
                <Space direction="vertical" className="w-full">
                    {currentQuestion.answers.map(answer => (
                        <Radio key={answer.id} value={answer.id} className="w-full">
                            {answer.text}
                        </Radio>
                    ))}
                </Space>
            </Radio.Group>
        </Card>
    );
};