import axios from '../../customAxios';

describe('Axios', () => {
  it('Axios', () => {
    const data = {
      data: 'hello',
    };
    const result = axios.interceptors.response.handlers[0].fulfilled(data);
    expect(JSON.stringify(result)).toBe(JSON.stringify(data));
  });

  it('Axios Fail', () => {
    const result = axios.interceptors.response.handlers[0].rejected({
      response: {
        statusText: 'NotFound',
        status: 404,
        data: { message: 'Shit not found' },
      },
    });

    expect(result).rejects.toMatchObject({
      message: 'NotFound',
      statusCode: 404,
      data: { message: 'Shit not found' },
    });
  });
});
