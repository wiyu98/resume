import { readResumeData } from './api/data/helpers'
import { ResumeData } from './models/resumeData';

async function Summary() {
  const data: ResumeData = await readResumeData();

  return (<div className="space-y-4">
    {data.summary.map(
      (line, index) =>
        <p key={'summary' + index} className="space-y-4">
          {line}
        </p>
    )}
  </div>
  )
}

export default function Home() {
  return (
    <main>
      <Summary />
    </main>
  )
}
