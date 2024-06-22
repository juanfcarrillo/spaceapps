import { ui, defaultLang } from './ui';

/**
 * Función para obtener el idioma desde la URL.
 * @param url - La URL desde la cual se extrae el idioma.
 * @returns El idioma si está definido en 'ui', de lo contrario, retorna 'defaultLang'.
 */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * Función para usar traducciones basadas en el idioma.
 * @param lang - El idioma a utilizar para las traducciones.
 * @returns Una función que toma una clave de traducción y retorna el texto traducido.
 */

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

/**
 * Función para obtener una ruta traducida basada en el idioma.
 * @param lang - El idioma a utilizar para traducir la ruta.
 * @returns Una función que toma una ruta y, opcionalmente, un idioma, y retorna la ruta traducida.
 */
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return `/${l}${path}`;
  }
}
