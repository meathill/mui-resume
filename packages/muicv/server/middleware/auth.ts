import type { H3Event } from 'h3';
import type { Session } from 'next-auth';
import { getServerSession } from '#auth';

export const config = {
  runtime: 'edge',
};

export default defineEventHandler(async (event: H3Event): Promise<void> => {
  const url = getRequestURL(event);
  if (!url.pathname.startsWith('/api/user')) {
    return;
  }

  const session = (await getServerSession(event)) as Session;
  const { user } = session;
  if (!session) {
    throw createError({
      statusCode: 401,
      message: 'Forbidden',
    });
  }
  if (!user?.email) {
    throw createError({
      statusCode: 400,
      message: 'No user email',
    });
  }

  event.context.user = user;
});
