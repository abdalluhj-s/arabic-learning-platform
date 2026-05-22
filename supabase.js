// Supabase Configuration
const SUPABASE_URL = 'https://vqubujpihuesgpgghwgm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_2CfrzbkCFF6KsPWC3RtC4g_rgjVtz8l'; // Use service_role key for admin if possible, but keeping yours

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Check if user is logged in as admin
async function checkAdminAuth() {
    const { data: { user } } = await _supabase.auth.getUser();
    if (!user) {
        window.location.href = 'login.html'; // Redirect to login if not authenticated
        return null;
    }

    // Check user role from your user_roles table
    const { data, error } = await _supabase
        .from('user_roles')
        .select('role')
        .eq('id', user.id)
        .single();

    if (error || data.role !== 'admin') {
        alert('Access Denied: Admins Only');
        window.location.href = 'index.html';
        return null;
    }
    return user;
}
