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
  '27': dynamic(() => import('@/components/solutions/Solutions27')),
  '7': dynamic(() => import('@/components/solutions/Solutions7')),
  '50': dynamic(() => import('@/components/solutions/Solutions50')),
  '4': dynamic(() => import('@/components/solutions/Solutions4')),
  '39': dynamic(() => import('@/components/solutions/Solutions39')),
  '20': dynamic(() => import('@/components/solutions/Solutions20')),
  '5': dynamic(() => import('@/components/solutions/Solutions5')),
  '1': dynamic(() => import('@/components/solutions/Solutions1')),
  '29': dynamic(() => import('@/components/solutions/Solutions29')),
  '37': dynamic(() => import('@/components/solutions/Solutions37')),
  '44': dynamic(() => import('@/components/solutions/Solutions44')),
  '25': dynamic(() => import('@/components/solutions/Solutions25')),
  '32': dynamic(() => import('@/components/solutions/Solutions32')),
  '47': dynamic(() => import('@/components/solutions/Solutions47')),
  '17': dynamic(() => import('@/components/solutions/Solutions17')),
  '33': dynamic(() => import('@/components/solutions/Solutions33')),
  '15': dynamic(() => import('@/components/solutions/Solutions15')),
  '52': dynamic(() => import('@/components/solutions/Solutions52')),
  '38': dynamic(() => import('@/components/solutions/Solutions38')),
  '66': dynamic(() => import('@/components/solutions/Solutions66')),
  '75': dynamic(() => import('@/components/solutions/Solutions75')),
  '35': dynamic(() => import('@/components/solutions/Solutions35')),
  '6': dynamic(() => import('@/components/solutions/Solutions6')),
  '80': dynamic(() => import('@/components/solutions/Solutions80')),
  '31': dynamic(() => import('@/components/solutions/Solutions31')),
  '73': dynamic(() => import('@/components/solutions/Solutions73')),
  '53': dynamic(() => import('@/components/solutions/Solutions53')),
  '45': dynamic(() => import('@/components/solutions/Solutions45')),
  '107': dynamic(() => import('@/components/solutions/Solutions107')),
  '77': dynamic(() => import('@/components/solutions/Solutions77')),
  '94': dynamic(() => import('@/components/solutions/Solutions94')),
  '9': dynamic(() => import('@/components/solutions/Solutions9')),
  '116': dynamic(() => import('@/components/solutions/Solutions116')),
  '42': dynamic(() => import('@/components/solutions/Solutions42')),
  '98': dynamic(() => import('@/components/solutions/Solutions98')),
  '114': dynamic(() => import('@/components/solutions/Solutions114')),
  '72': dynamic(() => import('@/components/solutions/Solutions72')),
  '88': dynamic(() => import('@/components/solutions/Solutions88')),
  '109': dynamic(() => import('@/components/solutions/Solutions109')),
  '64': dynamic(() => import('@/components/solutions/Solutions64')),
  '124': dynamic(() => import('@/components/solutions/Solutions124')),
  '24': dynamic(() => import('@/components/solutions/Solutions24')),
  '90': dynamic(() => import('@/components/solutions/Solutions90')),
  '131': dynamic(() => import('@/components/solutions/Solutions131')),
  '8': dynamic(() => import('@/components/solutions/Solutions8')),
  '145': dynamic(() => import('@/components/solutions/Solutions145')),
  '128': dynamic(() => import('@/components/solutions/Solutions128')),
  '121': dynamic(() => import('@/components/solutions/Solutions121')),
  '19': dynamic(() => import('@/components/solutions/Solutions19')),
  '197': dynamic(() => import('@/components/solutions/Solutions197')),
  '134': dynamic(() => import('@/components/solutions/Solutions134')),
  '133': dynamic(() => import('@/components/solutions/Solutions133')),
  '162': dynamic(() => import('@/components/solutions/Solutions162')),
  '70': dynamic(() => import('@/components/solutions/Solutions70')),
  '68': dynamic(() => import('@/components/solutions/Solutions68')),
  '46': dynamic(() => import('@/components/solutions/Solutions46')),
  '51': dynamic(() => import('@/components/solutions/Solutions51')),
  '151': dynamic(() => import('@/components/solutions/Solutions151')),
  '140': dynamic(() => import('@/components/solutions/Solutions140')),
  '189': dynamic(() => import('@/components/solutions/Solutions189')),
  '186': dynamic(() => import('@/components/solutions/Solutions186')),
  '16': dynamic(() => import('@/components/solutions/Solutions16')),
  '23': dynamic(() => import('@/components/solutions/Solutions23')),
  '188': dynamic(() => import('@/components/solutions/Solutions188')),
  '112': dynamic(() => import('@/components/solutions/Solutions112')),
  '85': dynamic(() => import('@/components/solutions/Solutions85')),
  '142': dynamic(() => import('@/components/solutions/Solutions142')),
  '69': dynamic(() => import('@/components/solutions/Solutions69')),
  '36': dynamic(() => import('@/components/solutions/Solutions36')),
  '3': dynamic(() => import('@/components/solutions/Solutions3')),
  '14': dynamic(() => import('@/components/solutions/Solutions14')),
  '18': dynamic(() => import('@/components/solutions/Solutions18')),
  '21': dynamic(() => import('@/components/solutions/Solutions21')),
  '22': dynamic(() => import('@/components/solutions/Solutions22')),
  '26': dynamic(() => import('@/components/solutions/Solutions26')),
  '28': dynamic(() => import('@/components/solutions/Solutions28')),
  '48': dynamic(() => import('@/components/solutions/Solutions48')),
  '56': dynamic(() => import('@/components/solutions/Solutions56')),
  '60': dynamic(() => import('@/components/solutions/Solutions60')),
  '61': dynamic(() => import('@/components/solutions/Solutions61')),
  '63': dynamic(() => import('@/components/solutions/Solutions63')),
  '65': dynamic(() => import('@/components/solutions/Solutions65')),
  '67': dynamic(() => import('@/components/solutions/Solutions67')),
  '141': dynamic(() => import('@/components/solutions/Solutions141')),
  '119': dynamic(() => import('@/components/solutions/Solutions119')),
  '129': dynamic(() => import('@/components/solutions/Solutions129')),
  '130': dynamic(() => import('@/components/solutions/Solutions130')),
  '135': dynamic(() => import('@/components/solutions/Solutions135')),
  '108': dynamic(() => import('@/components/solutions/Solutions108')),
  '110': dynamic(() => import('@/components/solutions/Solutions110')),
  '111': dynamic(() => import('@/components/solutions/Solutions111')),
  '113': dynamic(() => import('@/components/solutions/Solutions113')),
  '115': dynamic(() => import('@/components/solutions/Solutions115')),
  '120': dynamic(() => import('@/components/solutions/Solutions120')),
  '122': dynamic(() => import('@/components/solutions/Solutions122')),
  '123': dynamic(() => import('@/components/solutions/Solutions123')),
  '125': dynamic(() => import('@/components/solutions/Solutions125')),
  '136': dynamic(() => import('@/components/solutions/Solutions136')),
  '138': dynamic(() => import('@/components/solutions/Solutions138')),
  '143': dynamic(() => import('@/components/solutions/Solutions143')),
  '144': dynamic(() => import('@/components/solutions/Solutions144')),
  '146': dynamic(() => import('@/components/solutions/Solutions146')),
  '147': dynamic(() => import('@/components/solutions/Solutions147')),
  '148': dynamic(() => import('@/components/solutions/Solutions148')),
  '149': dynamic(() => import('@/components/solutions/Solutions149')),
  '150': dynamic(() => import('@/components/solutions/Solutions150')),
  '152': dynamic(() => import('@/components/solutions/Solutions152')),
  '153': dynamic(() => import('@/components/solutions/Solutions153')),
  '154': dynamic(() => import('@/components/solutions/Solutions154')),
  '155': dynamic(() => import('@/components/solutions/Solutions155')),
  '156': dynamic(() => import('@/components/solutions/Solutions156')),
  '157': dynamic(() => import('@/components/solutions/Solutions157')),
  '158': dynamic(() => import('@/components/solutions/Solutions158')),
  '160': dynamic(() => import('@/components/solutions/Solutions160')),
};
