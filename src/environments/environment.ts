// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // hostFull: 'http://localhost:8000',
  // host: 'http://localhost:8000/api',
    hostFull: 'https://api.campus.cymetria.com/',
  host: 'https://api.campus.cymetria.com/api',
  version: 'v1',
  endpoints: {
    areas: '/areas',
    users: 'users',
    user: {
      login: '/auth/login/',
      resetPassword: '/auth/password/reset/',
      confirmPassword: '/auth/password/reset/confirm/'
    },
    level: '/level',
    courses: '/courses',
    reviews: '/reviews',
    categories: '/categories',
    collaborative: '/collaborative',
    myCollaboratives: '/users/collaboratives',
    marketplace: '/marketplace',
    top: '/users/top',
    assistance: '/collaborative/assistance',
    declineAssistance: '/collaborative/decline',
    transaction: '/transaction',
    forum: {
      post: '/post',
      comment: '/comment',
    },
    order: '/order',
    connection: '/connection',
    connectionAssistance: '/connection/assistance',
    connectionDecline: '/connection/decline',
    myConnections: '/users/connections',
    testimony: '/testimony',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
