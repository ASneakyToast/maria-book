import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

export interface InterviewMetadata {
  artistName: string;
  interviewTitle: string;
  interviewNumber: number;
  totalQuestions: number;
  description?: string;
}

export interface QuestionMetadata {
  question: string;
  responseType: 'drawing' | 'handwritten' | 'digital' | 'mixed';
  artist: string;
  interviewNumber: number;
  questionNumber: number;
}


/**
 * Get all interview folders from the public/interviews directory
 */
export async function getInterviewFolders(): Promise<string[]> {
  try {
    const interviewsPath = join(process.cwd(), 'public', 'interviews');
    const folders = await readdir(interviewsPath, { withFileTypes: true });
    return folders
      .filter(folder => folder.isDirectory())
      .map(folder => folder.name)
      .sort();
  } catch (error) {
    console.error('Error reading interview directories:', error);
    return [];
  }
}

/**
 * Get metadata for a specific interview
 */
export async function getInterviewMetadata(interviewFolder: string): Promise<InterviewMetadata | null> {
  try {
    const metadataPath = join(process.cwd(), 'public', 'interviews', interviewFolder, 'metadata.json');
    const content = await readFile(metadataPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading metadata for ${interviewFolder}:`, error);
    return null;
  }
}

/**
 * Get metadata for a specific question
 */
export async function getQuestionMetadata(interviewFolder: string, questionFolder: string): Promise<QuestionMetadata | null> {
  try {
    const metadataPath = join(process.cwd(), 'public', 'interviews', interviewFolder, questionFolder, 'metadata.json');
    const content = await readFile(metadataPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading question metadata for ${interviewFolder}/${questionFolder}:`, error);
    return null;
  }
}

/**
 * Get all questions for a specific interview
 */
export async function getInterviewQuestions(interviewFolder: string): Promise<string[]> {
  try {
    const interviewPath = join(process.cwd(), 'public', 'interviews', interviewFolder);
    const folders = await readdir(interviewPath, { withFileTypes: true });
    return folders
      .filter(folder => folder.isDirectory() && folder.name.startsWith('question-'))
      .map(folder => folder.name)
      .sort((a, b) => {
        const numA = parseInt(a.split('-')[1]);
        const numB = parseInt(b.split('-')[1]);
        return numA - numB;
      });
  } catch (error) {
    console.error(`Error reading questions for ${interviewFolder}:`, error);
    return [];
  }
}

