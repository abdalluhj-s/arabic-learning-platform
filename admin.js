let currentTable = 'levels';
let editId = null;

// Initialize Admin Page
async function initAdmin() {
    const user = await checkAdminAuth();
    if (!user) return;
    
    showSection('levels');
    
    document.getElementById('logoutBtn').onclick = async () => {
        await _supabase.auth.signOut();
        window.location.href = 'index.html';
    };
    
    document.getElementById('addBtn').onclick = () => openModal('add');
    document.getElementById('adminForm').onsubmit = handleFormSubmit;
}

// Show Data Section
async function showSection(table) {
    currentTable = table;
    document.getElementById('sectionTitle').innerText = table.toUpperCase();
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '<div class="p-20 text-center text-gray-400 italic">Fetching ' + table + '...</div>';

    let { data, error } = await _supabase.from(table).select('*').order('id', { ascending: true });

    if (error) {
        contentArea.innerHTML = `<div class="p-20 text-center text-red-500 font-bold">Error: ${error.message}</div>`;
        return;
    }

    renderTable(data);
}

// Render Data Table
function renderTable(data) {
    if (data.length === 0) {
        document.getElementById('contentArea').innerHTML = '<div class="p-20 text-center text-gray-400">No data found in ' + currentTable + '.</div>';
        return;
    }

    const headers = Object.keys(data[0]);
    let html = `<table class="w-full text-left">
        <thead class="bg-slate-50 border-b border-gray-200">
            <tr>
                ${headers.map(h => `<th class="p-4 text-xs font-bold text-gray-500 uppercase">${h}</th>`).join('')}
                <th class="p-4 text-xs font-bold text-gray-500 uppercase text-right">Actions</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
            ${data.map(row => `
                <tr class="hover:bg-blue-50/50 transition-colors">
                    ${headers.map(h => `<td class="p-4 text-sm text-gray-600 truncate max-w-[200px]">${row[h]}</td>`).join('')}
                    <td class="p-4 text-right space-x-2">
                        <button onclick="editItem('${currentTable}', ${row.id})" class="text-blue-600 hover:underline font-bold">Edit</button>
                        <button onclick="deleteItem('${currentTable}', ${row.id})" class="text-red-500 hover:underline font-bold">Delete</button>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    </table>`;

    document.getElementById('contentArea').innerHTML = html;
}

// Modal Logic
function openModal(mode, data = {}) {
    editId = data.id || null;
    document.getElementById('modalTitle').innerText = mode === 'add' ? `Add New ${currentTable}` : `Edit ${currentTable}`;
    const formFields = document.getElementById('formFields');
    formFields.innerHTML = '';

    const config = {
        levels: ['name'],
        lessons: ['level_id', 'title_ar', 'text_ar', 'text_en', 'text_ru', 'text_uz', 'audio_url'],
        quizzes: ['lesson_id', 'question_ar', 'correct_option_index']
    };

    config[currentTable].forEach(field => {
        const value = data[field] || '';
        formFields.innerHTML += `
            <div>
                <label class="block text-xs font-bold text-gray-400 uppercase mb-1">${field.replace('_', ' ')}</label>
                <input name="${field}" value="${value}" class="w-full p-3 border-2 border-gray-100 rounded-xl focus:border-blue-500 outline-none" required>
            </div>
        `;
    });

    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Form Submission
async function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    let error;
    if (editId) {
        ({ error } = await _supabase.from(currentTable).update(payload).eq('id', editId));
    } else {
        ({ error } = await _supabase.from(currentTable).insert([payload]));
    }

    if (error) {
        alert('Error: ' + error.message);
    } else {
        closeModal();
        showSection(currentTable);
    }
}

// Edit & Delete
async function editItem(table, id) {
    const { data, error } = await _supabase.from(table).select('*').eq('id', id).single();
    if (data) openModal('edit', data);
}

async function deleteItem(table, id) {
    if (confirm('Are you sure you want to delete this item?')) {
        const { error } = await _supabase.from(table).delete().eq('id', id);
        if (!error) showSection(table);
        else alert(error.message);
    }
}

initAdmin();
