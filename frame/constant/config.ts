import * as dotenv from 'dotenv';

dotenv.config();

export const BACKEND_URL = process.env.BACKEND_URL as string;
export const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY || "NEYNAR_API_DOCS" as string;
export const SHARE_INTENT = 'https://warpcast.com/~/compose?text=';
export const SHARE_TEXT = encodeURI(`Join me in this Pokemon Challenge!`);
export const SHARE_GACHA = encodeURI(`Look at this cool Pokemon I just caught!`);
export const SHARE_EMBEDS = '&embeds[]=';
export const FRAME_URL = ''; //// ADD LINK WHEN DEPLOYED
export const title = 'PokeFrame';