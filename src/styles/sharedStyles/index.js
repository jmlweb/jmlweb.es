import createDefaultTypo from './defaultTypo';
import createHeadings from './headings';

export default ({ theme }) => {
  const defaultTypo = createDefaultTypo(theme);
  const headings = createHeadings(theme);
  return {
    defaultTypo,
    headings,
  };
};
