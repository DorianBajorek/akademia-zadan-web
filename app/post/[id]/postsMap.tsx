import dynamic from "next/dynamic";

export const postsMap: Record<string, any> = {
  '1': dynamic(() => import('@/components/posts/post1')),
};