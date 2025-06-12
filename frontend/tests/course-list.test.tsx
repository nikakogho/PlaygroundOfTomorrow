import { render, screen } from '@testing-library/react';
import { CourseListPagePure, Course } from '../src/components/CourseListPage';

const courses: Course[] = [
  { id: 'neuro101', title: 'Neuro 101', domain: 'neuro', firstModule: 'neuro101-01' },
];

describe('CourseListPage', () => {
  it('renders courses with links to first module', () => {
    render(<CourseListPagePure courses={courses} />);
    const link = screen.getByRole('link', { name: /Neuro 101/ });
    expect(link).toHaveAttribute('href', '/courses/neuro101/modules/neuro101-01');
  });

  it('shows message when no courses are available', () => {
    render(<CourseListPagePure courses={[]} />);
    expect(screen.getByText('No courses available.')).toBeInTheDocument();
  });
});
