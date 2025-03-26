import dynamic from "next/dynamic";

export const stepsMap: Record<string, any> = {
  '100': dynamic(() => import('@/components/stepsProblems/steps100')),
  '101': dynamic(() => import('@/components/stepsProblems/steps101')),
  '102': dynamic(() => import('@/components/stepsProblems/steps102')),
  '103': dynamic(() => import('@/components/stepsProblems/steps103')),
  '104': dynamic(() => import('@/components/stepsProblems/steps104')),
  '105': dynamic(() => import('@/components/stepsProblems/steps105')),
  '106': dynamic(() => import('@/components/stepsProblems/steps106')),
  '107': dynamic(() => import('@/components/stepsProblems/steps107')),
  '108': dynamic(() => import('@/components/stepsProblems/steps108')),
  '109': dynamic(() => import('@/components/stepsProblems/steps109')),
  '200': dynamic(() => import('@/components/stepsProblems/steps200')),
  '201': dynamic(() => import('@/components/stepsProblems/steps201')),
  '202': dynamic(() => import('@/components/stepsProblems/steps202')),
  '203': dynamic(() => import('@/components/stepsProblems/steps203')),
  '204': dynamic(() => import('@/components/stepsProblems/steps204')),
  '205': dynamic(() => import('@/components/stepsProblems/steps205')),
  '206': dynamic(() => import('@/components/stepsProblems/steps206')),
  '207': dynamic(() => import('@/components/stepsProblems/steps207')),
  '208': dynamic(() => import('@/components/stepsProblems/steps208')),
  '209': dynamic(() => import('@/components/stepsProblems/steps209')),
};
