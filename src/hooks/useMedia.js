// import { useMemo } from 'react';
// import { useMediaQuery } from 'react-responsive'

// import { breakpoints } from '../utils';

// // usage: useMedia('lg')
// // output: 'lg' when { minWidth: lg.min, maxWidth: lg.max }
// // if not match 'lg' hook returns false

// // usage: useMedia({minWidth: 'md', maxWidth: 'lg'})
// // output: 'lg' when match "mid.min - lg.max"
// // if not match "mid.min - lg.max" hook returns false
// export const useMedia = (query) => {

//     const mediaQuery = useMemo(() => {

//     if (typeof query === 'string') {
//         return {
//                 screen: query,
//                 query: {
//                     minWidth: breakpoints[query]?.min,
//                     maxWidth: breakpoints[query]?.max,
//                 },
//             };
//         } else {
//             return Object.entries(query).forEach((key) => {
//                 const [prop, value] = key;
//                 const breakpoint = Object.keys(breakpoints).find((bp) => bp === value);

//                 let media = null;
//                 if (prop.toLowerCase().indexOf('min') !== -1) {
//                     media = breakpoints[breakpoint]?.min;
//                 }

//                 if (prop.toLowerCase().indexOf('max') !== -1) {
//                     media = breakpoints[breakpoint]?.max;
//                 }

//                 return {
//                     screen: value,
//                     query: { ...mediaQuery.query, [prop]: media },
//                 };
//             });
//         }
//     }, [query]);

//     // useMediaQuery returns true when window.match query and false if it's not
//     const currentMedia = useMediaQuery(mediaQuery.query);
//     // our custom hook returns relevant breakpoint name instead of true boolean
//     // it's useful for checking current breakpoint and chaining
//     return currentMedia ? mediaQuery.screen : false;
// };
