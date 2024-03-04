export async function HashUser() {
    const randomValue = new Uint8Array(32); 
    crypto.getRandomValues(randomValue);
  
    const hashBuffer = await crypto.subtle.digest('SHA-256', randomValue);
  
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  
    return hashHex;
  }