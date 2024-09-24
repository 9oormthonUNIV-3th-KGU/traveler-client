import Straight from '~/assets/straight.svg'
import Left from '~/assets/left.svg'
import Right from '~/assets/right.svg'
import UTurn from '~/assets/u-turn.svg'
import Left8 from '~/assets/left-8.svg'
import Left10 from '~/assets/left-10.svg'
import Right2 from '~/assets/right-2.svg'
import Right4 from '~/assets/right-4.svg'
import Bridge from '~/assets/bridge.svg'
import Underground from '~/assets/underground.svg'
import Stairs from '~/assets/stairs.svg'
import Ramp from '~/assets/ramp.svg'
import StairsRamp from '~/assets/stairs+ramp.svg'
import Crosswalk from '~/assets/crosswalk.svg'
import LeftCrosswalk from '~/assets/left-crosswalk.svg'
import RightCrosswalk from '~/assets/right-crosswalk.svg'
import Left8Crosswalk from '~/assets/left-8-crosswalk.svg'
import Left10Crosswalk from '~/assets/left-10-crosswalk.svg'
import Right2Crosswalk from '~/assets/right-2-crosswalk.svg'
import Right4Crosswalk from '~/assets/right-4-crosswalk.svg'
import Elevator from '~/assets/elevator.svg'

const NavigateType = {
  11: { icon: Straight, position: 'top' },
  12: { icon: Left, position: 'top' },
  13: { icon: Right, position: 'top' },
  14: { icon: UTurn, position: 'top' },
  16: { icon: Left8, position: 'top' },
  17: { icon: Left10, position: 'top' },
  18: { icon: Right2, position: 'top' },
  19: { icon: Right4, position: 'top' },
  125: { icon: Bridge, position: 'bottom' },
  126: { icon: Underground, position: 'top' },
  127: { icon: Stairs, position: 'bottom' },
  128: { icon: Ramp, position: 'bottom' },
  129: { icon: StairsRamp, position: 'top' },
  211: { icon: Crosswalk, position: 'bottom' },
  212: { icon: LeftCrosswalk, position: 'bottom' },
  213: { icon: RightCrosswalk, position: 'bottom' },
  214: { icon: Left8Crosswalk, position: 'bottom' },
  215: { icon: Left10Crosswalk, position: 'bottom' },
  216: { icon: Right2Crosswalk, position: 'bottom' },
  217: { icon: Right4Crosswalk, position: 'bottom' },
  218: { icon: Elevator, position: 'top' },
} as const

export { NavigateType }
