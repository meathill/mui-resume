import crypto from 'crypto';

export function getProfileKey (email: string): string {
  // encrypt email to a hash key
  const hash = crypto.createHash('sha256');
  hash.update(email);
  // add salt
  hash.update(process.env.MUICV_KEY_SALT || 'muicv');
  return `muicv_${hash.digest('hex')}`;
}
