import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactFormData = {
  name: string
  email: string
  country_code: string
  phone: string
  role: string
  company_name: string
  company_website: string
  company_size: string
  annual_revenue: string
  project_budget: string
  services: string
  message: string
}