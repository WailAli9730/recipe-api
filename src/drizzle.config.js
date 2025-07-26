import { ENV } from "./config/env";
export default {
    schema: "./src/db/schema.js",
    out: "./src/db/migrations",
    dialect: "postgresql",
    dbCredentials: { url: 'postgresql://neondb_owner:npg_ldKAaC5Rf8Xi@ep-shiny-forest-a8cr6m6l-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require' },
};