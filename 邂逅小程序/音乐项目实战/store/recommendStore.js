import { HYEventStore } from "hy-event-store";
import { getRecommendData } from "../services/music";

const recommendStore = new HYEventStore({
  state: {
    recommendInfos: {},
  },
  actions: {
    fetchRecommendDataAction(ctx) {
      getRecommendData(3778678).then((res) => {
        ctx.recommendInfos = res.playlist;
      });
    },
  },
});

export default recommendStore;
