import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ydxrvnaixedwgidjuqwf.supabase.co/'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkeHJ2bmFpeGVkd2dpZGp1cXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2MjQxOTksImV4cCI6MjAwMjIwMDE5OX0.3yW9vWSf3Q2wwQo3bex1VwEbRRn56_4i4i2w7HA4PTU"
const supabase = createClient(supabaseUrl, supabaseKey)

const SUPA = {
    base: supabase,
    userSignUp: async function(email,password){
        return await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    clicks:0
                },
                emailRedirectTo: {

                }
            }
        })
    },
    userLogIn: async function(email,password){
        return await supabase.auth.signInWithPassword({
            email:email,
            password:password
        })
    },
    getCurrentUser: async function(){
        const { data: { user } } = await supabase.auth.getUser()
        return user
    },
    updateClicks: async function(num){
        const { user, error } = await supabase.auth.updateUser({
            data: { clicks: num }
          })
          return [user, error]
    }
}
export {SUPA}