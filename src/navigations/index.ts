export type TemplateCodes = 'HOME' | 'VOCABULARIES';

const urlHash: {[key in TemplateCodes]: string} = {
  HOME: '/trang-chu',
  VOCABULARIES: '/tu-vung',
}
export const renderPageUrl = (code: TemplateCodes, slug?: string): string => {
  if(!urlHash[code]) return '/';
  if(slug) return `${urlHash[code]}/${slug}`;
  return urlHash[code];
}