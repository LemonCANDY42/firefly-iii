/*
 * list.js
 * Copyright (c) 2022 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import Api from "src/api/root/api";

export default class Get extends Api {
  constructor() {
    super('accounts'); // call the super class constructor and pass in the name parameter
  }

  /**
   *
   * @param identifier
   * @param date
   * @returns {Promise<AxiosResponse<any>>}
   */
  get(identifier, date) {
    let params = {date: date};
    if(!date) {
      return this.apiGet(identifier);
    }
    return this.apiGet(identifier, params);
  }

  /**
   *
   * @param identifier
   * @param page
   * @returns {Promise<AxiosResponse<any>>}
   */
  transactions(identifier, page) {
    return this.apiGetChildren('transactions', identifier, page);
  }
}
