---
title: "After the Artifact"
excerpt: "When AI commoditizes the outputs that once underpinned technical credibility, the basis of influence without authority shifts in ways that most organizations haven't fully reckoned with."
topic: "lead"
date: "2026-04-07"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
---

It's a sprint planning session, early 2026. Before the meeting started, someone ran the feature spec through an agentic AI system that drafted a technical design document: system boundaries, data flow, API contracts, a rough implementation plan. It took minutes. It appears, by most measures, correct.

Everyone reads it on the shared screen. Most of the room nods along.

The principal engineer sitting near the back looks quizzical.

They haven't said anything yet. They don't have a competing document. They don't have a line of code to point to. What they have is a feeling: a quiet unease about the way the design buries a coupling that may become a problem in six months, when the team that owns the downstream service migrates to a new schema that nobody in this room is tracking. They know this because they were in a different meeting three weeks ago, and they remembered it.

This is what technical influence looks like now: not a pull request, not a brilliant technical design, but a question and a memory.

---

For most of the history of software engineering, technical credibility and technical output were tightly coupled. The engineer who could produce better code, faster, in harder domains, earned the standing to say "no, not like that." Influence without formal authority ran on demonstrated mastery. The principal engineer's leverage was earned through the artifacts of expertise: the difficult problem solved, the codebase deeply understood, the architecture that held together under pressure.

That coupling is loosening.

The [2025 DORA State of AI-Assisted Software Development report](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report) found that 95% of developers now use AI tools, with more than 80% reporting productivity gains. Code is being written faster than at any point in history. Agentic systems (which can now reason across multi-step workflows, invoke tools, interpret results, and iterate) are beginning to take on [entire segments of the software development lifecycle](https://www.cio.com/article/4134741/how-agentic-ai-will-reshape-engineering-workflows-in-2026.html): planning, implementation, test generation, risk surfacing, etc. The artifact, the thing you build to prove you can build it, is becoming cheap.

Which raises an uncomfortable question: when the outputs that once underwrote technical credibility become widely accessible, what does influence without authority actually run on?

---

There's a useful way to think about tools and attention: when tools work well, they disappear. You don't think about the hammer while you're hanging a picture; you think about where the nail should go. The hammer becomes absorbed into your intention, invisible in use. It only becomes an object of attention when it breaks or resists: the handle splits, the nail bends, the code generator produces something confidently wrong.

This is what AI code generation is becoming in most engineering organizations: [ready-to-hand](https://en.wikipedia.org/wiki/Heideggerian_terminology#Ready-to-hand). The act of writing code is ceasing to be a site of focused attention and becoming infrastructure, like the text editor or the compiler. You don't notice it until it fails.

There's something quietly significant in this. When a tool is ready-to-hand, you stop developing expertise _in the tool itself_. The generation that grew up using automatic spell-checkers writes more but proofreads less carefully. The engineer who reaches for AI code generation as a default reflex may never build the low-level intuition that comes from wrestling with the problem directly: the feel for why a particular abstraction is leaky, the memory of the time you made the same mistake in a slightly different context and it cost weeks of debugging.

The principal engineer in the back of the meeting has that intuition. They built it in the era when tools were [present-at-hand](https://en.wikipedia.org/wiki/Heideggerian_terminology#Present-at-hand); when they had to pay attention to the code because no tool would generate it for them. The question is whether organizations are creating conditions where the next generation of technical leaders can build equivalent judgment, even when the artifact-generating work is increasingly automated.

The breakdown moments (when the AI produces plausible nonsense, when the generated architecture is locally coherent but globally wrong) are the moments that reveal who actually understands the system. But you have to be watching for them, and someone has to have the standing to say "this is one of those moments."

---

There's a second dimension to influence that AI doesn't touch, and it has nothing to do with technical depth.

Is there something irreducible about genuine human encounter? Can you fully systematize what happens when you engage with another person? The immediate, unmediated demand that another person's presence makes on you may resist automation in ways that feel fundamental.

Influence without authority is, at its root, a relational act. You are not compelling anyone. You have no formal power over the decision. What you have is the ability to reach someone: to read what they're actually worried about (which is usually different from what they're saying), to find the argument that lands for _them specifically_, to know when to press and when to let an idea rest and come back to it from a different angle.

This is the work that happens in the margins of the meeting, not in the artifact. The technical leader who pulls a skeptical colleague aside afterward and says, quietly, "I know why you're hesitating, and I think you're right about the part that worries you, but wrong about this other part": that person is doing something that requires genuine encounter. It requires having paid enough attention to know what the other person sees, what they fear, what they're optimizing for when the stated priorities aren't the real ones.

Brainstorming tools and AI thinking partners can help you pressure-test your arguments before you enter the room. They can surface the questions your proposal hasn't answered. They may not be able to tell you which of those gaps matters most to the specific person across the table, or how to acknowledge a legitimate concern in a way that doesn't feel like dismissal.

That encounter, meeting someone where they actually are, is not scalable, not automatable, not legible to a dashboard. It is also, increasingly, the thing that determines whether the right decision gets made.

---

There's a structural risk emerging in organizations that don't think carefully about this.

AI is making engineering output more legible than it has ever been. Velocity metrics, deployment frequency, AI-assisted throughput; these quantify what was previously hard to measure. This is mostly useful. But it has a shadow: the harder it becomes to articulate the value of judgment work, the more pressure there is to stop doing it.

The principal engineer who redirects a disastrous architectural decision in a whiteboard session contributes nothing to the sprint metrics. The technical leader who recognizes that a team is about to make a choice that will calcify a bad assumption shows up nowhere in the throughput charts. The person who simply _remembers the right things_ and makes them available at the right moment; their work is invisible until the counterfactual plays out.

The risk is that as AI makes the producing side of engineering faster and more visible, organizations inadvertently devalue the reading side: the accumulated understanding of why things are the way they are, who made which decisions under what pressures, and which coupling looks innocuous on the diagram but may bite you in six months.

---

So what does technical credibility actually look like when AI can generate code?

I think it becomes something closer to epistemology: the ability to know what you know, what you don't know, and when to trust the tool.

This is subtler than it sounds. When the AI code generator produces a perfectly formatted, internally consistent, confidently stated answer, the harder skill is knowing whether that confidence should propagate to you and your team. It requires knowing enough about the domain to recognize the shape of plausible nonsense: output that is technically correct at the sentence level but wrong at the system level. And it requires having the standing to name that, which in turn requires having been right before in ways people remember.

The principal engineer in the sprint planning meeting isn't valuable because they can write code faster or produce better documents. They're valuable because when they say "I think there's something wrong here," their colleagues believe them enough to slow down and look. That belief is not manufactured by a credential or a title. It's accumulated through a history of demonstrated judgment, which is itself built, in part, through the kind of direct engagement with hard problems that you don't get if you always have a tool to do the hard part for you.

This creates a tension that the next generation of technical leaders may have to navigate consciously: how do you build judgment when the judgment-building friction has been engineered away? The answer isn't to reject the tools; the productivity gains are real, and the competitive pressure is not going away. The answer might be to treat deliberate friction as a professional development choice: the choice to sometimes write it yourself, not because the AI couldn't, but because you need to know what it feels like when it goes wrong.

---

It's worth sitting with a question that I don't think has a clean answer yet: does this shift change who should be hired as a technical leader?

The signals that organizations have traditionally used (LeetCode performance, GitHub activity, system design interviews) are proxies for the thing they actually want, which is judgment under uncertainty combined with the ability to bring others along. Those proxies were always imperfect, but at least they correlated with some of the right stuff.

In a world where AI can produce the artifact, the proxies are under more pressure. Someone can produce an impressive technical design with AI assistance without having the deep engagement with the domain that used to be the prerequisite. This may make it harder to distinguish genuine technical leadership from well-orchestrated technical theater.

Perhaps the signal worth looking for is different: not "what did this person build" but "what did this person stop from being built." Not "how fast can they produce" but "what do they notice that no one else does." Not "can they write the code" but "can they read the system", including the human parts of it.

The principal engineer at the back of the room doesn't add to the artifact. They're spotting the problems that confidence obscures. Whether that shows up on the OKR depends entirely on the organization paying close enough attention to notice.

That seems, for now, like a job worth keeping.
