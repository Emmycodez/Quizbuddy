import admin from 'firebase-admin';

// Middleware to authenticate using Firebase token
const authenticate = async (request, response, next) => {
  const idToken = request.headers.authorization?.split(" ")[1];
  if (!idToken) {
    return response.status(401).json({ error: "No token provided" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    request.user = decodedToken;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    response.status(401).json({ error: "Unauthorized" });
  }
};


export default authenticate;
