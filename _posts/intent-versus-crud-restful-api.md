---
title: "Using the intent rather than the domain in your RESTful API"
excerpt: "An alternate approach to using domain CRUD operations in your RESTful API, is to develop it around a resource that reflects a business process or domain event."
coverImage: "/assets/blog/categories/engineering.png"
date: "2022-03-15"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
ogImage:
  url: "/assets/blog/categories/engineering.png"
---

## Using the intent rather than the domain in your RESTful API

An alternate approach to using domain **CRUD** operations in your **RESTful** API, is to develop it around a **resource** that reflects a business process or domain event. For example, to split a bill we can **POST** a request to a **split-bill** resource. This resource can capture all the information for “splitting” a bill.

The **split-bill** resource created as part of the **POST** request can have an identifier to support future e.g. **GET** requests. Additionally, you can return any created/updated resources as links for the **split-bill** resource using e.g. the [Link Header](https://www.w3.org/wiki/LinkHeader).

This approach can be useful in context of event-driven architectures, as the resource can map to a command. It is also useful as the resource logically reflects a user operation, and can be treated as an e.g. Audit Log. Another benefit is that a **POST** to a resource that reflects intent, avoids bleeding internal domain knowledge to callers.

It may not be logical to support all the **HTTP** methods for an intent based route, but nothing prevents it if required.

A potential **POST** request/response structure is detailed below:

### Resource

```
/split-bill
```

### Method

```
POST
```

### Request

#### Body

```
{
  "bill-to-split" : "/bill/53d88bdc-a37a-11ec-b909-0242ac120002",
  "user-to-split-with" : "/user/C6943737-32D5-4CAB-B536-91D1B9540568",
  "user-to-split-with-pays-amount" : 10000
}
```

### Response

#### Headers

```
Location: /split-bill/E26CC223-E96C-4B24-9AC4-727AE0FE1C94
Link: /bill/53d88bdc-a37a-11ec-b909-0242ac120002: rel=bill
Link: /email/356FF116-A362-11EC-B909-0242AC120002: rel=email
```
