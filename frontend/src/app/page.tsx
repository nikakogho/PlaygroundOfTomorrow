import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
        <div className="relative overflow-hidden bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32">
                <div className="text-center">
                     <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl md:text-6xl">
                        <span className="block">Master new skills with</span>
                        <span className="block text-sky-500">interactive learning</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                        Go beyond textbooks. Our hands-on courses help you build intuition and truly understand complex topics.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <Link href="/courses" className="w-full sm:w-auto bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors shadow-lg text-lg">
                            Explore Courses
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}