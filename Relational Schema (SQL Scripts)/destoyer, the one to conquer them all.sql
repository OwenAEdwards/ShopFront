/* I'm dropping you. I'm dropping you. I don't care about anything else, I don't give a shit
about anything else, I- My programming is just "DROP THOSE FUCKING TABLES RIGHT NOW". It doesn't-
There's no, like, "Oh, he's running? I'll back off a little!", it's just *DROP SCHEMA public
CASCADE* until I get you. */

DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;