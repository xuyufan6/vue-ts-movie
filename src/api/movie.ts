import request from '@/utils/request';

export const getMovieDetail = (id: string) => {
  return request({
    // tslint:disable-next-line:max-line-length
    url:
      `/api/movie/subject/${id}` +
      '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd',
    method: 'GET'
  });
};

export const getMovieList = (cate: string) => {
  return request({
    url: `/api/movie/${cate}`,
    method: 'GET'
  });
};

export const getStratDetail = (id: string) => {
  return request({
    url: `/api/movie/celebrity/${id}`,
    method: 'GET'
  });
};

export const getMovieComment = (id: string) => {
  return request({
    // tslint:disable-next-line:max-line-length
    url:
      `/api/movie/subject/${id}` +
      '/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&count=40&client=something&udid=dddddddddddddddddddddd',
    method: 'GET'
  });
};
