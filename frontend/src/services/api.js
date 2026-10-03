const apiUrl = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

export async function request(path, options = {}) {
  let response;

  try {
    response = await fetch(`${apiUrl}${path.startsWith('/') ? path : `/${path}`}`, {
      ...options,
      headers: {
        ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        ...options.headers,
      },
    });
  } catch {
    throw new Error('The API could not be reached. Check your connection and try again.');
  }

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed with status ${response.status}.`);
  }

  return response.json();
}