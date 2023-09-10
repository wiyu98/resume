import fsPromises from 'fs/promises';
import path from 'path'

import { ResumeData } from '../../models/resumeData';

export async function readResumeData() {
    const filePath: string = path.join(process.cwd(), 'data/resume.json');
    const fileData: Buffer = await fsPromises.readFile(filePath);
    const data: ResumeData = JSON.parse(fileData.toString());
    return data;
}
