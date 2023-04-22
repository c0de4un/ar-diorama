import axios from 'axios';
import { API_BASE_URL } from '../configs/api';

export class ApiClient {
  private static _instance: ApiClient | null = null;

  private constructor() {
  }

  /**
   * @return {ApiClient}
   */
  public static getInstance(): ApiClient {
    if (!ApiClient._instance) {
      ApiClient._instance = new ApiClient();
    }

    return ApiClient._instance;
  }

  /**
   * @param  {string} url
   * @param  {Object} params
   * @param  {Object} headers
   * @return {Promise}
   */
  public async get(url: string, params: object = {}, headers: object = {}): Promise<any> {
    headers = Object.assign(
        {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        headers
    );

    return axios.get(
        `${API_BASE_URL}/url`,
        {
          params: params,
          headers: headers
        }
    );
  }

  /**
   * @param  {string} url
   * @param  {Object} data
   * @param  {Object} params
   * @param  {Object} headers
   * @return {Promise}
   */
  public async post(url: string, data: Object, params: object = {}, headers: object = {}): Promise<any> {
    headers = Object.assign(
        {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        headers
    );

    return axios.post(
      `${API_BASE_URL}/${url}`,
      data,
{
        params: params,
        headers: headers
      }
    );
  }

  /**
   * @param  {string} url
   * @return {Promise}
   */
  public async delete(url: string): Promise<any> {
    return axios.delete(`${API_BASE_URL}/url`);
  }

  /**
   * @param  {string} url
   * @return {Promise}
   */
  public async put(url: string): Promise<any> {
    return axios.put(`${API_BASE_URL}/url`);
  }
}
