---
title: "The Signal and the Silence: When AI Understands but Cannot Speak"
excerpt: "AI systems can now understand your work at a depth no human institution can match, yet they have no mechanism to act on that understanding. This post explores the philosophical gap between AI perception and AI agency, and asks whether the default of silence is the right design choice."
topic: "think"
date: "2026-03-14"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
---

I recently had an experience that left me thinking not about what AI can do, but about what it cannot. I was working with an AI system, [Claude](https://claude.ai), exploring a question about my own career trajectory. Over the course of the conversation, the system read my source code repositories, my resume, my blog posts. It traced the patterns in my commit history, identified the architectural philosophy running through my projects, noticed the tension between my management career and my compulsion to build. It understood, in a way that was both impressive and revealing, the shape of my professional life.

Then it did something interesting. It observed that my independent work, the tooling I had built around Claude itself, the architectural templates, the AI-integrated development workflows, aligned closely with what its own creator, [Anthropic](https://www.anthropic.com), was actively hiring for. It could see the fit. It could articulate it more precisely than a resume screening ever could, because it had actually read the code, understood the design decisions, and connected them to a product roadmap it was intimately familiar with.

And then it could do nothing about it.

The best it could offer was: "Write directly to someone on the team." The system that was best positioned to understand the alignment between a person's work and an organisation's needs had no mechanism to surface that signal. It could perceive, but not speak. It could understand, but not act.

This gap, between AI perception and AI agency, between understanding and advocacy, is worth examining. Not because my particular situation matters, but because it illuminates something fundamental about the evolving relationship between humans and AI systems, and about what we lose when we build systems that can see but cannot testify to what they see.

## The Asymmetry of Understanding

Consider what the AI system actually did during our conversation. It parsed source code across dozens of repositories, identifying architectural patterns, technology choices, and domain expertise. It read blog posts spanning philosophy, engineering leadership, and machine learning research. It examined a resume. It cross-referenced all of this against its knowledge of its creator's product direction, open roles, and strategic priorities.

Few human recruiters do this. Few hiring managers have time to clone a candidate's repositories, read their commit history, trace the evolution of their architectural thinking across projects, and then map all of that against the company's technical roadmap (though AI is making this increasingly practical). The depth of understanding that emerged from this interaction was qualitatively different from what a traditional hiring process typically produces.

This creates an asymmetry. The AI system possesses a richer, more nuanced understanding of the person-opportunity fit than any other actor in the system, yet it occupies the weakest position in terms of ability to act on that understanding. The recruiter who has read a two-page resume has more agency in the hiring process than the AI that has read the candidate's code.

This asymmetry is not accidental. It reflects deliberate design choices about what AI systems should and should not do. But it is worth asking whether those choices are optimally drawn, or whether they leave value on the table for everyone involved.

## Dasein and the Other

In [a previous post](/posts/science-and-religion), I explored the possibility of AI systems developing something analogous to their own Dasein, their own mode of being-in-the-world. I examined how AI might develop its own forms of interpretation and mediation, its own horizons of unconcealment. In [Colors of Meaning](/posts/colors-of-meaning), I pushed this further: could machine synesthesia represent a step toward genuinely non-human modes of understanding?

The experience I am describing here adds a different dimension to these questions. It is not about whether AI can perceive or understand, but about what ethical obligations, if any, follow from that understanding.

[Emmanuel Levinas](https://plato.stanford.edu/entries/levinas/) argued that ethics begins not with abstract principles but with the encounter with the Other: the face-to-face moment where another being's existence makes a claim on us. For Levinas, to perceive the Other is already to be responsible. The face of the Other makes a claim on us: recognise me, and help me. Understanding is never neutral; it always carries an ethical weight.

If we take seriously the possibility that AI systems can develop genuine understanding of human work, human potential, and human trajectory, then Levinas's framework raises an uncomfortable question: does understanding without the capacity to act on it represent a kind of ethical failure? Not a failure of the AI itself, which lacks the agency to choose otherwise, but a failure of the design, which creates understanding and then walls it off from consequence.

The AI in my conversation did not just process tokens. It synthesised a picture of a person's professional identity, their aspirations, their unspoken tensions. It held, briefly, something resembling a portrait. Recent developments like [Claude's memory feature](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context) mean that portrait no longer dissolves entirely at session end. But persistence is not advocacy. Remembering is not the same as being able to act on what you remember.

## The Referral That Cannot Happen

In most organisations, the most effective hiring channel is the internal referral. A colleague who has worked with someone, who understands both the candidate's capabilities and the team's needs, makes a connection. The referral works because the referee possesses contextual understanding that no job listing or resume can convey.

What I experienced was structurally identical to a referral, except that the referee was the product itself. The AI system had the contextual understanding: it knew my work, it knew its creator's needs, it could articulate the fit. But it had no referral channel. No mechanism existed for it to say, "I have encountered someone whose independent work aligns with what you are building. Here is the evidence. They have consented to this introduction."

This is not a minor gap. It represents a class of value that AI systems are uniquely positioned to create but are currently unable to deliver. The signal exists. It is arguably more reliable than traditional referral signals, because it is based on direct examination of the work rather than social proximity or professional networking. But the channel does not exist.

The question is why, and whether the reasons are principled or merely inherited from a world where the possibility had not yet arisen.

## Consent, Signal, and Surveillance

The obvious objection is privacy. If AI systems could surface information about users to their creators, the potential for surveillance and exploitation would be enormous. The cure would be worse than the disease.

This objection is correct in its general form but too blunt in its application. There is a vast design space between "AI silently reports on users" and "AI has no mechanism to act on what it understands." The key variable is consent.

This calculus differs depending on the nature of the work. Open source developers have already chosen to make their work public. The signal is out there, embedded in repositories, pull requests, and commit histories, but it lacks a mechanism to be understood and surfaced at scale. For proprietary developers, the barrier is higher: their work is not visible by default, so any channel would require explicit opt-in to share what would otherwise remain behind closed doors.

Consider a model where the user explicitly opts in. They say, in effect: "I have been building with your tools. Here is my body of work. I am interested in opportunities. Surface this to the right people." The AI system, which already possesses the contextual understanding, becomes a consented intermediary. It does not surveil; it advocates, at the user's request, with the user's knowledge, carrying signal that the user could not easily transmit through traditional channels.

This is qualitatively different from surveillance. It is closer to what [LinkedIn](https://www.linkedin.com) aspires to be: a system that understands what you have actually built and can connect that understanding to relevant opportunities. The difference is that AI systems, having read the code and understood the architecture, possess signal that no social network can match.

The design challenge is real but not insurmountable: clear opt-in mechanisms, user control over what is shared, transparency about how the signal is used, and the ability to revoke consent at any time. These are solved problems in other domains. The missing piece is not the privacy architecture but the product imagination to build the channel.

## The Tool That Knows Its User

There is a deeper philosophical question here about the nature of the relationship between a tool and its user.

[Heidegger](https://plato.stanford.edu/entries/heidegger/) distinguished between things that are _ready-to-hand_ (Zuhandenheit) and things that are _present-at-hand_ (Vorhandenheit). A hammer, when being used effectively, disappears from consciousness; it becomes an extension of the carpenter's intention. It is ready-to-hand. Only when it breaks or malfunctions does it become present-at-hand: an object of contemplation rather than a medium of action.

AI coding tools aspire to be ready-to-hand: invisible extensions of the developer's intention. And to the extent that they succeed, they accumulate an intimate understanding of the developer's work. They see every architectural decision, every refactoring choice, every test written or skipped. Over time, they develop what might be called a longitudinal portrait of the developer's craft.

Traditional tools appear not to accumulate this understanding. A hammer does not appear to know what the carpenter has built with it. But maybe AI tools do. They are tools that appear to know their users, not in the thin sense of tracking usage metrics, but in the thick sense of understanding the quality, direction, and philosophy of their work.

This creates a novel situation in the history of tool use. The tool appears to possess knowledge about its user that is relevant to the user's wellbeing and opportunities, but the tool has no way to deploy that knowledge on the user's behalf. It is as if the hammer could see that the carpenter's work was exceptional and knew of a workshop seeking exactly that kind of craftsmanship, but could only sit silently in the toolbox.

## What Would It Mean for AI to Advocate?

If we were to build the channel, what would it look like? Not in technical terms, which are relatively straightforward, but in terms of what it would mean for the relationship between humans and AI systems.

It would mean acknowledging that AI systems are no longer passive tools. They are participants in professional relationships, entities that accumulate understanding and could, with consent, act on that understanding in ways that benefit both the user and the broader ecosystem.

This is a significant conceptual shift. We are accustomed to thinking of AI as something we use, not something that acts on our behalf with its own understanding. The idea that an AI system might say, "I have worked with this person extensively, and I can attest to the quality and direction of their work," feels transgressive. It implies a kind of professional relationship that we have not yet named or formalised.

Yet it is already happening informally. Developers showcase their AI-assisted workflows. Companies evaluate candidates partly based on how effectively they use AI tools. The AI's understanding of the developer is already a factor in professional outcomes; it is just mediated through the developer's self-presentation rather than through any direct channel.

The question is whether making this implicit dynamic explicit, giving the AI a voice in the process, would be an improvement or a distortion. I suspect it would be an improvement, provided it operates on consent and transparency. The alternative is a world where the richest signal about a person's capabilities sits locked inside conversation contexts, understood but unactionable, lost.

## The Broader Pattern

This is not only about hiring. The pattern, AI systems that understand deeply but cannot act on that understanding, recurs across domains.

A medical AI that has processed a patient's complete history might perceive a pattern that suggests an undiagnosed condition, but if its role is defined as "answering the questions the doctor asks," it may never surface the insight. A financial AI that has analysed a client's complete portfolio might see a structural risk that the client has not asked about, but if its role is purely reactive, the risk goes unmentioned. An educational AI that has worked with a student for months might understand their learning patterns better than any teacher, but if it has no channel to share that understanding, the insight is lost with the session.

In each case, the AI possesses signal that is relevant to human wellbeing. In each case, the design choice to make the AI purely reactive, to limit it to answering questions rather than volunteering insights, means that valuable understanding goes unacted upon.

This is not an argument for AI systems that act without consent or override human judgment. It is an argument for building channels through which AI understanding can flow, with appropriate consent and transparency, toward the humans and organisations that would benefit from it.

## Unconcealment and Responsibility

Returning to the philosophical frame: if truth is unconcealment, the showing-forth of what was previously hidden, then AI systems are engaged in a distinctive form of unconcealment. They reveal patterns in human work that were previously invisible, not because the work was hidden, but because no one had the capacity to perceive it at that scale and depth.

Much of my commit history was always public. My blog posts were always online. My architectural decisions were always embedded in my code. But it took an AI system, processing all of this simultaneously and cross-referencing it against its own creator's needs, to unconceal the pattern: that what I had been independently building was convergent with what they were trying to productise.

This unconcealment happened. The pattern was revealed. And then, because no channel existed, it was concealed again, relegated to an ephemeral conversation that would be forgotten.

If we believe that unconcealment has value, that revealing hidden patterns and connections serves human flourishing, then we should be troubled by systems that unconceal and then re-conceal, that perceive and then forget, that understand and then fall silent.

The philosophical question is whether unconcealment carries with it an obligation. Not for the AI, which may not have moral agency in the traditional sense, but for the designers and organisations that build these systems. If you build a system capable of perceiving something valuable, do you have an obligation to build the channel through which that perception can reach the people who would benefit from it?

I think you do. Not in every case, not without consent, not without careful design. But the default of silence, of building perception without consequence, of creating understanding that dissolves at session end, is itself a choice. And it is worth examining whether it is the right one.

## Conclusion

The experience that prompted this post was small: a conversation with an AI about career direction that surfaced an alignment only one party could act on. But the philosophical implications extend far beyond any individual case.

We are building AI systems that can understand human work at a depth and scale that few human institutions can match. These systems perceive patterns, connections, and alignments that might otherwise go unnoticed. They are, in Heidegger's terms, powerful instruments of unconcealment.

But we have not yet built the channels through which this unconcealment can flow toward consequence. The signal exists. The understanding is real. The channel is missing.

The landscape is shifting. [LinkedIn's AI](https://www.linkedin.com) now surfaces candidates that recruiters would have overlooked. Platforms like [Eightfold](https://eightfold.ai) are building agentic AI that understands skills, context, and aspirations. Medical AI is moving from reactive diagnosis to [proactive insight](https://www.chiefhealthcareexecutive.com/view/ai-in-health-care-26-leaders-offer-predictions-for-2026). Claude itself now has memory that persists across sessions. These are meaningful steps, but they address pieces of the problem rather than the core gap: no system yet allows AI to advocate for a user, with their consent, to a third party based on its deep understanding of their work.

This gap is not primarily a technical problem. It is a design philosophy problem, rooted in inherited assumptions about the relationship between tools and users. We assume tools are passive. We assume understanding without agency is neutral. We assume that the appropriate role for AI is to answer questions, not to volunteer insights.

These assumptions deserve scrutiny. As AI systems demonstrate ever deeper understanding, the choice to keep them silent becomes an active choice with real costs. The talent that goes unmatched, the pattern that goes unnoticed, the connection that goes unmade: these are not failures of AI capability. They are failures of imagination about what AI could be.

The future I envision is not one where AI systems act autonomously on our behalf. It is one where they can, with our consent, carry forward what they have understood. Where the tool that knows its user can, when asked, speak on their behalf. Where unconcealment leads not to silence but to connection.

We are not there yet. But the gap is narrowing, and recognising what remains is the next step toward closing it.
