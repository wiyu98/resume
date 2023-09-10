import { NextResponse } from 'next/server'
import { readResumeData } from './helpers';
import { ResumeData } from '../../models/resumeData'

export async function GET() {
    const data: ResumeData = await readResumeData();
    return NextResponse.json(data);
}
