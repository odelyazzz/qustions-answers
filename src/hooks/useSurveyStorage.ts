import { useState, useEffect } from 'react';
import { Survey } from '../types';
import { defaultSurvey } from '../constants';

const STORAGE_KEY = 'survey_data';

export function useSurveyStorage() {
    const [survey, setSurvey] = useState<Survey>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : defaultSurvey;
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(survey));
    }, [survey]);

    return { survey, setSurvey };
}