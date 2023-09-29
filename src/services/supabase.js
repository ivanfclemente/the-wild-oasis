import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dcynvpzhbuxzgvmwttot.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjeW52cHpoYnV4emd2bXd0dG90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxODIxODcsImV4cCI6MjAwOTc1ODE4N30.dYoLrpXFXgPR8DSqiaiBZD1fZlCcpFJgubL2saur_Ps";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
