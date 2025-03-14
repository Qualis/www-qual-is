---
title: "Using Intent Rather Than Domain in Your RESTful API"
excerpt: "Designing RESTful APIs around user intent rather than domain entities leads to a more intuitive and maintainable system. Instead of CRUD operations on a bill entity, an intent-based split-bill resource encapsulates the entire process. This approach improves UX, supports event-driven architectures, enhances traceability, and keeps business logic encapsulated, making APIs more effective and scalable."
coverImage: "/assets/blog/categories/engineering.png"
date: "2022-03-15"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
ogImage:
  url: "/assets/blog/categories/engineering.png"
---

A more effective alternative to designing your **RESTful** API around domain-specific **CRUD** operations is to structure it around **resources** that represent business processes or domain events. This approach ensures that your API models user intent rather than just exposing internal domain entities.

For example, instead of performing **CRUD** operations directly on a **bill** entity, you can introduce a **split-bill** resource that encapsulates the entire process of bill splitting. A **POST** request to this resource initiates the action of splitting a bill, capturing all necessary details within a single operation.

## Benefits of an Intent-Based API

1. **Encapsulation of Business Logic**: The **split-bill** resource abstracts internal domain details, preventing unnecessary exposure of domain entities to API consumers.
2. **Improved UX and Maintainability**: Intent-driven APIs align closely with user workflows, making them more intuitive and easier to maintain.
3. **Support for Event-Driven Architectures**: The **split-bill** resource can act as a command that triggers additional business processes, making it suitable for event-driven systems.
4. **Enhanced Traceability**: Intent-based endpoints can naturally serve as audit logs by capturing user actions in a structured way.
5. **Better Hypermedia Support**: The response can return related resources using standard mechanisms like the [Link Header](https://www.w3.org/wiki/LinkHeader), improving discoverability and navigation.

While it may not always be logical to support all **HTTP** methods for an intent-based route, nothing prevents additional operations if they are required.

---

# Example API Structure

## Resource

```
/split-bill
```

## Method

```
POST
```

## Request

### Headers

```
Content-Type: application/json
```

### Body

```json
{
  "bill-to-split": "/bill/53d88bdc-a37a-11ec-b909-0242ac120002",
  "user-to-split-with": "/user/C6943737-32D5-4CAB-B536-91D1B9540568",
  "user-to-split-with-pays-amount": 10000
}
```

## Response

### Status Code

```
201 Created
```

### Headers

```
Location: /split-bill/E26CC223-E96C-4B24-9AC4-727AE0FE1C94
Link: </bill/53d88bdc-a37a-11ec-b909-0242ac120002>; rel="bill"
Link: </email/356FF116-A362-11EC-B909-0242AC120002>; rel="email"
```

## Explanation

- **POST /split-bill**: Creates a new instance of the split-bill process.
- **Location header**: Returns the newly created resource identifier.
- **Link headers**: Provide references to related entities, such as the original bill and an associated email confirmation.

This approach streamlines API design by focusing on user interactions rather than domain structures, resulting in a cleaner and more maintainable architecture.
