const getMovies = require('../../lambdas/getMovies');
const eventGenerator = require('../utils/eventGenerator');
const validators = require('../utils/validators');

process.env.tableName = 'movies-db';

describe('get movies list integration tests', () => {
  test('it should return an API Gateway response', async () => {
    const event = eventGenerator({});

    const res = await getMovies.handler(event);

    expect(res).toBeDefined();
    expect(validators.isApiGatewayResponse(res)).toBe(true);
  });

  test('returns a 200 when called', async () => {
    expect.assertions(2);
    const data = {
      message: [
        {
          bannerUrl:
            'https://cdn141.picsart.com/291398593004201.jpg?type=webp&to=min&r=1280',
          actors: ['Shouko Nishimiya', 'Shoya Ishida', 'Yuzuru Nishimiya'],
          description:
            'A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.',
          title: 'Koe No katachi',
          ratings: 4.5,
          imageUrl:
            'https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        },
        {
          bannerUrl:
            'https://i.pinimg.com/originals/87/fe/f1/87fef1dd525c6f21a72cb51fe96d234e.png',
          actors: ['Cho Yeo‑jeong', 'Park So‑dam', 'Woo‑sik Choi'],
          description:
            'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
          title: 'Parasite',
          ratings: 4.5,
          imageUrl:
            'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
        },
      ],
    };
    const event = eventGenerator({});
    const res = await getMovies.handler(event);

    expect(res.statusCode).toBe(200);
    const body = JSON.parse(res.body);
    expect(body).toEqual(data);
  });
});
