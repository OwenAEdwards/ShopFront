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
3. **Displaying Data**: We need to obtain the data using Apollo client to handle HTTP requests and responses and GraphQL to specify the received data.
4. **Bonus (but we should really do this)**: Make mobile responsive using Tailwind or Bootstrap.
5. **Bonus**: Implement user authentication (verify identity) and authorization (determine privileges) around the backend logic.

## III. Deployment Options

1. **Preferable Option**: Host it on our own server; limitations: the headache of setting it up.
2. **Free Hosting Platform**: i.e. heroku (1000 hours/month runtime), firebase (360 mb/day); limitations: runtime.
3. **Cloud Services, Free-Tier**: digitalocean ($100 credit, 6 months), GCP ($300 credit), Azure ($200 credit).
    - Be aware of hidden costs (e.g., domain registration, SSL certificates).

## IV. Testing

We should do integration testing for the frontend.

## V. Best practices

- Use Version Control. Have descriptive commit messages.
- Programming Paradigms:
    - OOP for Java because of separation of concern.
    - Functional programming for React.js because of compatibility with React Hooks.
- Code comments and variable naming (and we need to be consistent!):
    - Comment all classes with a paragraph.
    - Comment all methods with a sentence.
    - Data member names and method names should be as descriptive as possible (longer == better).
- Documentation: Should probably document APIs in a MD file or something.

## VI. Entity-Relationship (ER) Diagram

![ER-diagram](./ER-model/ER-diagram%20model.png)

## VII. Backend Files
### API/Presentation Layer (Controllers)
- **CustomerController:** This controller handles customer-related API requests: adding/managing addresses, credit cards, and orders.
- **StaffMemberController:** This controller handles staff member-related API requests: creating/managing products, processing orders, viewing customer information. *Likely redundant and needing removed.*
- **ProductController:** This controller handles product-related API requests: searching, adding, and updating product information.
- **OrderController:** This controller handles order-related API requests: placing, processing, and tracking orders.
- **DeliveryPlanController:** If delivery logic is complex and warrants separate management, this controller handles delivery plan related actions: calculating costs and scheduling deliveries.
### Business Logic/Application Layer (Services)
- **CustomerService**: This class implements business logic related to customers, such as adding and managing addresses, credit cards, and orders.
- **StaffMemberService**: This class implements business logic related to staff members, such as creating and managing products, processing orders, and viewing customer information.
- **ProductService**: This class implements business logic related to products, such as searching, adding, and updating product information.
- **OrderService**: This class implements business logic related to orders, such as placing, processing, and tracking orders.
- **DeliveryPlanService**: This class implements business logic related to delivery plans, such as calculating delivery costs and scheduling deliveries.
### Data Access Layer (Repositories)
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
- **Customer**: This class contains customer-specific information, such as customer ID, name, addresses, credit cards, and balance.
- **StaffMember**: This class contains staff member-specific information, such as staff member ID, name, addresses, salary and job title.
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

## VIII. Frontend Files
### Customer User Web Pages
- **Feature:** Search store for products and look up information about specific products.
    - **Implementation:** Click "more info" on a specific product listing.
    - **CRUD:** Read-only.
- **Feature:** Set up an account.
    - **Implementation:** Account registration page.
    - **CRUD:** Create-only. NOTE: should have two buttons, "Sign-in" and "Create account".
- **Feature:** Change preferences and account details.
    - **Implementation:** Change address(es), add addresses, change credit card info, add credit cards, etc.
    - **CRUD:** Update-only.
- **Feature:** Make payments.
    - **Implementation:** Payment info screen i.e. adding credit card info OR use preexisting credit card info. Question: How does a customer's "balance" tie into this? Maybe they can use a pre-existing balance OR use a credit card?
    - **CRUD:** Delete-only.
### Staff Member User Web Pages
- **Feature:** Modify products.
    - **Implementation:** Allow staff members to "search the store for products" just like customers can. NOTE: Reuse query functionality code here. BUT, staff members can ONLY modify the product information such as cost, name of product, etc.
    - **CRUD:** Update-only (implies read functionality too, that's up to us).
- **Feature:** Create products.
    - **Implementation:** Creating products will take you to a screen where you can fill out product information such as cost, name of product, etc.
    - **CRUD:** Create-only.
- **Feature:** Update the availability of product in stock.
    - **Implementation:** DESIGN DECISION: This could be part of the "modify/update products" page. BUT, we'd have to merge in the "Stock" SQL table as being part of the "Product" SQL table. Otherwise, if the tables are separate, the pages should be separate. Should only modify "quantity" column on "Stock" SQL table. NOTE: Reuse query functionality code here.
    - **CRUD:** Update-only (implies read functionality too, that's up to us). Maybe delete too.
- **Feature:** Query customer information.
    - **Implementation:** This should be a separate page. Should be pretty easy to implement, just allow querying customer information.
    - **CRUD:** Read-only.
- **Feature:** Process orders.
    - **Implementation:** Confirm any orders that the customers make.
    - **CRUD:** Read-only.