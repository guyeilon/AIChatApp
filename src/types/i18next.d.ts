import 'i18next';
import i18n from 'i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: typeof i18n.resources.Heb;
  }
}
