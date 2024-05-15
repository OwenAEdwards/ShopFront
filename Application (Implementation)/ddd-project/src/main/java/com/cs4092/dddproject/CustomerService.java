package com.cs4092.dddproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    private final AddressRepository addressRepository;
    private final CreditCardRepository creditCardRepository;
    private final CustomerRepository customerRepository;
    private final OrderRepository orderRepository;

    // Dependency injection
    @Autowired
    public CustomerService(AddressRepository addressRepository,
                           CreditCardRepository creditCardRepository,
                           CustomerRepository customerRepository,
                           OrderRepository orderRepository) {
        this.addressRepository = addressRepository;
        this.creditCardRepository = creditCardRepository;
        this.customerRepository = customerRepository;
        this.orderRepository = orderRepository;
    }

    // Add a new customer
    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    // Add a new address for a customer
    public void addAddress(Customer customer, Address address) {
        customer.getAddresses().add(address); // Add to the list in Customer
        address.setCustomer(customer); // Referencing address back to its customer
        customerRepository.save(customer); // JPA cascades the save operation
    }

    // Update an existing address
    public void updateAddress(Customer customer, Address updatedAddress) {
        // Find the address to update within the customer's list
        Long addressIdToUpdate = updatedAddress.getAddressId(); // Assuming addressId is the identifier
        Address addressToUpdate = customer.getAddresses().stream()
                .filter(address -> address.getAddressId().equals(addressIdToUpdate))
                .findFirst()
                .orElse(null);

        if (addressToUpdate != null) {
            // Update the address details (excluding addressId)
            addressToUpdate.setAddressType(updatedAddress.getAddressType());
            addressToUpdate.setStreetAddress(updatedAddress.getStreetAddress());
            addressToUpdate.setCity(updatedAddress.getCity());
            addressToUpdate.setState(updatedAddress.getState());
            addressToUpdate.setZipCode(updatedAddress.getZipCode());

            // Save the updated customer object (assuming cascading save is not configured)
            customerRepository.save(customer);
        } else {
            // Handle the case where the address to update is not found
            // You might throw an exception or log an error message
            throw new IllegalArgumentException("Address with ID: " + addressIdToUpdate + " not found for customer.");
        }
    }

    // Remove address for a customer
    public void removeAddress(Long customerId, Long addressId) {
        Customer customer = customerRepository.findById(customerId).get();
        customer.getAddresses().removeIf(a -> a.getAddressId().equals(addressId));
        addressRepository.deleteById(addressId);
    }


    // Add a new credit card for a customer
    public void addCreditCard(Customer customer, CreditCard creditCard) {
        customer.getCreditCards().add(creditCard); // Add to the list in Customer
        creditCard.setCustomer(customer); // Referencing creditCard back to its customer
        customerRepository.save(customer); // JPA cascades the save operation
    }

    // Modify existing credit card for a customer
    public CreditCard updateCreditCard(Customer customer, CreditCard updatedCreditCard) {

        // Validate customer existence (optional)
        if (customer == null || customer.getCustomerId() == null) {
            throw new IllegalArgumentException("Customer information is missing.");
        }

        // Find the existing card based on cardId within the customer (assuming association)
        CreditCard existingCard = customer.getCreditCards().stream()
                .filter(card -> card.getCardId().equals(updatedCreditCard.getCardId()))
                .findFirst()
                .orElse(null);

        if (existingCard == null) {
            throw new IllegalArgumentException("Card with ID: " + updatedCreditCard.getCardId() + " not found for customer.");
        }

        // Update the existing card details
        existingCard.setCardNumber(updatedCreditCard.getCardNumber() != null ? updatedCreditCard.getCardNumber() : existingCard.getCardNumber()); // Assuming card number updates are allowed
        existingCard.setExpirationDate(updatedCreditCard.getExpirationDate() != null ? updatedCreditCard.getExpirationDate() : existingCard.getExpirationDate());
        // Update other relevant fields as needed (CVV update might require additional logic)

        // Save the updated customer object (assuming cascading save for credit cards)
        customerRepository.save(customer);

        return existingCard;
    }


    // Remove credit card for a customer
    public void removeCreditCard(Long customerId, Long cardId) {
        Customer customer = customerRepository.findById(customerId).get();
        customer.getCreditCards().removeIf(c -> c.getCardId().equals(cardId));
        creditCardRepository.deleteById(cardId);
    }

    // Place a new order for a customer
    public Order placeOrder(Customer customer, Order order) {
        // Set the customer for the order
        order.setCustomer(customer);

        // (Optional) Additional logic before saving the order, e.g., validating order items, processing payment

        // Save the order
        orderRepository.save(order);
        return order;
    }

    // Find a customer by ID
    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }
}
