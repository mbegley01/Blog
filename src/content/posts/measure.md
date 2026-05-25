---
title: 'Is Comparison Fundamental to Measurement?'
description: 'Thoughts on whether quantities describe inherent properties of objects, or they exist only in comparison'
pubDate: 'May 21 2026'
tags: ['math', 'philosopphy', 'measure]
---

Recently, I have been pondering the following scenario: if an object is the only thing in existence, how would you describe its size? There would be no meaningful difference between 5 feet or 10 feet or 1 billion feet because there is nothing to compare it to. It is not larger or smaller than anything else. If there is no meaningful notion of size, does the size still exist? Do quantities measure inherent properties of objects or events, or do they only exist relative to other objects? We will analyze the tensions within and between three categories of measurable quantities: physical quantities, probability measure, and distances.

Physical Quantities:
Weight and dimensions (length, widdth, height, etc) would fall under this category. This is the easiest category to start with because most people have strong intuitions about them from living in the world, and upon some reflection there appears to be an obvious answer to the guiding question above when looking at it through the lens of the physical world. To start, we will intorduce two theories about quantities of measurement:
1. Representationalist:  the number stems from an intrinsic property of the object; if no other objects exist except this one, the object would still be just as heavy we would just struggle to create a scale to determine the weight
2. Comparativist:  the quantity only exists in relation to other objects, so the relation is fundamental
The representationalist would still agree that comparison is important practically for determining measurements, but the property that the measurement describes exists without the comparison. An example to help understand the difference in the two views is that if the size of everything doubled, the representationalist would argue that the size has changed, but the comparativist would say it has not. 
When analyzing the question from this angle, my initial intuition leaned towards the representationalist side, and as I thought about it more I am now able to explain more in depth why. I think that the strongest reason is that there has to be some underlying cause of the size. If you start with one object in existence, it would not have a notion of size. If you add another to the universe, how would that suddenly create size for the original object? Rather, I think that this scenario shows that comparison gives us the ability to talk about quantities, but the property of the object that the quantity describes was always in existence. 

Probability:
This refers to a measurement of how likely an unknown event is to be true. We often talk about the probability of future events, such as the chance it will rain tomorrow. We can also talk about probailities from the past or present that are unknown, such as the probability that a suspect comitted the crime.
Unlike physical measurements, probabilistic measurements apply to outcomes and events, not physical objects. So we must modify the original question slightly from asking whether measures describe inherent properties of objects to whether they describe inherent propensities.
We will use the axiomatic definition formulated by Andrey Kolomogorov because it is the most rigorous foundation. Unlike frequentist methods that define probabilities as long run relative frequency over repeated trials, the axiomatic definition is universally consistent:
$$
    \text{Probability is a set-theoretic function } P(A) \text{that assigns a real number to an event }A\text{ within a sample space }S. \text{Axioms: }

    1. 0 \leq P[A] \leq 1
    2. P(S)=1, \text{and if events A and B are mutually exclusive,} P[A] + P[B] = P[A \cup B]
$$
At naive first thought, probabilities felt like a different beast from quantities like size. If there is only one possible outcome in the sample space, then that outcome has to occur. When you add another possible outcome, the probability of the first outcome decreases, so surely the quantity of probability exists only in relation to other outcomes?
Upon further thought, this is not necessarily a result of probability measures only existing in comparison, rather that the inherent probability is connected to what other events are in the sample space.
Here is the problem that makes probability different from size: probabilities of events are correlated with each other, whereas sizes of objects are independent. Except for the trivial case where an object takes up all space (meaning that every other object would have size 0), an object’s size does not impact the size of any other object. On the other hand, since we are assuming there is only one answer to the unknown event we are measuring the probability of, then one outcome being more probable means that another needs to be less probable. Essentially, probability is a zero sum game whereas size is not. How does this impact our analysis on whether a probabilistic quantity exists?
Let's poke holes in my initial instinct that probabilities only exist in comparison. Without other outcomes in the sample space to compare to, it is deterministic. But that would just mean its probability is 1, so it appears to have an inherent probability. When we add another possible event it might change the probability of the first event. However, this is not necessarily a problem for the representationalist view because the probability of the event still describes a property of the event in both cases. Consider rolling a fair dice.  Probabilities of individual events only exist in relation to each other. However, the underlying propensity structure of the system must be an intrinsic property.

Distance and Location:
Let's start by talking about distance. Unlike the quantities above, it is pretty clear to me that the concept of a distance only exists through comparison. A distance (metric) function is defined using 2 points:
$$
d(x,y) > 0 if x \neq y
d(x,x) = 0
$$
The reason distance falls as a comparativist quantity as opposed to a representationalist is that it is not an inherent property of the object on its own. You can not talk about distance if there is only one object in existence because of how distance is defined. 
The more interesting question is whether an object's location is an inherent property, or whether it only exists in relation to other objects. Does the house have a location property, or is the location just that it is next to the library? When we measure/discuss location, we do it using distances.
    The car is parked 12 feet from the building.
    The coordinates of the town are 41.67 degrees North, 87.79 degrees West
So back to our guiding example: if an object is the only thing in existence, does it have a location? My first instinct is that this question is just analogous to the physical quantities one: distances are a comparative method of measurement, similar to weight and height. The property the measurement describes, whether it is location or size, is an inherent property that exists whether we can measure it or not.  
Location has its own vocabulary describing similar ideas as representationalist vs. comparatavist views:
1. Substantavalist: believer that true, underlying reality consists of actual, independent substances rather than just relationships or attributes. Space and time exist on their own. 
2. Relationalist: the opposing view, originating famously with Gottfried Wilhelm Leibniz, claims that space is not an independent entity. Instead it is merely a system of spatial relations between material objects. If you removed all matter, spacetime would cease to exist because there would be nothing left to relate.
Doing a little reading on these two theories has led me down a rabbit hole. I realized there is another quantity that will be interesting to consider measuring, time. In light of this, I will publish my thoughts for now and come back for part 2, so stay tuned :)