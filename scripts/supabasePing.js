const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

async function ping() {
  const { error } = await supabase
    .from('profiles') // 👈 CHANGE TO YOUR TABLE
    .select('id')
    .limit(1)

  if (error) {
    console.error('Ping failed:', error)
    process.exit(1)
  }

  console.log('Supabase ping successful ✅')
}

ping()
