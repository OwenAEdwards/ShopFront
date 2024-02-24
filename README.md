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

## Best practices

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

## Files
### API/Presentation Layer (Controllers)
- TBA
### Business Logic/Application Layer (Services)
- **UserService**: This class implements business logic related to users, such as registration, login, and profile management.
- **CustomerService**: This class implements business logic related to customers, such as adding and managing addresses, credit cards, and orders.
- **StaffMemberService**: This class implements business logic related to staff members, such as creating and managing products, processing orders, and viewing customer information.
- **ProductService**: This class implements business logic related to products, such as searching, adding, and updating product information.
- **OrderService**: This class implements business logic related to orders, such as placing, processing, and tracking orders.
- **DeliveryPlanService**: This class implements business logic related to delivery plans, such as calculating delivery costs and scheduling deliveries.
### Data Access Layer (Repositories)
- **UserRepository**: This interface defines methods for interacting with User data.
- **CustomerRepository**: This interface defines methods for interacting with Customer data.
- **StaffMemberRepository**: This interface defines methods for interacting with StaffMember data.
- **AddressRepository**: This interface defines methods for interacting with Address data.
- **CreditCardRepository**: This interface defines methods for interacting with CreditCard data.
- **ProductRepository**: This interface defines methods for interacting with Product data.
- **WarehouseRepository**: This interface defines methods for interacting with Warehouse data.
- **StockRepository**: This interface defines methods for interacting with Stock data.
- **OrderRepository**: This interface defines methods for interacting with Order data.
- **OrderItemRepository**: This interface defines methods for interacting with OrderItem data.
- **DeliveryPlanRepository**: This interface defines methods for interacting with DeliveryPlan data.
- **SupplierRepository**: This interface defines methods for interacting with Supplier data.
- **SupplierItemRepository**: This interface defines methods for interacting with SupplierItem data.
### Entities
- **User**: This class represents a user, either a customer or a staff member.
- **Customer**: This class inherits from `User` and contain customer-specific information, such as addresses, credit cards, and balance.
- **StaffMember**: This class inherits from `User` and contain staff member-specific information, such as salary and job title.
- **Address**: This class represents an address, either for delivery or payment.
- **CreditCard**: This class represents a credit card associated with a customer.
- **Product**: This class represent a product in the store.
- **Warehouse**: This class represents a warehouse where products are stored.
- **Stock**: This class represents the quantity of a specific product in a specific warehouse.
- **Order**: This class represents an order placed by a customer.
- **OrderItem**: This class represents an item in a specific order.
- **DeliveryPlan**: This class represents the delivery details for an order.
- **Supplier**: This class represents a supplier of products.
- **SupplierItem**: This class represents a product offered by a specific supplier, including the supplier's price for that product.