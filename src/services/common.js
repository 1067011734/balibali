import request from '@/utils/request'
import { stringify } from 'qs'

export async function login(params) {
  return request(`/api/login?${stringify(params)}`,{method:'POST'});
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}
