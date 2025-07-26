import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { ENV } from "./env.js"
import * as schema from "../db/schema.js"

const sql = neon('postgresql://neondb_owner:npg_ldKAaC5Rf8Xi@ep-shiny-forest-a8cr6m6l-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require')
export const db = drizzle(sql, { schema })