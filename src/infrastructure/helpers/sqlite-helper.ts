import knex, { Knex } from "knex";

const knexfile = require("../../../knexfile");

const connection = knex(knexfile.development);

export { connection };
