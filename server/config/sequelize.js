import { Sequelize } from 'sequelize';
import config from './config.json' assert {type: 'json'};

const sequelize = new Sequelize(config.development);

export default sequelize;