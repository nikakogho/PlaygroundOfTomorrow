import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome to Playground of Tomorrow</h1>
      <p className="mt-4">
        Choose a course from the navigation or visit 
        <Link href="/courses" className="text-xl font-semibold">
          /courses
        </Link>
         to get started.
      </p>
    </div>
  );
}
