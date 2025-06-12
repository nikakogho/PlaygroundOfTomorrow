import { render, screen } from '@testing-library/react';
import ModulePage from '../src/app/courses/ModulePage';

describe('ModulePage', () => {
  it('shows course and module ids from params', () => {
    const element = render(
      <ModulePage params={{ courseId: 'neuro101', moduleId: 'intro' }} />
    );
    expect(screen.getByText('Course: neuro101')).toBeInTheDocument();
    expect(screen.getByText('Module: intro')).toBeInTheDocument();
  });
});
