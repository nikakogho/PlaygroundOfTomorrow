import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModulePagePure } from '../src/components/ModulePage';
import { getMdxModule } from '../src/mdxModules';

jest.mock('../content/neuro101/01-cells-and-membranes.mdx', () => ({
  __esModule: true,
  default: () => <h1>Cells & Membranes</h1>,
}));

jest.mock('../content/neuro101/02-action-potentials.mdx', () => ({
  __esModule: true,
  default: () => <h1>Action Potentials</h1>,
}));

describe('ModulePage', () => {
  it('renders MDX content for first module', () => {
    const mod = getMdxModule('neuro101', 'neuro101-01');
    render(
      <ModulePagePure
        courseId='neuro101'
        moduleId='neuro101-01'
        Content={mod!.Component}
      />
    );
    expect(screen.getByRole('heading', { name: 'Cells & Membranes' })).toBeInTheDocument();
    expect(screen.getByText('Next module locked')).toBeInTheDocument();
  });

  it('returns undefined for missing module', () => {
    expect(getMdxModule('neuro101', 'missing')).toBeUndefined();
  });

  it('renders second module correctly', () => {
    const mod = getMdxModule('neuro101', 'neuro101-02');
    render(
      <ModulePagePure
        courseId='neuro101'
        moduleId='neuro101-02'
        Content={mod!.Component}
      />
    );
    expect(screen.getByRole('heading', { name: 'Action Potentials' })).toBeInTheDocument();
  });

  it('unlocks next module after marking complete', async () => {
    const mod = getMdxModule('neuro101', 'neuro101-01');
    render(
      <ModulePagePure
        courseId='neuro101'
        moduleId='neuro101-01'
        Content={mod!.Component}
      />
    );
    const button = screen.getByRole('button', { name: /mark complete/i });
    await userEvent.click(button);
    expect(screen.getByRole('link', { name: /next module/i })).toHaveAttribute(
      'href',
      '/courses/neuro101/modules/neuro101-02'
    );
  });
});
