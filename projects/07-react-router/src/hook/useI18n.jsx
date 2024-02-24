import { I18N } from '../const'

export default function useI18n(lang) {
  return I18N[lang] || I18N.en
}
