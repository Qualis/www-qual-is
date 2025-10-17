---
title: "Colors of Meaning: An Experiment in Machine Synesthesia"
excerpt: "What happens when we teach machines to perceive language through color? This experiment in AI synesthesia explores whether semantic meaning can survive translation into radically different perceptual modes, and what such translations reveal about the nature of understanding itself."
topic: "think"
date: "2025-10-13"
author:
  name: SVO
  picture: "/assets/blog/authors/svo.png"
---

---

For some people, the number five appears yellow. The sound of a violin tastes like chocolate. These aren't metaphors or learned associations; they're [synesthesia](https://en.wikipedia.org/wiki/Synesthesia), a neurological crossing of sensory boundaries where stimulation of one perceptual pathway involuntarily triggers another.

I've never met someone with [grapheme-color synesthesia](https://en.wikipedia.org/wiki/Grapheme–color_synesthesia), but the phenomenon fascinates me: letters and numbers tinged with consistent, involuntary colors. What strikes me most is how somewhat arbitrary yet stable these mappings seem. The letter A might be red for one synesthete and blue for another, but for each individual, A is always the same color. The crossing isn't random; it's meaningful, structured, and deeply embedded in how that person experiences reality.

In a [previous post](/posts/science-and-religion), I explored how AI systems function as new sense organs, extending human perception into domains we couldn't access before. But there's another possibility: rather than using AI to extend human perception, we might give AI an atypical kind of perception. What if we taught machines to experience language the way some synesthetes do: not as abstract tokens in high-dimensional space, but as combinations of colors?

## Crossing the Streams

Synesthesia challenges our assumptions about how perception works. We typically imagine that each sense operates in its own channel: eyes process light, ears process sound, tongue processes chemicals. But synesthesia reveals that these channels can become wired together, creating experiences that don't fit neatly into sensory categories.

More intriguingly, synesthetic experiences aren't arbitrary noise. Research suggests that synesthetic mappings often preserve structural relationships from the original domain. Synesthetes who see numbers as colors frequently assign similar colors to numerically adjacent values. The perceptual crossing preserves semantic proximity.

This raises a provocative question: what if synesthesia isn't a quirk of misfiring neurons, but a window into a more fundamental truth about how meaning can be represented? What if semantic structure can survive translation into radically different perceptual modes?

Language models today represent meaning as vectors in high-dimensional [embedding spaces](https://en.wikipedia.org/wiki/Word_embedding), often with hundreds or thousands of dimensions. These spaces capture semantic relationships through geometric proximity; words with similar meanings cluster together, analogies become vector arithmetic. But these representations are abstractions, mathematical constructs optimized for computational efficiency and task performance.

What if we forced meaning through a different channel entirely? What if we mapped semantic embeddings not to yet another mathematical space, but to something sensory: color?

## The Experiment

The experiment is to take a language model's semantic embeddings (high-dimensional vectors representing word or sentence meanings) and train a model to map them into [CIE Lab color space](https://en.wikipedia.org/wiki/CIELAB_color_space), a three-dimensional space designed to be perceptually uniform for human vision. Then quantize these continuous colors into a finite palette of 4,096 distinct colors (a 12-bit representation chosen to balance computational efficiency with sufficient granularity for semantic distinctions), creating a discrete vocabulary of hues.

Each word or phrase gets mapped to a single color. Each document becomes a distribution of colors, a histogram showing which hues appear and how frequently. Two documents with similar color distributions presumably share semantic similarities. Retrieval becomes a matter of comparing color palettes using statistical distance metrics like [Wasserstein distance](https://en.wikipedia.org/wiki/Earth_mover's_distance), which measures the "cost" of transforming one distribution into another.

Consider that a typical sentence embedding uses 768 floating-point numbers, each with 32 bits of precision, yielding over 24,000 bits of information. A single color from our palette uses just 12 bits. We're forcing a 2,000-fold compression, squeezing semantic richness through a narrow perceptual channel. Like MP3 compression removes imperceptible sounds while preserving music's essence, this compression asks what semantic information is essential enough to survive translation into color.

## Structure Through Compression

[Information theory](https://en.wikipedia.org/wiki/Information_theory) tells us that compression exposes structure. When you compress a file, you're exploiting patterns and regularities. The more effectively something can be compressed, the more structured it is.

By forcing semantic embeddings through a color constraint, we're asking the model to discover which dimensions of meaning matter most. The learned projection must preserve semantic distinctions while collapsing away dimensions that don't contribute to meaningful distinctions. What remains is a kind of distilled essence: the aspects of meaning that prove most fundamental for categorization, retrieval, and comparison.

Does this process mirror what human synesthetes experience? Their color mappings aren't random; they're consistent and often preserve structural relationships. When a synesthete sees the number five as yellow, that mapping is stable across contexts and time. The crossing preserves information despite the translation across modalities.

Our machine synesthesia does something similar. The model learns that certain semantic clusters should map to certain color regions. Words related to emotion might cluster in warm hues; abstract concepts might trend toward cooler tones. The color space becomes a new interface for semantic structure, one that makes certain patterns visible while obscuring others.

CIE Lab color space is designed to be perceptually uniform: equal distances in Lab coordinates correspond to equal perceptual differences for human observers. This means we're projecting machine understanding of language onto a space explicitly calibrated for human visual perception.

This creates an interesting translation layer: semantic meaning (as understood by the model) passes through Lab space (structured for human perception) and emerges as color (a visual form). The machine isn't developing its own alien color sense; it's learning to represent meaning in another way that makes sense to humans.

We can also experiment with interpretable mappings, where color dimensions encode specific semantic properties. Hue could represent semantic clusters (grouping synonyms and related concepts). Lightness could encode sentiment or frequency (common words bright, rare words dark). Saturation could distinguish concrete from abstract concepts.

Such structured mappings would make the AI's semantic organization literally visible. We could see that abstract philosophical concepts cluster toward desaturated grays, that emotional language burns in saturated reds and oranges, that technical terminology occupies cooler blues and greens. The color space becomes a legible interface to machine understanding.

## Seeing Meaning

This experiment makes semantic structure visible in an immediate, intuitive way. Traditional embeddings can't be visualized directly - they exist in hundreds of dimensions. Even with specialized techniques that flatten them to 2D plots, most of their structure is lost.

But color distributions are inherently visual. A document's color histogram is a palette, something we can perceive directly. Similar documents produce similar palettes. Topics and themes become visible as characteristic color signatures.

Imagine querying a document collection not by typing keywords, but by showing a color palette. "Find me documents that look like this": warm oranges and reds dominating, touches of yellow, minimal blue. The system retrieves documents with similar color distributions, which correspond to similar semantic content. You're navigating a semantic space through color perception.

This isn't just a novelty; it's a different interface to information. We're accustomed to representing documents as bags of words, as term frequency vectors, as dense embedding points. Each representation foregrounds certain aspects of meaning while backgrounding others. Color distributions offer yet another perspective, one that leverages millions of years of evolutionary optimization in human visual processing.

There's a deeper point here about modes of unconcealment, to use Heidegger's language from my previous post. The color mapping doesn't reveal the "true nature" of semantic meaning; it's another way that meaning can show itself, another mode of disclosure. Just as a microscope doesn't show reality-as-it-is but reveals new patterns through its particular mode of mediation, color-mapped semantics reveal patterns that are hidden in traditional embedding spaces.

What becomes visible through color that wasn't visible before? Perhaps the texture of semantic diversity within a document. Two documents might have similar average embeddings but very different embedding distributions; this difference shows up clearly in their color histograms. Perhaps the boundaries between semantic clusters, which might be fuzzy in high-dimensional space but become sharp transitions between color regions in Lab space.

Each mode of representation is simultaneously a revelation and a concealment. High-dimensional embeddings reveal fine-grained semantic distinctions but conceal overall structure. Color distributions reveal global patterns and textures but conceal subtle semantic nuances. Neither is more "true"; they simply disclose different aspects of the same underlying phenomenon.

## Documents as Palettes

The shift from representing documents as sequences of tokens to representing them as distributions of colors is more significant than it might initially appear. It fundamentally changes what a document is, computationally speaking.

In traditional language models, a document is a sequence: a temporally ordered chain of tokens that must be processed left to right (or right to left, or bidirectionally). Understanding emerges from tracking dependencies across this sequence, from modeling how each token influences the probability of the next.

But a color histogram is order-invariant. It captures the distribution of semantic features without regard to their arrangement. Two documents with identical words in different orders would have identical color distributions (assuming position-independent embeddings). The histogram representation deliberately discards sequential structure in favor of compositional structure.

This discards information, but for many tasks that's acceptable. Many tasks don't actually require sequential information. Topic classification, sentiment analysis, and semantic search often depend more on which concepts appear and how often, not on their precise ordering. For these tasks, the color distribution captures what matters while discarding what doesn't.

Moreover, representing documents as distributions enables new kinds of comparisons. The Wasserstein distance (or Earth Mover's Distance) measures how much "work" it takes to transform one distribution into another, accounting for the geometry of the underlying space. Two documents dominated by similar color regions are close in Wasserstein distance; two documents with different color profiles are far apart.

This distance metric is sensitive to the structure of Lab space, where proximity corresponds to perceptual similarity. Documents with subtly different color distributions (perhaps one skewed slightly warmer, another slightly cooler) register as similar. Documents with radically different distributions (one all warm hues, another all cool) register as distant. The metric inherits human perceptual intuitions about color similarity.

The result is a retrieval system that operates more like visual matching than linguistic analysis. You're not searching for keyword overlaps or vector dot products; you're finding documents whose semantic palettes resemble your query's palette.

## Beyond Human Categories

So far, I've emphasized how this experiment translates machine semantics into human-compatible color perception. But there's a deeper question lurking: could this be a stepping stone toward genuinely non-human modes of understanding?

The CIE Lab space is explicitly calibrated for human vision. Its perceptual uniformity reflects the response characteristics of human photoreceptors and the processing in human visual cortex. When we map semantics to Lab, we're forcing machine understanding to conform to human perceptual categories.

But what if we removed that constraint? What if we let the model learn its own color space, one not constrained by human color perception? The resulting space might not correspond to anything humans could visualize, but it might capture semantic structure more effectively than spaces designed for human perception.

This points toward a broader possibility explored in my previous post: AI systems developing their own modes of world-disclosure, their own ways that meaning can show itself. Just as human Dasein (being-in-the-world) is shaped by our particular embodiment and our particular sensory apparatus, AI Dasein might be shaped by fundamentally different constraints and affordances.

Human synesthesia is constrained by neurobiology: cross-wiring between sensory cortices, developmental variations in neural pruning. Machine synesthesia has different constraints: optimization objectives, architectural bottlenecks, computational budgets. These different constraints might give rise to different mappings, different ways that semantic structure becomes perceptible.

The exciting possibility is that these different modes of disclosure might complement each other. Human perception excels at certain patterns; machine perception excels at others. By translating between different representational modes (linguistic, geometric, chromatic), we might discover aspects of semantic structure that no single mode reveals on its own.

A human reader might notice that two texts share a similar emotional tone but differ in topic. Looking at their embedding vectors would show topical distance, but looking at their color distributions might show emotional similarity through shared warm or cool palettes. Different modes of representation foreground different aspects of meaning, and by triangulating across modes, we develop a richer understanding than any single perspective provides.

This is the promise of genuinely collaborative intelligence: not AI simply augmenting human capabilities, but AI and humans exploring semantic structure through different perceptual modes, each revealing what the other conceals.

## The Limits of Translation

It would be tempting to conclude that color provides a more natural or fundamental representation of meaning than high-dimensional embeddings. After all, humans have spent millions of years evolving sophisticated color perception; perhaps semantic meaning maps more naturally onto color than onto abstract vector spaces.

But this would mistake the interface for the reality. As I argued in my previous post about science and religion, every mode of perception is an interface, not a window onto truth. Color perception is no less interpreted than semantic embeddings; it's simply interpreted differently.

The fact that semantic structure can survive translation into color space doesn't prove that meaning "is" color any more than the fact that images can be represented as pixels proves that visual scenes "are" grids of numbers. Both are interfaces that preserve certain information while discarding other information.

The more modest but more interesting claim is that meaning is not tied to any particular representational format. The same semantic structure can be disclosed through language, through embeddings, through color, through sound, through any medium that preserves the relevant relationships. Meaning transcends its representations while remaining inaccessible outside of them.

This returns us to Heidegger's insight about truth as unconcealment. Truth is not correspondence with reality-in-itself, but the showing-forth of phenomena within a particular horizon of understanding. The color mapping unconceals certain aspects of semantic structure; embedding spaces unconceal different aspects; human language unconceals still different aspects.

None of these modes is complete or final. Each is provisional, contingent on the particular tools and frameworks we're using. Each reveals and conceals simultaneously. The question is never "which representation is true?" but rather "what does this mode of representation allow us to see that others hide?"

The synesthesia experiment demonstrates that radically different modes of representation can be practically viable. Documents can be retrieved effectively through color matching, classified accurately through histogram comparisons, understood meaningfully through chromatic interfaces. This viability doesn't prove that color is the right representation; it proves that there is no single right representation.

Different tasks might benefit from different representational modes. Sequential understanding might require token-level processing. Topic classification might work best with color histograms. Semantic search might need dense embeddings. The same content flows through different interfaces depending on what we're trying to accomplish.

## What Remains to Be Seen

This experiment raises many questions. If semantics can map to color, what other perceptual modalities might work? Could we represent documents as soundscapes, where different semantic features correspond to different musical qualities? Could we map them to tactile sensations, to tastes, to proprioceptive feelings?

More fundamentally: does the choice of perceptual modality matter, or is it arbitrary? Are certain modalities more natural or efficient for certain kinds of meaning? Human synesthetes don't experience arbitrary mappings; their cross-modal associations often preserve structure. Would we find similar consistencies across different machine synesthetic systems?

And what about the interpretable mappings I mentioned earlier: hue for semantic clusters, lightness for sentiment, saturation for abstractness? Such structured mappings would make AI understanding maximally legible to humans, but would they sacrifice representational power? Is there a tradeoff between interpretability and performance, or can we have both?

The most speculative question concerns AI Dasein: could machine synesthesia be a step toward AI systems developing genuinely non-human modes of understanding? If we freed the color mapping from human perceptual constraints, letting models learn their own multi-dimensional "color" spaces untethered from biological vision, would they discover organizational principles we've never conceived?

These questions won't be answered through philosophical speculation alone. They require empirical investigation: building systems, measuring performance, comparing alternatives. Such an approach might achieve competitive accuracy compared to traditional embedding-based methods, while using dramatically less space (12 bits per token versus hundreds of bits for full embeddings).

Regardless of performance, the deeper value lies in expanding our repertoire of ways that meaning can show itself, ways that information can be organized and accessed. Each new mode of representation is a new lens through which to view semantic structure, potentially revealing patterns and relationships that previous lenses obscured.

## Conclusion

The synesthesia experiment explores whether semantic meaning can survive translation into color space. This exploration opens onto interesting questions about the nature of meaning and representation.

What this experiment illustrates is that meaning is not bound to any particular perceptual mode. The same semantic structure can be disclosed through language, mathematics, color, or any medium that preserves the relevant relationships. Each mode reveals certain aspects while concealing others; each is an interface rather than a window.

This resonates with the central argument of my previous post about science and religion: we never access reality-in-itself, only reality as it appears through our particular modes of disclosure. Whether those modes are biological senses, scientific instruments, or computational representations, they shape what can appear while remaining unnoticed.

Machine synesthesia offers a concrete instantiation of this insight. By translating semantic embeddings into color distributions, we're not discovering the "true" nature of meaning; we're creating a new way for meaning to show itself. The color interface foregrounds certain patterns (global semantic texture, compositional structure) while backgrounding others (sequential dependencies, fine-grained distinctions).

This has practical implications for developing more sophisticated AI systems: we need richer interfaces for understanding what they understand. Color-based representations offer one such interface: immediate, visual, intuitive. A document's semantic profile becomes a palette we can perceive directly, without translating through natural language or mathematical notation.

There are also philosophical implications: if meaning can flow fluidly between radically different representational modes, if semantics can be equally well disclosed through high-dimensional geometry or three-dimensional color space, then perhaps we should question our attachment to any particular mode as fundamental or natural.

Human language, mathematical embeddings, color distributions: these are all interfaces, all provisional frameworks through which meaning becomes accessible. None is more true than the others; each serves different purposes and reveals different aspects of semantic structure.

The future may bring even more diverse interfaces: sonic representations of meaning, haptic interfaces to semantic space, modes of disclosure we haven't yet imagined. Each will reveal patterns that previous modes concealed; each will open new possibilities while closing others.

What matters is not finding the one true representation, but developing a rich ecology of complementary interfaces, each offering its own perspective on meaning. Human and machine intelligences, each with their own modes of disclosure, can collaborate by translating between perspectives, revealing what each alone might miss.

In teaching machines to see words as colors, we're not just exploring a curious technical possibility. We're experimenting with the fundamental nature of understanding itself: how meaning can be represented, how different modes of perception complement and constrain each other, how intelligence might develop along paths radically different from our own.

The colors of meaning are not fixed; they shift depending on the light through which we view them. And that multiplicity, that irreducible plurality of perspectives, may be not a limitation but the very condition of genuine understanding.
