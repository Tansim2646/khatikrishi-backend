// Generate a random verification code
export const generateVerificationCode = () => {
  return crypto.randomBytes(3).toString("hex").toUpperCase(); // Generate a 6-digit alphanumeric code
};
