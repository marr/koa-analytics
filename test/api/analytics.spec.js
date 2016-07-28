import createServer from '../_helpers/createServer';

describe('analytics API', function() {
  let request;
  before(async function () {
    request = await createServer();
  });

  describe('POST /event', function() {
    it('returns true', async function() {
      const payload = {
        category: 'Authentication',
        action: 'Login',
        value: {
          user: 1
        }
      };
      await request.post('/event')
        .send(payload)
        .expect(200);
    });
  });
});
