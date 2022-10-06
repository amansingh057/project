import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import secret from "./secret"

let app = initializeApp(secret);

export let auth = getAuth(app);