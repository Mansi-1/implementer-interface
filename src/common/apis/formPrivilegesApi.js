import { httpInterceptor } from 'common/utils/httpInterceptor';
import { formBuilderConstants } from 'form-builder/constants';
import { UrlHelper } from 'form-builder/helpers/UrlHelper';

export function saveFormPrivileges(formPrivileges) {
  return httpInterceptor.post(formBuilderConstants.saveFormPrivilegesUrl, formPrivileges);
}
export function getFormPrivileges(formId) {
  return httpInterceptor.get(new UrlHelper()
      .getFormPrivilegesUrl(formId), 'text');
}