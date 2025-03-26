---
title: "Measuring Individual Contributor Performance with Accelerate Metrics"
excerpt: "Adopt a structured, data-driven approach to evaluating software engineer performance using the Accelerate Metrics. Capture meaningful insights to foster transparent and effective performance conversations."
topic: "management"
date: "2023-04-21"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
---

Effectively measuring individual contributor (IC) performance can be challenging. Traditional methods often miss nuances in productivity, value delivery, and quality, or become overly subjective ("vibe-driven"). Adopting the [Accelerate Metrics](https://linearb.io/blog/accelerate-metrics) provides a structured, transparent, and extensible approach suitable for engineering roles, but could also be applicable more broadly.

---

## Accelerate Metrics for IC Performance

The Accelerate Metrics:

- **Lead Time for Changes**
- **Deployment Frequency**
- **Mean Time to Restore**
- **Change Failure Rate**

### Lead Time for Changes

**Definition:** Measures the time it takes an individual to complete a defined piece of work.

**Measurement Approach:**

- Use [**Story Points**](https://www.atlassian.com/agile/project-management/estimation) to estimate effort.
- Apply a multiplier based on the individual's seniority to maintain fair comparisons.

**Why It Matters:**

- Identifies trends in individual productivity.
- Ensures fair assessment by factoring in experience and complexity.

### Deployment Frequency

**Definition:** Measures how soon an individual's completed work delivers tangible value to the intended persona.

**Measurement Approach:**

- Track release dates against [user stories](https://www.atlassian.com/agile/project-management/user-stories).
- Use the duration between story completion and release to identify system smells.

**Why It Matters:**

- Highlights true value delivery versus just task completion.
- Detects potential issues in task fragmentation or gaming of metrics.

### Mean Time to Restore

**Definition:** The time required to resolve an incident/issue introduced by the individual's completed work.

**Measurement Approach:**

- Link each bug card directly to the story that introduced the issue.
- Capture the time taken to resolve the bug.

**Why It Matters:**

- Encourages proactive attention to quality.
- Reflects on the quality of an individual's work e.g. highlighting maintainability issues.

### Change Failure Rate

**Definition:** The frequency with which completed work results in incidents or bugs.

**Measurement Approach:**

- Link each bug card directly to the story that introduced the issue.
- Calculate as a ratio of stories delivered to bugs introduced.

**Why It Matters:**

- Provides insights into work stability and quality.
- Encourages practices that reduce future issues.

---

## Integrating Metrics into Performance Conversations

These metrics serve as quantitative input into structured Performance Conversations.

- Provides clear, data-informed suggestions for individual performance.
- Allow managers to override suggested ratings with contextual insights.
  - Capturing the reasoning may help identify e.g. systemic issues, such as prioritization mismatches or hidden high performers.

### Example Scenario

- Suggested performance is "average".
- Manager overrides with: "Performance suggestion was 'average', but this individual consistently handles critical, urgent issues that lack formal prioritization."
- The frequency and context of overrides can inform machine learning to proactively identify e.g. hidden high performers.

---

## Task Management Integration

Incorporate Accelerate Metrics seamlessly within existing task management workflows:

- **Stories:** Track Lead Time and Deployment Frequency.
- **Bugs:** Track Mean Time to Restore and Change Failure Rate.

---

## Why This Approach Works

- **Fairness & Transparency:** Adjustments for seniority and complexity ensure fair comparisons.
- **Value Orientation:** Differentiates clearly between task completion and delivered value.
- **Actionable Insights:** Quickly identifies individual and systemic opportunities for improvement.
- **Extensible Approach:** Adaptable beyond software engineer roles.

Adopting Accelerate Metrics brings clarity, consistency, and effectiveness to evaluating individual performance, driving growth and enhancing overall team effectiveness.
