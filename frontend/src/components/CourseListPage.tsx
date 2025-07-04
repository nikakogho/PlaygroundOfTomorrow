import Link from "next/link";
import coursesData from "../../content/mockCourses.json";

export interface Course {
  id: string;
  title: string;
  domain: string;
  firstModule: string;
  description: string;
  icon: string;
}

function CourseCard({ course }: { course: Course }) {
    return (
        <li className="bg-white dark:bg-slate-800/50 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200 dark:border-slate-800">
            <Link href={`/courses/${course.id}/modules/${course.firstModule}`} className="block h-full">
                <div className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between">
                        <span className="text-sm font-semibold bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 py-1 px-2.5 rounded-full">{course.domain}</span>
                        <div className="text-4xl -mt-2">{course.icon}</div>
                    </div>
                    <div className="mt-4 flex-grow">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">{course.title}</h2>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{course.description}</p>
                    </div>
                    <div className="mt-6">
                        <span className="font-semibold text-sky-600 dark:text-sky-400">
                            Start learning →
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
}


export default function CourseListPage() {
  const courses = coursesData as Course[];

  return (
    <div className="bg-slate-50 dark:bg-gray-900/50 flex-1">
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl mb-8">
                Courses
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </ul>
        </div>
    </div>
  );
}