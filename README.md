## I. Backend Stuff

1. **Most Important Initial Step**: Setting up Java - Spring Boot project, with Maven dependencies from the Spring Initializer.
2. **Syncing Database to Backend**: Utilize Maven dependencies with Hibernate/JPA for database interaction.
    - **Purpose**: Avoid writing SQL queries, the JPA simulates the database using objects (i.e. a class will represent a database table), this is called Object-Relational Mapping (ORM) - Hibernate is the dependency used to interact with the JPA.
3. **Syncing Backend to Frontend**: Implement RESTful APIs - refactor database as needed (probably will need to).
    - **Purpose**: Use HTTP methods (GET, POST, PUT, DELETE) for CRUD operations (Create, Read, Update, Delete) by different clients using the web interface (pretty much, they click a button on the website and it does a thing on the database).
4. **Bonus**: Use encryption service for passwords in login screen; one is bcrypt.

## II. Frontend Stuff

1. **Most Important Initial Step**: Set up React project.
2. **Actual Frontend**: Use React components and hooks and build over the underlying logic/structure that Spring/REST created.
3. **Displaying Data**: We need to obtain the data using either "fetch" HTTP request or using GraphQL.
4. **Bonus (but we should really do this)**: Make mobile responsive using Tailwind or Bootstrap.
5. **Bonus**: Implement user authentication (verify identity) and authorization (determine privileges) around the backend logic.

## III. Deployment Options

1. **Preferable Option**: Host it on our own server; limitations: the headache of setting it up.
2. **Free Hosting Platform**: i.e. heroku (1000 hours/month runtime), firebase (360 mb/day); limitations: runtime.
3. **Cloud Services, Free-Tier**: digitalocean ($100 credit, 6 months), GCP ($300 credit), Azure ($200 credit).
    - Be aware of hidden costs (e.g., domain registration, SSL certificates).

## IV. Testing

We should do integration testing for the frontend.

## Constants

- Use Version Control (duh); use descriptive commit messages.
- OOP: Everything should be in a class (for Java and JavaScript).
- Code comments and variable naming (and we need to be consistent!):
    - Comment all classes with a paragraph.
    - Comment all methods with a sentence.
    - Data member names and method names should be as descriptive as possible (longer == better).
- Documentation: Should probably document APIs in a MD file or something.

## Don't Need

- Agile.
- Unit tests.
