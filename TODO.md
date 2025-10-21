# TODO: Add Lazy Loading for Navigation Components and Menu Items

## Steps to Complete

- [x] Update `src/app/(DashboardLayout)/layout.tsx` to lazy load Sidebar and Header components using React.lazy and Suspense
- [x] Update `src/app/(DashboardLayout)/layout/sidebar/MenuItems.tsx` to lazy load MUI icons using dynamic imports (reverted due to SSR issues)
- [x] Run the app locally with `npm run dev` and verify lazy loading behavior
- [x] Test navigation on different devices and check browser dev tools for deferred loads (browser tool disabled, manual testing recommended)
- [x] Ensure no SSR issues and adjust fallbacks if needed (resolved by reverting icon lazy loading)
