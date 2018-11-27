import request from "@/utils/request";

export const getMovieList = (cate: string) => {
  return request({
    url: `/api/movie/${cate}`,
    method: "GET"
  });
};
