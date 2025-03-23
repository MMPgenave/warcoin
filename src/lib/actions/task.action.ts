import axios from "axios";
import { telegramChannelUsername } from "@/constant";
export const checkTelegramSubscription = async (userId: number | undefined) => {
  const botToken = import.meta.env.VITE_MMPapi4warcoinBot_TOKEN_API;
  const url = `https://api.telegram.org/bot${botToken}/getChatMember?chat_id=@${telegramChannelUsername}&user_id=${userId}`;
  console.log("botToken", JSON.stringify(url, undefined, 2));
  try {
    const response = await axios.get(url);
    const status = response.data.result.status;
    console.log("status", JSON.stringify(status, undefined, 2));
    return status === "member" || status === "administrator" || status === "creator";
  } catch (error) {
    console.error("Error checking subscription:", error);
    return false;
  }
};
