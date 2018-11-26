import { Commit } from 'vuex';
import { getMovieDetail } from '@/api/movie';

const actions = {
  async movieDetail(context: { commit: Commit }, id: string) {
    const res: any = await getMovieDetail(id);

    return res;
  }
};

export default {
  actions
};
