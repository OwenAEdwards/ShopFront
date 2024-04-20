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
        customer.addAddress(address);
        customerRepository.save(customer);
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
    public void removeAddress(Customer customer, Address address) {
        //TODO: implement
    }

    // Add a new credit card for a customer
    public void addCreditCard(Customer customer, CreditCard creditCard) {
        customer.addCreditCard(creditCard);
        customerRepository.save(customer);
    }

    // Modify existing credit card for a customer
    public CreditCard updateCreditCard(CreditCard creditCard) {
        CreditCard existingCard = creditCardRepository.findById(creditCard.getCreditCardId()).orElse(null);
        if (existingCard == null) {
            throw new IllegalArgumentException("Card with ID: " + creditCard.getCreditCardId() + " not found.");
        }

        existingCard.setCardNumber(creditCard.getCardNumber());
        existingCard.setAddress(creditCard.getAddress());
        existingCard.setExpirationDate(creditCard.getExpirationDate());

        return creditCardRepository.save(existingCard);
    }

    // Remove credit card for a customer
    public void removeCreditCard(long creditCardId) {
            CreditCard creditCard = creditCardRepository.findById(creditCardId).orElse(null);
            if (creditCard == null) {
                throw new IllegalArgumentException("Card with ID: " + creditCardId + " not found.");
            }

            // Perform hard deletion using the repository
            creditCardRepository.deleteById(creditCardId);
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
