/// <reference types="yoshi/types" />
/// <reference types="jest-yoshi-preset/types" />

interface Window {
  __LOCALE__: string;
  __BASEURL__: string;
}

declare module '@wix/wix-base-ui';
declare module 'wix-ui-icons-common/*';
