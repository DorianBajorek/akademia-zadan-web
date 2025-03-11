import dynamic from "next/dynamic";

export const solutionsMap: Record<string, any> = {
  '2': dynamic(() => import('@/components/solutions/Solutions2')),
  '10': dynamic(() => import('@/components/solutions/Solutions10')),
  '49': dynamic(() => import('@/components/solutions/Solutions49')),
  '34': dynamic(() => import('@/components/solutions/Solutions34')),
  '30': dynamic(() => import('@/components/solutions/Solutions30')),
  '13': dynamic(() => import('@/components/solutions/Solutions13')),
  '12': dynamic(() => import('@/components/solutions/Solutions12')),
  '11': dynamic(() => import('@/components/solutions/Solutions11')),
  '41': dynamic(() => import('@/components/solutions/Solutions41')),
  '43': dynamic(() => import('@/components/solutions/Solutions43')),
};
