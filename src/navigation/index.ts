export type TemplateCodes = 
| 'HOME'
| 'TEST'
| 'VOCABULARIES' 
| 'BANK_MANAGER' 
| 'BANK_MANAGER_DETAIL'
| 'BANK_MANAGER_ADD'
| 'GROUP_MANAGER'
| 'GROUP_DETAIL'
| 'GROUP_CREATE'
| 'SIGN_IN'
| 'SIGN_UP'

const urlHash: {[key in TemplateCodes]: string} = {
  HOME: '/trang-chu',
  VOCABULARIES: '/tu-vung',
  TEST: '/test',
  BANK_MANAGER: '/quan-ly-chi-tieu',
  BANK_MANAGER_DETAIL: '/quan-ly-chi-tieu/chi-tiet',
  BANK_MANAGER_ADD: '/quan-ly-chi-tieu/them-chi-tieu',
  GROUP_MANAGER: '/quan-ly-nhom',
  GROUP_DETAIL: '/nhom',
  GROUP_CREATE: '/tao-nhom',
  SIGN_IN: '/dang-nhap',
  SIGN_UP: '/dang-ky'
}
export const renderPageUrl = (code: TemplateCodes, slug?: string): string => {
  if(!urlHash[code]) return '/';
  if(slug) return `${urlHash[code]}/${slug}`;
  return urlHash[code];
}