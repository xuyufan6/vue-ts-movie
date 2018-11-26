import { Commit } from 'vuex';
import { getMovieComment } from '@/api/movie';

const actions = {
  async movieComment(context: { commit: Commit }, id: string) {
    const res: any = await getMovieComment(id);
    return res;
  }
};

export default {
  actions
};
