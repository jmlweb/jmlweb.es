const TITLE = 'José Manuel Lucas';
const DESCRIPTION = 'Frontend Engineer';
const ALIAS = 'jmlweb';
const AUTHOR = `@${ALIAS}`;
const PREFIX = '/';
const COLOR = `#3912a9`;

module.exports = {
  title: TITLE,
  description: DESCRIPTION,
  author: AUTHOR,
  imgMaxWidth: 1024,
  siteUrl: 'https://jmlweb.es',
  analyticsID: 'UA-54381071-6',
  verificationID: 'C_zrk0we724IL2r6BSTEf2U9ZVaIIYVsFR16eHuk-Nk',
  progressColor: '#fff',
  perPage: {
    default: 12,
  },
  manifest: {
    name: TITLE,
    short_name: ALIAS,
    start_url: PREFIX,
    background_color: COLOR,
    theme_color: COLOR,
    display: `minimal-ui`,
    orientation: 'portrait-primary',
    icon: `src/images/jmlweb-icon.png`, // This path is relative to the root of the site.
  },
};
