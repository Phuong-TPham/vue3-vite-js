import { createI18n } from "vue-i18n";

import ja from "@/locales/ja.json";

export default createI18n({
  legacy: false,
  locale: import.meta.env.VITE_APP_I18N_LOCALE || "ja",
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || "ja",
  messages: {
    ja,
  },
});
