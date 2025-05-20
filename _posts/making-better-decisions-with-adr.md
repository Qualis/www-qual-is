---

title: "Making Better Decisions with ADR: Structure, Speed, and Clarity"
excerpt: "Use Architecture Decision Records (ADR) to navigate solution options and drive confident decisions. This guide provides a structured approach for documenting, evaluating, and sharing decisions across your organisation; boosting traceability, clarity, and alignment."
topic: "management"
date: "2025-05-10"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
---------------------------------------

For some time now I have been refining a structured approach for decision-making that helps teams move faster, stay aligned, and reduce decision fatigue. Whether you're experimenting in a lean start-up or steering an established engineering organisation, this **ADR-driven approach** provides a systematic way to explore, evaluate, and record solution options.

## What is an Architecture Decision Record (ADR)?

An **Architecture Decision Record (ADR)** is a lightweight, structured document used to capture key decisions around people, processes, data, and technology. It formalises the *why*, *what*, and *how* behind decisions, giving teams a traceable reference point and aligning stakeholders on the journey forward.

This approach is partially explored in [Organise Your Teams for Combined Health, Happiness, and Success](https://www.qual.is/posts/organisation-template), and focuses on a decision making process that supports long-term organisational health.

For tooling, I personally use [adr-tools](https://github.com/npryce/adr-tools) and store the **ADR** in a [GitHub repository](https://github.com/), utilizing version control to unlock benefits like traceability, collaboration, and automation ([version control](https://www.atlassian.com/git/tutorials/what-is-version-control)).

---

## Why Use ADR for Decision-Making?

By using **ADR**, you:

* Create a repeatable framework for capturing and communicating decisions.
* Reduce bias by applying equal attention (or surfacing when it isn't) to all considered options.
* Make decisions transparent and traceable across teams and time.

A note here is that good decision-making isn't about finding the right answer; it's about selecting an option that most likely delivers the desired outcome without precluding your best future.

These explorations should be time-boxed; the goal is not to gold-plate or endlessly analyse, but to gather just enough evidence to make a confident, informed decision. Often, you learn more by doing than by reading, and structured spikes or small experiments can provide the clearest insights. Remember: speed matters, and progress beats perfection when learning is the goal (["Perfect is the enemy of good"](https://en.wikipedia.org/wiki/Perfect_is_the_enemy_of_good)).

---

## How to Structure Your ADR

To improve the rigour and clarity of each **ADR**, I recommend the following structured sections:

### Status

The **Status** field tracks the life-cycle of the decision. It answers **where the decision stands today** so readers can interpret the document appropriately.

Typical values include:

* **Proposed** - A draft decision that is open for review and discussion.
* **Accepted** - A decision that has been agreed upon and is ready to implement.
* **Deprecated** - A decision that is no longer valid, often because it was replaced by a newer **ADR**.

**Why it matters:**

* Provides clarity on whether the **ADR** represents a live, actionable agreement.
* Helps teams avoid confusion when revisiting old decisions.
* Supports governance by giving visibility into the evolution of architectural thinking.
* Ensures that decisions can be confidently referenced (or questioned) in the future.

### Context

#### Problem Statement

Clearly frame the problem using these three parts:

* **Ideal**: What's the desired situation or outcome?
* **Reality**: What's the current situation, and how does it differ from the ideal?
* **Consequences**: What risks or pains result from not moving from reality to ideal?

This framing keeps the focus on outcomes, not just technology.

#### Roles

Clarify who does what using a **[RAPID model](https://asana.com/resources/rapid-decision-making)** table:

```
| Role | Owner |
| -- | -- |
| Recommend | e.g., Head of Engineering |
| Agree | e.g., Product Manager, Chief Product Officer |
| Perform | e.g., Engineering Manager |
| Input | e.g., Engineers, Designers |
| Decide | e.g., Chief Technology Officer |
```

Explicitly listing these roles avoids confusion and speeds up execution.

#### Options

Use **3–5 options** to catalyse creative thinking, and always include **Option 1: Do Nothing**.

For each:

* **Description**
* **Pros** (`+` bullets)
* **Cons** (`-` bullets)

Ensure each option is explored with roughly equal detail to challenge assumptions and bias.

### Decision

The **Decision** section captures which option (or options) has been chosen to try, and why. It should describe the rationale behind the choice, connecting back to the context and desired outcomes.

**What to include:**

* **Chosen Option** - Explicitly name the selected option.
* **Why This Option** - Summarise why this option was selected over others.

**Why it matters:**

- Provides clarity on what the team is committing to.
- Helps future readers understand the thinking and trade-offs behind the choice.
- Acts as a single source of truth, preventing conflicting interpretations or undocumented pivots later.

### Consequences

The **Consequences** section outlines the impact and follow-on effects of making the selected decision. It should highlight what will change, what actions or work will be required, and any broader implications that arise from moving forward with the chosen option.

**What to include:**

* **What Changes** - Describe what will need to change or be done as a result of the decision.
* **Expected Effort** - Highlight any additional work, resources, or processes required.
* **Longer-Term Implications** - Note any downstream impacts, such as new risks, dependencies, or opportunities.

**Why it matters:**

* Makes clear the cost and impact of the decision.
* Helps teams plan implementation steps and allocate resources effectively.
* Surfaces potential challenges early to support proactive management.

---

## Example: ADR for Improving Decision Processes

Here's an example **ADR** using this structure.

```
# 1. We Want to Be Making Good Decisions

Date: 2022-04-26

## Status

Proposed

## Context

### Problem Statement

#### Ideal

We have traceability and can share across the organisation the decisions being made on how we leverage people, processes, data, and technology to meet our business objectives.

#### Reality

We do not currently have this and lack the data to make informed decisions, causing entropy and inefficiency in our delivery.

#### Consequences

* Decisions made without the appropriate input and/or agreement
* Recommendations made by inappropriate stakeholders
* Decisions made by inappropriate stakeholders
* Implementation being performed by inappropriate individual contributors
* Decisions made without broad visibility

### Roles

| Role | Owner |
| -- | -- |
| Recommend | Head of Engineering |
| Agree | Product Manager, Chief Product Officer |
| Perform | Engineering Manager |
| Input | Engineering Manager, Product Manager, Engineers |
| Decide | Chief Technology Officer |

---

## Options

### Option 1: Do Nothing

Continue current practices without introducing any formal mechanism for recording or sharing decisions.

##### +

* No short-term effort required
* No change management effort

##### -

* Continues the documented consequences above: lack of traceability, poor alignment, inefficiencies

### Option 2: Document in a Wiki

Use an internal wiki (e.g., Confluence, Notion) to record decisions, leveraging the platform's built-in editing, search, and notification features.

##### +

* Ubiquitous mechanisms to create, read, update, delete, and search
* Built-in mechanisms to communicate changes and updates

##### -

* Vendor lock-in risks
* General-purpose tool, not structured specifically for architectural decisions, may require additional discipline to maintain consistency

### Option 3: Use [Architecture Decision Records (ADR)](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)

Adopt a lightweight, structured, text-based decision recording framework using ADRs, supported by CLI tooling such as [adr-tools](https://github.com/npryce/adr-tools).

##### +

* Purpose-built format for architectural decisions
* Agnostic, portable, and avoids vendor lock-in
* Machine-readable, allowing for automated summary reporting

##### -

* Requires initial training to onboard contributors
* Needs integration or additional mechanisms to communicate changes

### Option 4: Use a Decision Management Platform

Adopt a purpose-built decision management SaaS tool (e.g., Loomio, Decision.io, or similar) that offers structured workflows, stakeholder engagement, voting, versioning, and traceability.

##### +

* Purpose-built for decision capture, collaboration, and accountability
* Built-in notifications, versioning, and stakeholder workflows
* Provides analytics and reports on decision trends over time

##### -

* Additional cost
* Possible vendor lock-in
* May introduce overhead or complexity depending on platform features

---

## Decision

Option 3: Use [Architecture Decision Records](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)

We will take a systematic and fit-for-purpose approach to guide and record decisions on how we leverage people, processes, data, and technology to meet our business objectives. We will use [adr-tools](https://github.com/npryce/adr-tools) to record decisions within this repository.

To help guide the process, we will use additional structure in the 'Context' section of the ADR:

* A clear problem statement describing the issue
* A [RAPID Model](https://www.bain.com/insights/rapid-tool-to-clarify-decision-accountability/) role table to clarify who does what in the decision-making process
* Clear documentation of the options considered

---

## Consequences

* Additional effort to maintain a decision register
* We may need to consider forking the [adr-tools](https://github.com/npryce/adr-tools) to add the desired additional structure to the 'Context' section
* We will need to establish a central repository of decisions for sharing across the organisation
```

---

## Benefits of This Approach

### Standardisation Without Rigidity

**ADR** provide structured defaults while remaining flexible for different teams and contexts.

### Clarity in Roles & Decisions

Using RAPID clarifies who **r**ecommends, **a**grees, **p**erforms, **i**nputs, and **d**ecides; reducing errors, bottlenecks and misinterpretations.

### Catalysing Creative Options

Forcing 3–5 well-considered options, including **Do Nothing**, encourages lateral thinking and challenges biases.

### Machine-Readable Records

With **ADR** stored in source control, you can automate summaries, track changes, and integrate decisions into broader governance processes.

---

## Getting Started

1. **Install adr-tools**: [adr-tools](https://github.com/npryce/adr-tools)
2. **Create a repository**: Use [GitHub](https://github.com/) or another Version Control System (**VCS**).
3. **Create your first ADR**: Use the structured sections described above.
4. **Share & review**: Bring your team into the process and iterate together.

---

## Conclusion

Using **ADR** transforms decision-making from an informal or opaque process into a clear, structured, and shareable practice. By combining thoughtful context, clear roles, and well-documented options, you empower your teams to move confidently; knowing that decisions are informed, aligned, and adaptable.

To explore related practices for scaling organisational health, check out [Organise Your Teams for Combined Health, Happiness, and Success](organisation-template).
