const base = '/api';

export async function login(username: string, password: string) {
  const r = await fetch(`${base}/api-token-auth/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!r.ok) throw new Error('Bad credentials');
  const { token } = await r.json();
  localStorage.setItem('token', token);
  return token;
}

export function logout() {
  localStorage.removeItem('token');
}

export async function me() {
  const token = localStorage.getItem('token') || '';
  const r = await fetch(`${base}/me/`, {
    headers: { Authorization: `Token ${token}` },
  });
  if (!r.ok) throw new Error('Unauthorized');
  return r.json();
}
