---
title: "Running a Successful Post-Incident Review (PIR)"
excerpt: "Run effective and blameless Post-Incident Reviews (PIRs) with this structured approach using the PODS framework. This guide helps teams identify root causes, align on a shared timeline, and develop actionable solutions to prevent recurrence. By fostering a culture of transparency and collaboration, teams can turn incidents into learning opportunities, improve system reliability, and drive continuous improvement."
topic: "management"
date: "2023-12-16"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
---

## Introduction

Post-Incident Reviews (**PIR**) are essential to understanding the root causes of incidents, ensuring continuous improvement, and preventing recurrence. A well-structured **PIR** enables teams to align on expectations, identify gaps, and develop actionable solutions in a blameless and constructive manner.

---

## Template

![Miro Template](/assets/blog/running-a-successful-pir/miro-template.png "Miro Template")

## **PIR** Agenda

This agenda is structured using the PODS framework (Purpose, Outcome, Decisions, Structure).

**Purpose:** Determine root cause(s) and develop an action plan to reduce the likelihood of recurrence.

**Outcomes:**

- Shared understanding of expectation vs. reality.
- A common view of the incident timeline.
- Identified root cause(s).
- Selected solution options.
- Assigned ownership for implementing solutions.

**Decisions:**

- Does anything need to be done?
- Should we schedule a follow-up session to revisit actions?

### Structure

1. **Introduction to the Ceremony (1 min)**
   Set the tone, reinforce blameless culture, and outline the session’s purpose.

2. **Explain the Expectation (2 min)**
   Review what was expected to happen (normal operation, expected behavior, or standard procedure).

3. **Explain the Reality (2 min)**
   Describe what actually happened and how it deviated from expectations.

4. **Explain the Timeline as Understood (5 min)**
   Document the incident timeline, capturing key events and actions taken.

5. **Discuss Inconsistencies in Timeline (10 min)**
   Identify gaps, missing information, and discrepancies.

6. **Root Cause Analysis - 5 Whys (15 min)**
   Use the "5 Whys" technique to trace the root cause(s) of the incident.

7. **Solution Option Reverse Brainstorming (10 min)**
   Instead of directly proposing solutions, brainstorm ways to make the problem worse. This technique helps identify overlooked factors and creative solutions.

8. **Prioritization of Solution Options by Impact/Effort (5 min)**
   Rank proposed solutions based on their effectiveness and feasibility.

9. **Actions (5 min)**
   Assign action items with clear ownership and deadlines.

---

## Best Practices for Post-Incident Reviews

### Establish a Blameless Culture

Encourage transparency by allowing individuals to share their experiences without fear of blame or punishment. This fosters trust and ensures comprehensive insights.

### Avoid Pointing Fingers

Focus on actions, results, and impact rather than assigning personal responsibility. Use neutral language that promotes learning rather than fault-finding.

### Keep Critique Constructive

While maintaining a safe discussion space, ensure that critical issues are not avoided. Encourage the team to dig deep using the "5 Whys" methodology to uncover contributing factors.

### Review Every **PIR**

A **PIR** without follow-up is ineffective. Schedule regular reviews with relevant teams (engineering, customer support, operations) to discuss lessons learned and ensure actions are implemented.

---

## Root Cause Analysis: The 5 Whys

The "5 Whys" is a simple but effective technique for identifying root causes:

1. Ask "Why?" regarding the incident.
2. For each answer, ask "Why?" again.
3. Continue this process at least five times until reaching the fundamental cause.

Example:

1. **Why** did the system go down? → A critical service crashed.
2. **Why** did the service crash? → It ran out of memory.
3. **Why** did it run out of memory? → A background process consumed excessive RAM.
4. **Why** did the process consume so much RAM? → A memory leak in recent code deployment.
5. **Why** did the leak occur? → Insufficient testing for memory consumption before release.

The final "Why" identifies the root cause, which can then be addressed effectively.

---

## Solution Generation: Reverse Brainstorming

Instead of directly brainstorming solutions, reverse brainstorming flips the approach:

- **Step 1:** Ask, "How could we make this problem worse?"
- **Step 2:** List ideas that would exacerbate the issue.
- **Step 3:** Reverse these ideas into potential solutions.

Example:

- How could we make system failures more frequent? → Deploy untested code, ignore monitoring alerts, reduce redundancy.
- Reversing these: Implement better testing, improve alert response, increase system redundancy.

This technique ensures that teams explore creative and overlooked solutions.

---

## Conclusion

A structured **PIR** process enhances learning, improves system reliability, and fosters a culture of accountability without blame. By using the "5 Whys" technique, and reverse brainstorming for solutions, teams can ensure effective incident resolution and long-term improvements.
