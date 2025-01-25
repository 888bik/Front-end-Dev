import { HYEventStore } from "hy-event-store";
import { getRecommendData ,getRecommendOrRankingData} from "../services/music";

const recommendStore = new HYEventStore({
  state: {
    recommendInfos: {},
  },
  actions: {
    fetchRecommendDataAction(ctx) {
      getRecommendOrRankingData(3778678).then((res) => {
        ctx.recommendInfos = res.playlist;
      });
    },
  },
});

export default recommendStore;
