import dynamic from 'next/dynamic';

export const postsMap: Record<string, any> = {
  '1': dynamic(() => import('@/components/posts/post1')),
  '2': dynamic(() => import('@/components/posts/post2')),
  '3': dynamic(() => import('@/components/posts/post3')),
  '4': dynamic(() => import('@/components/posts/post4')),
};
