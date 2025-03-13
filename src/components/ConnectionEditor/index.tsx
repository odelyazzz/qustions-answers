import React from 'react';
import { Select, Button, Space, Table, Popconfirm } from 'antd';
import { Connection, Survey } from '../../types';

interface ConnectionEditorProps {
    survey: Survey;
    onSurveyChange: (survey: Survey) => void;
}

export const ConnectionEditor: React.FC<ConnectionEditorProps> = ({
    survey,
    onSurveyChange,
}) => {
    const addConnection = () => {
        const newConnection: Connection = {
            fromQuestionId: survey.questions[0].id,
            toQuestionId: survey.questions[1].id,
        };

        onSurveyChange({
            ...survey,
            connections: [...survey.connections, newConnection],
        });
    };

    const updateConnection = (index: number, connection: Connection) => {
        const newConnections = [...survey.connections];
        newConnections[index] = connection;
        onSurveyChange({
            ...survey,
            connections: newConnections,
        });
    };

    const deleteConnection = (index: number) => {
        const newConnections = survey.connections.filter((_, i) => i !== index);
        onSurveyChange({
            ...survey,
            connections: newConnections,
        });
    };

    const columns = [
        {
            title: 'От вопроса',
            dataIndex: 'fromQuestionId',
            key: 'fromQuestionId',
            render: (value: string, record: Connection, index: number) => (
                <Select
                    value={value}
                    style={{ width: 200 }}
                    onChange={(newValue) =>
                        updateConnection(index, { ...record, fromQuestionId: newValue })
                    }
                >
                    {survey.questions.map((q) => (
                        <Select.Option key={q.id} value={q.id}>
                            {q.text}
                        </Select.Option>
                    ))}
                </Select>
            ),
        },
        {
            title: 'От ответа',
            dataIndex: 'fromAnswerId',
            key: 'fromAnswerId',
            render: (value: string | undefined, record: Connection, index: number) => (
                <Select
                    value={value}
                    style={{ width: 200 }}
                    allowClear
                    placeholder="Любой ответ"
                    onChange={(newValue) =>
                        updateConnection(index, { ...record, fromAnswerId: newValue })
                    }
                >
                    {survey.questions
                        .find((q) => q.id === record.fromQuestionId)
                        ?.answers.map((a) => (
                            <Select.Option key={a.id} value={a.id}>
                                {a.text}
                            </Select.Option>
                        ))}
                </Select>
            ),
        },
        {
            title: 'К вопросу',
            dataIndex: 'toQuestionId',
            key: 'toQuestionId',
            render: (value: string, record: Connection, index: number) => (
                <Select
                    value={value}
                    style={{ width: 200 }}
                    onChange={(newValue) =>
                        updateConnection(index, { ...record, toQuestionId: newValue })
                    }
                >
                    {survey.questions.map((q) => (
                        <Select.Option key={q.id} value={q.id}>
                            {q.text}
                        </Select.Option>
                    ))}
                </Select>
            ),
        },
        {
            title: 'Действия',
            key: 'actions',
            render: (_: any, __: any, index: number) => (
                <Popconfirm
                    title="Удалить связь?"
                    onConfirm={() => deleteConnection(index)}
                >
                    <Button danger>Удалить</Button>
                </Popconfirm>
            ),
        },
    ];

    return (
        <div className="p-4">
            <Space direction="vertical" style={{ width: '100%' }} size="large">
                <Button type="primary" onClick={addConnection}>
                    Добавить связь
                </Button>

                <Table
                    dataSource={survey.connections}
                    columns={columns}
                    rowKey={(_, index) => index?.toString() ?? ''}
                />
            </Space>
        </div>
    );
};