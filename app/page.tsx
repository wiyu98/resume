import { readResumeData } from './api/data/helpers'
import { ResumeData } from './models/resumeData';

async function Summary() {
  const data: ResumeData = await readResumeData();

  return <p>
    {data.summary}
  </p>
}

export default function Home() {
  return (
    <main>
      <h1>Wilson Yu</h1>
      <Summary />
    </main>
  )
}
