import { str, envsafe, port, url } from "envsafe";

export default envsafe({
  GOOGLE_ID: str(),
  GOOGLE_SECRET: str(),
  FIREBASE_API_KEY: str(),
  FIREBASE_APP_ID: str(),
  FIREBASE_AUTH_DOMAIN: str(),
  FIREBASE_DATABASE_URL: str(),
  FIREBASE_PROJECT_ID: str(),
  FIREBASE_STORAGE_BUCKET: str(),
  FIREBASE_MESSAGING_SENDER_ID: str(),
});
