export type BordersPropsType = "t" | "r" | "b" | "l" |
                               "tb" | "rl" | "rt" | "tl" |
                               "lb" | "rb" | "trbl" |
                               "trl" | "tlb" | "lbr" | "none"


export const parseBordersProps = (arg: string) => {
  let bordersStyle: string = 'border-theme-border '

  if (arg.includes('t')) {bordersStyle += 'border-t '}
  if (arg.includes('b')) {bordersStyle += 'border-b '}
  if (arg.includes('r')) {bordersStyle += 'border-r '}
  if (arg.includes('l')) {bordersStyle += 'border-l '}

  return bordersStyle.trim()
  }