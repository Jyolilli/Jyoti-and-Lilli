import styledBreakpoint from '@humblebee/styled-components-breakpoint';

/**
 * Breakpoint width values
 * Based on Bootstrap responsive breakpoints but changed lg from 992 to 1080 as per the design
 * https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints
 */
export enum Breakpoint {
  xxs = 0,
  xs = 320,
  sm = 576,
  md = 768,
  lg = 1080,
  xl = 1200,
}

/**
 * Styled-system breakpoints array object
 * https://styled-system.com/responsive-styles
 */
class BreakpointsTypes<T> extends Array<T> {
  get xxs(): T {
    return this[0];
  }

  get xs(): T {
    return this[1];
  }

  get sm(): T {
    return this[2];
  }

  get md(): T {
    return this[3];
  }

  get lg(): T {
    return this[4];
  }

  get xl(): T {
    return this[5];
  }

  get xxl(): T {
    return this[6];
  }
}

const breakpoints = new BreakpointsTypes(
  `${Breakpoint.xxs}`, // zero value does not need unit
  `${Breakpoint.xs}px`,
  `${Breakpoint.sm}px`,
  `${Breakpoint.md}px`,
  `${Breakpoint.lg}px`,
  `${Breakpoint.xl}px`,
);

/**
 * Media query utility function
 */
const breakpoint = styledBreakpoint({
  xxs: Breakpoint.xxs,
  xs: Breakpoint.xs,
  sm: Breakpoint.sm,
  md: Breakpoint.md,
  lg: Breakpoint.lg,
  xl: Breakpoint.xl,
});

export { breakpoints, breakpoint };
