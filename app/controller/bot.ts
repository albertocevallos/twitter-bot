import { MessageUtil } from "../utils/message";
import { BotService } from "../service/bot";

export class BotController extends BotService {
  /**
   * Tweet GM
   */
  async gm() {
    const message: string = "GM";
    try {
      const result = await this.tweetGM(message);
      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);
      return MessageUtil.error(err.code, err.message);
    }
  }
}
