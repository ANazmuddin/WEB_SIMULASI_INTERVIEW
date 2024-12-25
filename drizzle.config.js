/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:N1xEmpvfHP4I@ep-fancy-truth-a1cbc0k4.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
    }
  };