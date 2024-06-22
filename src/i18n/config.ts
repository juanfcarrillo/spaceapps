import { ui, defaultLang } from './ui';

/**
 * Función para obtener el idioma desde la URL.
 * @param url - La URL desde la cual se extrae el idioma.
 * @returns El idioma si está definido en 'ui', de lo contrario retorna 'defaultLang'.
 */

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}
