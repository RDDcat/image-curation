import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://esuucuuovcxfdsoejglr.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzdXVjdXVvdmN4ZmRzb2VqZ2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MTM5MjksImV4cCI6MjA2NTk4OTkyOX0.o_vYwL6QQMa28ZJ9n5YKPtSUZfBXHS9UvCywyo0Y2Jg'

export const supabase = createClient(supabaseUrl, supabaseKey)
