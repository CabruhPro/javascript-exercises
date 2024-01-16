const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2']);
  });

  const movies = [
    {
      title: 'MovieA',
      author: 'Name1'
    },
    {
      title: 'MovieB',
      author: 'Name2'
    },
    {
      title: 'MovieC',
      author: 'Name3'
    }
  ]
  test('gets titles of movies', () => {
    expect(getTheTitles(movies)).toEqual(['MovieA','MovieB','MovieC']);
  });
});
