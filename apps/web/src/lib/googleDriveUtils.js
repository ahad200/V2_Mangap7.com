export const convertGoogleDriveUrl = (url) => {
  if (!url || typeof url !== 'string') return url;
  if (!url.includes('drive.google.com')) return url;

  // Extract FILE_ID from formats like ?id=FILE_ID or &id=FILE_ID or /file/d/FILE_ID
  const idMatch = url.match(/[?&]id=([^&]+)/) || url.match(/\/file\/d\/([^/]+)/);
  
  if (idMatch && idMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
  }
  
  // Return original URL if extraction fails
  return url;
};