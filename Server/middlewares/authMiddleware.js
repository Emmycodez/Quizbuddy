import admin from 'firebase-admin';

const authenticate = async (request, response, next) => {
  const idToken = request.headers.authorization?.split('Bearer ')[1];

  if (!idToken) {
    return response.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    request.user = decodedToken;
    next();
  } catch (error) {
    console.error("Error verifying ID token: ", error);
    return response.status(401).json({ error: 'Error verifying ID token' });
  }
};

export default authenticate;
