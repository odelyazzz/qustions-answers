import { Survey } from "../types";

export const defaultSurvey: Survey = {
    questions: [
        {
            id: '1',
            text: 'Какой тип приложения вы хотите разработать?',
            answers: [
                { id: '1-1', text: 'Веб-приложение' },
                { id: '1-2', text: 'Мобильное приложение' },
                { id: '1-3', text: 'Десктопное приложение' },
            ],
        },
        {
            id: '2',
            text: 'Какой у вас опыт в разработке?',
            answers: [
                { id: '2-1', text: 'Начинающий' },
                { id: '2-2', text: 'Средний' },
                { id: '2-3', text: 'Продвинутый' },
            ],
        },
        {
            id: '3',
            text: 'Какой фреймворк вы предпочитаете для веб-разработки?',
            answers: [
                { id: '3-1', text: 'React' },
                { id: '3-2', text: 'Vue' },
                { id: '3-3', text: 'Angular' },
            ],
        },
        {
            id: '4',
            text: 'Какую мобильную платформу вы выберете?',
            answers: [
                { id: '4-1', text: 'iOS' },
                { id: '4-2', text: 'Android' },
                { id: '4-3', text: 'Cross-platform' },
            ],
        },
        {
            id: '5',
            text: 'Планируете ли использовать базу данных?',
            answers: [
                { id: '5-1', text: 'Да, SQL' },
                { id: '5-2', text: 'Да, NoSQL' },
                { id: '5-3', text: 'Нет' },
            ],
        }
    ],
    connections: [
        {
            fromQuestionId: '1',
            fromAnswerId: '1-1',
            toQuestionId: '3'
        },
        {
            fromQuestionId: '1',
            fromAnswerId: '1-2',
            toQuestionId: '4'
        },
        {
            fromQuestionId: '1',
            toQuestionId: '2'
        }
    ],
};