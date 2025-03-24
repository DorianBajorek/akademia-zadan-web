import dynamic from "next/dynamic";

export const stepsMap: Record<string, any> = {
  '1': dynamic(() => import('@/components/stepsProblems/steps1')),
  '2': dynamic(() => import('@/components/stepsProblems/steps2')),
  '3': dynamic(() => import('@/components/stepsProblems/steps3')),
  '4': dynamic(() => import('@/components/stepsProblems/steps4')),
  '5': dynamic(() => import('@/components/stepsProblems/steps5')),
  '6': dynamic(() => import('@/components/stepsProblems/steps6')),
  '7': dynamic(() => import('@/components/stepsProblems/steps7')),
  '8': dynamic(() => import('@/components/stepsProblems/steps8')),
  '9': dynamic(() => import('@/components/stepsProblems/steps9')),
  '10': dynamic(() => import('@/components/stepsProblems/steps10')),
  '11': dynamic(() => import('@/components/stepsProblems/steps11')),
  '12': dynamic(() => import('@/components/stepsProblems/steps12')),
  '13': dynamic(() => import('@/components/stepsProblems/steps13')),
  '14': dynamic(() => import('@/components/stepsProblems/steps14')),
  '15': dynamic(() => import('@/components/stepsProblems/steps15')),
};
