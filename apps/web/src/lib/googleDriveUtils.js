const extractDriveId = (url) => {
  if (!url || typeof url !== 'string' || !url.includes('drive.google.com')) return null;
  // Extract FILE_ID from formats like ?id=FILE_ID or &id=FILE_ID or /file/d/FILE_ID
  const idMatch = url.match(/[?&]id=([^&]+)/) || url.match(/\/file\/d\/([^/]+)/);
  return idMatch && idMatch[1] ? idMatch[1] : null;
};

/**
 * Convert a Google Drive share/export URL into a direct, resized image URL.
 * `width` asks Google to resize the image server-side and `-rw` serves WebP,
 * which is typically 4-5x smaller than the full-size original.
 */
export const convertGoogleDriveUrl = (url, width) => {
  const id = extractDriveId(url);
  if (!id) return url;
  const sizing = width ? `=w${width}-rw` : '';
  return `https://lh3.googleusercontent.com/d/${id}${sizing}`;
};

/** Build a responsive srcset for a Google Drive image, or undefined for other URLs. */
export const buildGoogleDriveSrcSet = (url, widths = [480, 800, 1200, 1600]) => {
  if (!extractDriveId(url)) return undefined;
  return widths.map((w) => `${convertGoogleDriveUrl(url, w)} ${w}w`).join(', ');
};
