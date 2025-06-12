import { render, screen } from '@testing-library/react';
import { ModulePagePure } from '../src/components/ModulePage';

describe('ModulePage', () => {
  it('shows course and module ids from params', () => {
    const element = render(
      <ModulePagePure courseId='neuro101' moduleId='intro' />
    );
    expect(screen.getByText('Course: neuro101')).toBeInTheDocument();
    expect(screen.getByText('Module: intro')).toBeInTheDocument();
  });
});
