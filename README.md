# Performance Testing for Swagger Petstore API

This repository contains performance testing scripts for the **Swagger Petstore API**, designed to evaluate the API's scalability, response times, and reliability under different load conditions. The tests were implemented using **k6**, a modern and efficient performance testing tool.

---

## **Technologies Used**
- **k6**: For scripting and running performance tests.
- **JavaScript**: For writing k6 test scripts.
- **Swagger Petstore API**: The API under test.

---

## **Prerequisites**
1. Install **k6** on your system. Follow the official [k6 installation guide](https://k6.io/docs/get-started/installation/) for your operating system.
2. Ensure the Swagger Petstore API is accessible, running locally or on a specified server.

---

## **Setup and Execution**

1. Clone the repository from GitHub and navigate to the directory containing the test scripts.

2. Run the desired k6 test script. For example:
   ```bash
   k6 run <script-name>.js
