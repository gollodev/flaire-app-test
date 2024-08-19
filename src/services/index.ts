import { URL_BASE, citiesResource } from '../constants';
import { type City } from '../types';

export async function fetchCities(): Promise<City[] | Error> {
  try {
    const citiesResponse = await (
      await fetch(`${URL_BASE}/${citiesResource}`)
    ).json();
    return citiesResponse;
  } catch (error) {
    return error as Error;
  }
}
