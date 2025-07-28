import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en'
});

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|api).*)'
  ]
};
