const slugify = require('slugify');

module.exports = sourceString =>
  slugify(sourceString.toLowerCase(), {
    remove: /[$*_+~.,()'"!\-:@]/g,
  });
