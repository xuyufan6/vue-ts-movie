import { Commit } from "vuex";
import { getStratDetail } from "@/api/movie";

const actions = {
  async stratDetail(context: { commit: Commit }, id: string) {
    const res: any = await getStratDetail(id);

    return res;
  }
};

export default {
  actions
};
