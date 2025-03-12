// const { Pool } = require("pg");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "yupiter",
//   password: "1234",
//   port: 5432,
// });

// module.exports = pool;
const { Pool } = require("pg");

const pool = new Pool({
  connectionString:'postgresql://azizbek:N4DwLneFRGmJReQJypDkeTNh5rzk02PQ@dpg-cv4plt2n91rc73e4jphg-a.oregon-postgres.render.com/yupiter_gliz',
  ssl: {
    rejectUnauthorized: false, // Required for Render PostgreSQL
  },
});

module.exports = pool;

