const dummyMoodData = [
    { 
        createdAt: '2025-01-01T09:15:00.000Z', 
        updatedAt: '2025-01-01T09:15:00.000Z', 
        date: '2025-01-01T09:15:00.000Z', 
        rating: '5', 
        emotions: ['happy', 'grateful'], 
        note: ''
    },
    { 
        createdAt: '2025-01-02T14:30:00.000Z', 
        updatedAt: '2025-01-02T14:30:00.000Z', 
        date: '2025-01-02T14:30:00.000Z', 
        rating: '4', 
        emotions: ['relaxed', 'content'], 
        note: ''
    },
    { 
        createdAt: '2025-01-03T11:45:00.000Z', 
        updatedAt: '2025-01-03T11:45:00.000Z', 
        date: '2025-01-03T11:45:00.000Z', 
        rating: '3', 
        emotions: ['unsure'], 
        note: ''
    },
    { 
        createdAt: '2025-01-04T16:00:00.000Z', 
        updatedAt: '2025-01-04T16:00:00.000Z', 
        date: '2025-01-04T16:00:00.000Z', 
        rating: '2', 
        emotions: ['stressed', 'anxious'], 
        note: ''
    },
    { 
        createdAt: '2025-01-05T20:00:00.000Z', 
        updatedAt: '2025-01-05T20:00:00.000Z', 
        date: '2025-01-05T20:00:00.000Z', 
        rating: '1', 
        emotions: ['sad', 'angry'], 
        note: ''
    },
    { 
        createdAt: '2025-01-06T08:20:00.000Z', 
        updatedAt: '2025-01-06T08:20:00.000Z', 
        date: '2025-01-06T08:20:00.000Z', 
        rating: '4', 
        emotions: ['calm', 'hopeful'], 
        note: ''
    },
    { 
        createdAt: '2025-01-06T13:45:00.000Z', 
        updatedAt: '2025-01-06T13:45:00.000Z', 
        date: '2025-01-06T13:45:00.000Z', 
        rating: '2', 
        emotions: ['overwhelmed'], 
        note: ''
    },
    { 
        createdAt: '2025-01-07T10:10:00.000Z', 
        updatedAt: '2025-01-07T10:10:00.000Z', 
        date: '2025-01-07T10:10:00.000Z', 
        rating: '3', 
        emotions: ['neutral', 'tired'], 
        note: ''
    },
    { 
        createdAt: '2025-01-07T18:25:00.000Z', 
        updatedAt: '2025-01-07T18:25:00.000Z', 
        date: '2025-01-07T18:25:00.000Z', 
        rating: '5', 
        emotions: ['excited', 'motivated'], 
        note: ''
    },
    { 
        createdAt: '2025-01-08T21:15:00.000Z', 
        updatedAt: '2025-01-08T21:15:00.000Z', 
        date: '2025-01-08T21:15:00.000Z', 
        rating: '1', 
        emotions: ['frustrated', 'disheartened'], 
        note: ''
    },
    { 
        createdAt: '2025-01-09T07:40:00.000Z', 
        updatedAt: '2025-01-09T07:40:00.000Z', 
        date: '2025-01-09T07:40:00.000Z', 
        rating: '3', 
        emotions: ['uncertain', 'reflective'], 
        note: ''
    },
    { 
        createdAt: '2025-01-09T14:10:00.000Z', 
        updatedAt: '2025-01-09T14:10:00.000Z', 
        date: '2025-01-09T14:10:00.000Z', 
        rating: '4', 
        emotions: ['peaceful'], 
        note: ''
    },
    { 
        createdAt: '2025-01-10T09:50:00.000Z', 
        updatedAt: '2025-01-10T09:50:00.000Z', 
        date: '2025-01-10T09:50:00.000Z', 
        rating: '5', 
        emotions: ['joyful', 'energetic'], 
        note: ''
    },
    { 
        createdAt: '2025-01-11T11:25:00.000Z', 
        updatedAt: '2025-01-11T11:25:00.000Z', 
        date: '2025-01-11T11:25:00.000Z', 
        rating: '2', 
        emotions: ['nervous', 'worried'], 
        note: ''
    },
    { 
        createdAt: '2025-01-11T17:45:00.000Z', 
        updatedAt: '2025-01-11T17:45:00.000Z', 
        date: '2025-01-11T17:45:00.000Z', 
        rating: '3', 
        emotions: ['balanced'], 
        note: ''
    },
    { 
        createdAt: '2025-01-12T09:30:00.000Z', 
        updatedAt: '2025-01-12T09:30:00.000Z', 
        date: '2025-01-12T09:30:00.000Z', 
        rating: '4', 
        emotions: ['relaxed', 'cheerful'], 
        note: ''
    },
    { 
        createdAt: '2025-01-12T15:20:00.000Z', 
        updatedAt: '2025-01-12T15:20:00.000Z', 
        date: '2025-01-12T15:20:00.000Z', 
        rating: '5', 
        emotions: ['fulfilled', 'grateful'], 
        note: ''
    },
    { 
        createdAt: '2025-01-13T19:10:00.000Z', 
        updatedAt: '2025-01-13T19:10:00.000Z', 
        date: '2025-01-13T19:10:00.000Z', 
        rating: '1', 
        emotions: ['angry', 'irritated'], 
        note: ''
    },
    { 
        createdAt: '2025-01-14T22:00:00.000Z', 
        updatedAt: '2025-01-14T22:00:00.000Z', 
        date: '2025-01-14T22:00:00.000Z', 
        rating: '2', 
        emotions: ['disappointed', 'tense'], 
        note: ''
    },
    { 
        createdAt: '2025-01-15T08:30:00.000Z', 
        updatedAt: '2025-01-15T08:30:00.000Z', 
        date: '2025-01-15T08:30:00.000Z', 
        rating: '3', 
        emotions: ['okay', 'steady'], 
        note: ''
    },
    { 
        createdAt: '2025-01-15T13:50:00.000Z', 
        updatedAt: '2025-01-15T13:50:00.000Z', 
        date: '2025-01-15T13:50:00.000Z', 
        rating: '4', 
        emotions: ['hopeful', 'productive'], 
        note: ''
    },
    { 
        createdAt: '2025-01-16T10:05:00.000Z', 
        updatedAt: '2025-01-16T10:05:00.000Z', 
        date: '2025-01-16T10:05:00.000Z', 
        rating: '5', 
        emotions: ['accomplished', 'happy'], 
        note: ''
    },
    { 
        createdAt: '2025-01-16T18:35:00.000Z', 
        updatedAt: '2025-01-16T18:35:00.000Z', 
        date: '2025-01-16T18:35:00.000Z', 
        rating: '5', 
        emotions: ['excited', 'thankful'], 
        note: ''
    },
    { 
        createdAt: '2025-01-17T12:45:00.000Z', 
        updatedAt: '2025-01-17T12:45:00.000Z', 
        date: '2025-01-17T12:45:00.000Z', 
        rating: '1', 
        emotions: ['lonely', 'sad'], 
        note: ''
    },
    { 
        createdAt: '2025-01-18T09:20:00.000Z', 
        updatedAt: '2025-01-18T09:20:00.000Z', 
        date: '2025-01-18T09:20:00.000Z', 
        rating: '4', 
        emotions: ['content', 'focused'], 
        note: ''
    },
    { 
        createdAt: '2025-01-18T15:10:00.000Z', 
        updatedAt: '2025-01-18T15:10:00.000Z', 
        date: '2025-01-18T15:10:00.000Z', 
        rating: '2', 
        emotions: ['stressed', 'tired'], 
        note: ''
    },
    { 
        createdAt: '2025-01-19T14:25:00.000Z', 
        updatedAt: '2025-01-19T14:25:00.000Z', 
        date: '2025-01-19T14:25:00.000Z', 
        rating: '3', 
        emotions: ['neutral', 'indifferent'], 
        note: ''
    },
    { 
        createdAt: '2025-01-20T11:15:00.000Z', 
        updatedAt: '2025-01-20T11:15:00.000Z', 
        date: '2025-01-20T11:15:00.000Z', 
        rating: '5', 
        emotions: ['optimistic', 'inspired'], 
        note: ''
    },
];

export default dummyMoodData
