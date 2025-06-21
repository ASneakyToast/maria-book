# Content Structure

## Interview Organization

The artbook content is organized in a folder-based structure for easy maintenance:

```
public/interviews/
├── interview-1-artist-name/
│   ├── metadata.json           # Interview info (artist name, title, etc.)
│   ├── question-1/
│   │   ├── metadata.json       # Question text and response type
│   │   └── response.jpg        # Artist's visual response
│   ├── question-2/
│   │   ├── metadata.json
│   │   └── response.jpg
│   └── question-3/
│       ├── metadata.json
│       └── response.jpg
└── interview-2-artist-name/
    ├── metadata.json
    └── question-folders...
```

## Adding New Content

### New Interview
1. Create folder: `public/interviews/interview-N-artist-name/`
2. Add `metadata.json` with interview details
3. Create numbered question folders

### New Question
1. Create folder: `question-N/` in the interview directory
2. Add `metadata.json` with question text and response type
3. Add `response.jpg` (or appropriate image format)

## Metadata Format

### Interview metadata.json
```json
{
  "artistName": "Artist Full Name",
  "interviewTitle": "Interview Theme/Title", 
  "interviewNumber": 1,
  "totalQuestions": 3,
  "description": "Optional description"
}
```

### Question metadata.json
```json
{
  "question": "The interview question text",
  "responseType": "drawing|handwritten|digital|mixed",
  "artist": "Artist Name",
  "interviewNumber": 1,
  "questionNumber": 1
}
```

## Response Types
- `drawing`: Hand-drawn illustrations
- `handwritten`: Written text responses  
- `digital`: Digitally created responses
- `mixed`: Combination of multiple types