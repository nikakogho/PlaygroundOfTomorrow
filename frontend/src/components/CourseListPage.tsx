import Link from "next/link";
import courses from "../../content/mockCourses.json";

export interface Course {
  id: string;
  title: string;
  domain: string;
  firstModule: string;
}

export function CourseListPagePure({ courses: list }: { courses: Course[] }) {
  if (list.length === 0) {
    return <p className="p-8">No courses available.</p>;
  }
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <ul className="space-y-4">
        {list.map((course) => (
          <li key={course.id}>
            <Link
              href={`/courses/${course.id}/modules/${course.firstModule}`}
              className="block rounded border p-4 hover:bg-gray-50"
            >
              <h2 className="text-lg font-medium">{course.title}</h2>
              <p className="text-sm text-gray-600">{course.domain}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CourseListPage() {
  return <CourseListPagePure courses={courses as Course[]} />;
}
