import { rwClient } from "../constants/twitter.config";

export class BotService {
  protected async tweetGM(msg: string) {
    try {
      const res = await rwClient.v2.tweet(msg);
      return { msg, res };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
