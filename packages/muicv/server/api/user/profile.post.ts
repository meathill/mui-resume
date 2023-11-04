import type { H3Event } from 'h3';
import type { User } from 'next-auth';
import type { ApiResponse } from '~/types';
import { getProfileKey } from '~/utils/api';
import type { MyProfile } from '~/types/cv';

export const config = {
  runtime: 'edge',
};

export default defineEventHandler(async (event: H3Event): Promise<ApiResponse<string>> => {
  const user = event.context.user as User;
  const json = await readBody(event);

  const storage = useStorage('data');
  const key = getProfileKey(user.email as string);
  await storage.setItem(key, json);
  return {
    code: 0,
    data: 'ok',
  };
});
