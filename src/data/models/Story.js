/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize'
import Model from '../sequelize'

const Story = Model.define('Story', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true
  },

  body: {
    type: DataType.STRING(256),
    required: true
  },

  publishedDate: {
    type: DataType.DATE,
    allowNull: false
  }

})

export default Story