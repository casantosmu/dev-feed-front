import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const dateLib = {
  timeFromNow: (date: string | number | Date): string => {
    dayjs.extend(relativeTime);

    return dayjs(date).fromNow();
  },
};

export default dateLib;
