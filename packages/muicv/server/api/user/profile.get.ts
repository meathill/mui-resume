import type { H3Event } from 'h3';
import type { User } from 'next-auth';
import type { ApiResponse } from '~/types';
import type { MyProfile } from '~/types/cv';
import { getProfileKey } from '~/utils/api';

export const config = {
  runtime: 'edge',
};

export default defineEventHandler(async (event: H3Event): Promise<ApiResponse<MyProfile>> => {
  const user = event.context.user as User;
  const storage = useStorage('data');
  const key = getProfileKey(user.email);
  const store = await storage.getItem(key);
  return {
    code: 0,
    data: store as MyProfile,
  };
});
