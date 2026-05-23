// Supabase Configuration
const SUPABASE_URL = 'https://vqubujpihuesgpgghwgm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_2CfrzbkCFF6KsPWC3RtC4g_rgjVtz8l';

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Check if user is logged in as admin
async function checkAdminAuth() {
    const { data: { session }, error: sessionError } = await _supabase.auth.getSession();
    
    if (sessionError || !session) {
        window.location.href = 'login.html';
        return null;
    }

    const user = session.user;

    // We use a regular select instead of .single() to avoid 406 error if row doesn't exist
    const { data, error } = await _supabase
        .from('user_roles')
        .select('role')
        .eq('id', user.id);

    if (error) {
        console.error("Auth Error:", error.message);
        return null;
    }

    // Check if the user has the 'admin' role
    const isAdmin = data && data.length > 0 && data[0].role === 'admin';

    if (!isAdmin) {
        alert('Access Denied: You are not an admin.\nYour User ID: ' + user.id + '\nPlease add this ID to user_roles table with role "admin".');
        window.location.href = 'index.html';
        return null;
    }
    
    return user;
}
