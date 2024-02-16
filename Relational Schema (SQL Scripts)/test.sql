-- test to select every table/schema
SELECT tablename
FROM pg_tables
WHERE schemaname != 'pg_catalog'
  AND schemaname != 'information_schema';