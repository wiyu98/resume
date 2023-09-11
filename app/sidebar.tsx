import { ReactElement } from "react";
import { EducationIcon, ExperienceIcon, ProfileIcon, SkillsIcon } from "./icons";
import { readResumeData } from './api/data/helpers'
import { ResumeData } from './models/resumeData';

export default function Sidebar() {
    // Sidebar inspired by: https://flowbite.com/docs/components/sidebar/

    return (
        <aside id="sidebar" className="fixed top-0 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r border-emerald-900" aria-label="Sidebar">
            <div className="h-full px-8 py-16 overflow-y-auto">
                <SidebarHeader />
                <ul className="py-4 space-y-2 font-medium">
                    <SidebarItem text="Profile" route="/" icon={<ProfileIcon />} />
                    <SidebarItem text="Experience" route="/experience" icon={<ExperienceIcon />} />
                    <SidebarItem text="Skills" route="/skills" icon={<SkillsIcon />} />
                    <SidebarItem text="Education" route="/education" icon={<EducationIcon />} />
                </ul>
            </div>
        </aside>
    )
}

async function SidebarHeader() {
    const data: ResumeData = await readResumeData();

    return (
        <div className="p-4 border-b border-emerald-900">
            <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight">
                Wilson Yu
            </h2>

            <p>
                Email: <a href={"mailto:" + data.contact.email} className="text-slate-400">{data.contact.email}</a>
            </p>

            <p>
                LinkedIn: <a href={"https://" + data.contact.linkedin} className="text-slate-400">{data.contact.linkedin}</a>
            </p>

            <p>
                {data.contact.location}
            </p>
        </div>
    )
}

interface SidebarItemProps {
    text: string;
    route: string;
    icon?: ReactElement;
}

function SidebarItem(props: SidebarItemProps) {
    return (
        <li>
            <a href={props.route} className="flex items-center px-4 py-2 rounded-md hover:bg-emerald-900 group">
                {props.icon}
                <span className="ml-3">{props.text}</span>
            </a>
        </li>
    )
}